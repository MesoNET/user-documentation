---
title: "Flow Matching"
description: "Guide complet pour exécuter facebookresearch/flow_matching sur Turpan."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Flow Matching sur Turpan

Ce document facilite l’exécution du dépôt https://github.com/facebookresearch/flow_matching sur Turpan. Le contenu du dépôt GitHub a été copié dans un répertoire du cluster et adapté par plusieurs modifications pratiques est désormais disponible dans un répertoire dédié du cluster pour une utilisation directe.

L’exemple reproduit correspond au cas d’images ImageNet32 (Blurred) utilisant un modèle de type Class-conditional UNet. Le test s’exécute sur 900 époques et atteint un FID de 1.16, très proche de la valeur de référence 1.14 indiquée dans le dépôt. Cet accord valide la reproduction du test, l’écart observé restant entièrement dans la variabilité attendue pour ce type de mesure.

L’article associé au dépôt est disponible ici : https://arxiv.org/pdf/2412.06264

Vous trouvez ici : 
- [Preparation du projet](#preparation-du-projet-recuperation-du-dossier--installation-de-dependences) 
- [Lancer le calcul](#lancer-le-calcul)
- [Résultats d'exécution attendus](#résultats-dexécution-attendus-sur-le-cluster)

Tout est prêt à copier / coller.

Il y a aussi une deuxième partie, non indispensable pour exécuter le cas test, mais qui offre une vue d’ensemble sur la préparation des données et les adaptations du code mises en place pour assurer le bon fonctionnement du cas test et des scripts utiles:
**Parametrage du test et préparation des donnes:**
[Détails du test](#details-de-la-mis-en-place-du-test) |
[Slurm multi-nœuds](#script-slurm-apptainer--multinœuds) |
[Dataset ImageNet32](#préparation-du-dataset-imagenet32-blurred) |
[Inception v3 FID](#téléchargement-dinception-v3-poids-pour-fid) |
**Changements sur code source:** [Modifications du code](#modifications-apportées-au-code) | 
[Pas de submitit.py](#non-utilisation-de-submitit_trainpy) |
**Scripts et outils d’analyse:** [Script d’analyse et de visualisation](#script-danalyse-et-de-visualisation-de-lapprentissage-du-modèle-process_and_plot_lr_losspy) | [ExtraScript Slurm FID](#script-slurm-pour-lancer-lévaluation-fid-depuis-un-checkpointpth--script_sbatch_evaluationsh) |

---

## Preparation du projet. Recuperation du dossier + installation de dependences.

Pour faciliter le déploiement, le code modifié ainsi que le dataset ImageNet et sa version transformée en 32 blurred sont directement accessibles sur le cluster.
Les modifications réalisées ainsi que les commandes nécessaires pour préparer ce répertoire sont spécifiées en bas de cette page.

```bash
tar xf /work/shares/IA-Tests/flow_matching_facebook.tar.gz  # Cela prends ~ 43 minutes
cd flow_matching_facebook
apptainer shell --nv --bind /tmpdir,/work --nv /work/conteneurs/sessions-interactives/pytorch-25.01-py3-calmip-si-latest.sif
Apptainer> pip install -e .

Cntrl + d  //Pour sortir du container
```

---

## Lancer le calcul
Pour démarrer l’entraînement, il suffit d’exécuter :
```bash
cd flow_matching_facebook/examples/image
sbatch script_sbatch.sh
```
Ce script lance automatiquement le code en mode distribué sur le nombre de nœuds et avec 2 GPUs par nœud.
Le seul paramètre à modifier pour changer le nombre total de nœuds/GPUs utilisés est
```bash
#SBATCH --nodes=6
```
<h3 style={{ fontSize: "1.1rem" }}> Le processus complet est donc le suivant </h3>

1.	Lancer le premier job :
```bash
sbatch script_sbatch.sh
```
Cela vous donne un `<FIRST_JOBID>`

2.	Lancer plusieurs exécutions avec dépendances (10 fois dans cet exemple) :

```bash
./launch_chain.sh 10 script_sbatch.sh <FIRST_JOBID>
```
La partition small a un temps d’exécution maximal de 4 heures. Pour lancer un entraînement long, ce script enchaîne plusieurs jobs Slurm avec des dépendances.
Lorsqu’un job se termine, le suivant reprend l’entraînement là où le précédent s’était arrêté.

3.	Vérifier que tout est en place :
```bash
squeue --me
```

## Résultats d’exécution attendus sur le cluster.
Cet exemple présente les performances obtenues lors de l’entraînement du modèle Class-Conditional U-Net sur ImageNet32 (blurred) en utilisant :
-	6 nœuds Turpan
-	12 GPU NVIDIA A100 (80 Go) 

et les options suivantes du script train.py :
```bash
        --lr 4e-4 \
        --batch_size 512 \
        --eval_frequency 100 \
        --accum_iter 1 \
        --decay_lr \
        --compute_fid \
        --ode_method dopri5 \
        --ode_options '{\"atol\": 1e-5, \"rtol\":1e-5}' \
```
C'est le deuxieme test du tableau: **https://github.com/facebookresearch/flow_matching/tree/main/examples/image**
Le batch_size est incremente pour accelerer le calcul et le learning rate est modifie en consequence. [Voir la section “Details de la mis en place du test”](#details-de-la-mis-en-place-du-test)

:::info Résultats
**Temps d’exécution :**  
900 itérations → **~65 h** (2 jours et 17 heures)

**FID obtenu :**  
**1.16** ce qui est très proche du score de référence (1,14) et se situe pleinement dans la variabilité normale de la mesure.
:::

## Script d’analyse et de visualisation de l’apprentissage du modèle process_and_plot_lr_loss.py

Ce script a été conçu pour faciliter le suivi de l’apprentissage d’un modèle pendant son entraînement. Il automatise trois étapes essentielles :
1.	Rassembler et nettoyer les logs
Le script parcourt tous les fichiers slurm-*.out générés lors des différentes exécutions du job.
Il n’en extrait que les lignes réellement utiles : celles contenant l’époque, la loss et le learning rate.
Ces lignes filtrées sont ensuite regroupées dans un fichier unique, clean_log.txt, ce qui permet d’avoir un historique clair et lisible de l’entraînement.
2.	Parser les informations importantes
À partir du fichier nettoyé, le script reconstruit l’évolution :
- de l’époque (sous forme fractionnaire, pour afficher la progression intra-époque),
- de la loss,
- du learning rate.
Cela permet d’obtenir une série temporelle continue, même lorsque l’entraînement s’étale sur plusieurs fichiers Slurm.
3.	Générer des graphiques automatiquement
Deux courbes sont produites et enregistrées dans des images PNG :
- loss_plot.png : évolution de la perte au fil de l’entraînement,
- lr_plot.png : évolution du learning rate.
Ces graphiques permettent de visualiser immédiatement si l’apprentissage progresse correctement, si la loss converge ou si la politique de learning rate fonctionne comme prévu.

Ce script est donc un outil pratique pour surveiller rapidement l’état de l’entraînement, diagnostiquer des problèmes éventuels (learning rate trop élevé, stagnation, divergence…) et visualiser la dynamique du modèle au fil du temps.

Pour l'utiliser:

```bash
module load conda
conda activate python-tools-3.10.9

python process_and_plot_lr_loss.py
```


---

## Script Slurm pour lancer l’évaluation FID depuis un checkpoint.pth : script_sbatch_evaluation.sh

Ce script Slurm sert à lancer automatiquement l’évaluation FID du modèle sur un GPU.

Il exécute :

```bash
python evaluate_fid.py \
    --checkpoint output_dir/checkpoint.pth \
    --num_images 50000 \
    --batch_size 4000 \ # Pour bien remplir le GPU sur une A100 80GB
    --data_path data/train_blurred_32/box/
```
Cela déclenche la génération d’images et le calcul du FID.

Pour l'utiliser:
```bash
sbatch script_sbatch_evaluation.sh
```

Details du script:
Ce script réalise l’évaluation du modèle en plusieurs étapes :

1. Chargement des paramètres d’entraînement

À partir de args.json, il récupère toutes les options utilisées lors du training, afin de reconstruire la même architecture et il prends en compte le dernier checkpoint généré du modèle.

2. Chargement du modèle

À partir du output_dir/checkpoint.pth :
- récupération des poids,
- reconstruction de l’architecture (Flow-Matching),

3. Construction du dataset réel

Utilise ImageFolder et les mêmes transformations que pendant l’entraînement, pour garantir une comparaison correcte.

4. Calcul du FID

Appelle eval_model, qui :
	•	génère num_images images,
	•	calcule les statistiques réelles et générées,
	•	produit le score FID.

5. Sauvegarde des résultats

Le FID est enregistré dans fid_results.json.

---

# Details de la mis en place du test
Pour améliorer l’efficacité globale de l’entraînement, le batch size est augmenté autant que le permet la mémoire GPU disponible. Un batch size plus élevé permet d’améliorer l’efficacité du calcul, de mieux exploiter le parallélisme du GPU et de réduire le temps total d’entraînement par epoch.
Lorsque le batch size est fortement augmenté, il est nécessaire d’ajuster le learning rate afin de conserver une dynamique d’apprentissage stable. Une règle couramment utilisée consiste à adapter le learning rate en fonction de la racine carrée du facteur d’augmentation du batch size.

Cas de base :
- Batch size d’origine : 32
- Nouveau batch size : 512
- Learning rate d’origine : 1×10⁻⁴

Le ratio entre les deux batch sizes est :
- 512 / 32 = 16
- La racine carrée de 16 est 4.

Donc le nouveau learning rate est :
- LR_nouveau = 1×10⁻⁴ × 4 = 4×10⁻⁴

Ainsi, avec un batch size de 512 le learning rate utilisé est 4×10⁻⁴.


## Script Slurm (Apptainer + multi‑nœuds)

Ici le sbatch script que utilisé :

```bash
#!/bin/bash
#SBATCH --job-name=flowmatching
#SBATCH --nodes=6
#SBATCH --ntasks=12
#SBATCH --ntasks-per-node=2
#SBATCH --gres=gpu:2
#SBATCH --cpus-per-task=10
#SBATCH --time=04:00:00
#SBATCH -p small
# -------------------------------------------------------
# 1. Setup Environment Variables (Replaces submitit logic)
# -------------------------------------------------------

...

# Setup Output Directory (mimics args.job_dir / args.output_dir)
# Really important!! This is the path used to restart the job from a checkpoint
JOB_DIR="output_dir"
echo "Output Directory: $JOB_DIR"

# IMPORTANT: WORLD_SIZE must match ntasks (6 nodes * 2 tasks = 12)
export WORLD_SIZE=$(( SLURM_NNODES * SLURM_NTASKS_PER_NODE ))

# -------------------------------------------------------
# 2. Setup Distributed Initialization (mimics get_init_file)
# -------------------------------------------------------

...

# -------------------------------------------------------
# 3. TODO After first sbatch execution !!!
# -------------------------------------------------------
export RESUME_PATH= #${JOB_DIR}/checkpoint.pth # Add the path to ${JOB_DIR}/checkpoint.pth only after the first sbatch is submited 
RESUME_FLAG="" 
if [[ -n "$RESUME_PATH" ]]; then
    RESUME_FLAG="--resume $RESUME_PATH"
fi

# -------------------------------------------------------
# 4. Run Command
# -------------------------------------------------------
# We use 'srun' to launch the script on every GPU across all nodes.
# We map Slurm variables to PyTorch variables so the script knows its rank.
srun apptainer exec --nv --bind /tmpdir,/work \
    --env TORCH_HOME=$TORCH_HOME \
    --env TORCHFIDELITY_HOME=torch_home \
    --nv /work/conteneurs/sessions-interactives/pytorch-25.01-py3-calmip-si-latest.sif \
    bash -c "
    # 1. Export Distributed Variables so Python finds them automatically
    export RANK=\$SLURM_PROCID
    export LOCAL_RANK=\$SLURM_LOCALID
    export WORLD_SIZE=$WORLD_SIZE
    export MASTER_ADDR=$MASTER_ADDR
    export MASTER_PORT=$MASTER_PORT

    echo \"Rank \$RANK (Local \$LOCAL_RANK) on \$(hostname)\"

    # 2. Run Python WITHOUT the conflicting flags (--rank, --gpu, --job_dir)
    python train.py \
        --dist_url 'env://' \
        --output_dir '${JOB_DIR}' \
        ${RESUME_FLAG} \
        --data_path '${IMAGENET_DIR}train_blurred_$IMAGENET_RES/box/' \
        --lr 4e-4 \
        --batch_size 512 \
        --accum_iter 1 \
        --eval_frequency 100 \
        --decay_lr \
        --compute_fid \
        --ode_method dopri5 \
        --ode_options '{\"atol\": 1e-5, \"rtol\":1e-5}' \
        \"\$@\"
    "
```

> :::info
> - `WORLD_SIZE` doit correspondre au nombre total de tâches (ntasks).  
> - `JOB_DIR` est crucial : toutes les runs doivent pointer vers un `--output_dir` identique pour reprendre depuis le checkpoint.
> :::

---

## Préparation du dataset ImageNet32 (Blurred)

Placer les données sous :

```
examples/image/data/
```

Téléchargement (méthode générique) :

```bash
wget https://image-net.org/data/ILSVRC/blurred/train_blurred.tar.gz
```

Si le lien change :
1. Créez un compte sur https://image-net.org  
2. Allez dans **Downloads**  
3. Télécharger *Blurred training images*  
4. Clic droit → *Copy link* → `wget <link>`

Décompressez dans : `examples/image/data/train_blurred_32/box/` (ou la résolution choisie).

---

## Téléchargement d'Inception v3 (poids pour FID)

```bash
wget https://github.com/toshas/torch-fidelity/releases/download/v0.2.0/weights-inception-2015-12-05-6726825d.pth
```

Les poids sont places dans :

```
examples/image/torch_home/hub/checkpoints/
```

La variable TORCH_HOME est définie:

```bash
export TORCH_HOME=$PWD/examples/image/torch_home
```

> :::info
> `torch_fidelity` et `torch.hub` cherchent par défaut dans `$TORCH_HOME/hub/checkpoints/`. Assurez‑vous que le fichier est dans ce dossier et que `TORCH_HOME` est exporté **avant** de lancer l'entraînement.
> :::

---

## Modifications apportées au code

Pour que tout fonctionne sur notre cluster, j'ai appliqué les modifications suivantes :

### 1) Chargement sécurisé des checkpoints
Dans `training/load_and_save.py`, ligne autour de 54 :  
Remplacez la ligne

```python
checkpoint = torch.load(args.resume, map_location="cpu")
```

par :

```python
checkpoint = torch.load(args.resume, map_location="cpu", weights_only=False)
```

Ceci évite l'erreur liée à `argparse.Namespace` sous les versions récentes de PyTorch.

### 2) Sauvegarde systématique du modèle à chaque epoch (sans accumuler de fichiers)
Dans `train.py`, nous activons la sauvegarde automatique à chaque fin d’epoch pour
garantit qu’on peut reprendre l’entraînement à tout moment depuis le dernier état.

Le bloc utilisé est :
```python
# --------------------------------------------------------------------------
# Save *one* checkpoint at the end of each epoch (overwrite previous)
# --------------------------------------------------------------------------
if args.output_dir and distributed_mode.is_main_process():
    save_model(
        args=args,
        model=model,
        model_without_ddp=model_without_ddp,
        optimizer=optimizer,
        lr_schedule=lr_schedule,
        loss_scaler=loss_scaler,
        epoch=epoch,
    )
# --------------------------------------------------------------------------
```
et dans `training/load_and_save.py` une ligne est commenté pour pas 
empecher la generation de checkpoint pour chaque epoch et éviter ansi de consommer trop d’inodes dans /tmpdir,

```python
checkpoint_paths = [
#    output_dir / ("checkpoint-%s.pth" % epoch_name),
    output_dir / "checkpoint.pth",
]

```

---

##  Non utilisation de submitit_train.py

:::caution
- `submitit_train.py` dans le repo génère des scripts SLURM qui peuvent ne pas être conteneur-aware. Dans notre setup Apptainer il était plus simple d'appeler `train.py` directement dans le conteneur via `srun apptainer exec ...`.
:::


---
