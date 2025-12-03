# Ray Tune

Ray Tune est un framework évolutif d'optimisation d'hyperparamètres qui facilite l'exécution de nombreux entraînements en parallèle. Chaque expérience, appelée *trial*, entraîne un modèle en utilisant une combinaison différente d'hyperparamètres — par exemple le taux d'apprentissage, la taille de lot, le nombre de couches ou les paramètres de l'optimiseur. Plutôt que de lancer des dizaines d'expériences à la main, Ray Tune automatise le processus et répartit le travail sur l'ensemble des ressources de calcul disponibles.

L'un des points forts de Ray Tune est son support d'une large palette d'algorithmes d'optimisation modernes. Au-delà de la recherche aléatoire ou de la recherche sur grille, Ray Tune peut adapter automatiquement l'échantillonnage des hyperparamètres en utilisant des méthodes telles que BOHB, HEBO, Optuna, l'optimisation bayésienne, HyperBand ou ASHA. Ces algorithmes tirent parti des résultats des essais précédents et concentrent la recherche sur les régions les plus prometteuses, ce qui permet d'obtenir de meilleurs hyperparamètres avec moins d'expériences au total.

Ce document explique comment lancer Ray Tune sur le cluster Turpan en utilisant des scripts SLURM pour deux et huit GPU. Il décrit aussi comment modifier la configuration des hyperparamètres, comment basculer entre différents algorithmes de recherche, et comment le script d'entraînement construit dynamiquement l'architecture du réseau de neurones à partir des hyperparamètres choisis pour chaque essai. Enfin, il indique comment adapter l'exemple à des modèles plus complexes, comme des LLM basés sur des transformeurs.

---
## Ressources sur cette page
- [Copier l'exemple de code et mettre en place l'environement](#copier-lexemple-de-code)  
- [Structure du répertoire](#structure-du-répertoire)  
- [Script SLURM (sbatch)](#script-slurm-sbatch)  
- [Script principal Ray Tune](#script-principal-ray-tune)  
- [Espace de recherche Ray Tune](#espace-de-recherche-ray-tune-modifiable)  
- [Modèle MNIST dynamique](#modèle-mnist-dynamique)  
- [Adapter pour des expériences LLM](#adapter-pour-des-expériences-llm)  
- [Lancer le job](#lancer-le-job)  
- [Évolutivité attendue](#évolutivité-attendue)  
- [Algorithmes de recherche avancés](#utiliser-des-algorithmes-de-recherche-avancés-bohb-hebo-optuna-bayesopt)  

---
## Copier l'exemple de code
Tous les scripts d'exemple Ray Tune et les lanceurs SLURM sont disponibles sur Turpan et peuvent être copiés directement depuis :
```bash
/work/shares/IA-Tests/ray_tune.tar.gz
```
Pour l'extraire dans votre répertoire :
```bash
tar xvf /work/shares/IA-Tests/ray_tune.tar.gz
```
Cela créera un répertoire nommé `ray_tune/`.

### Installer ray dans l'environement
Le seul paquet nécessaire est ray.
Pour l’installer, il suffit d’ouvrir le conteneur en mode shell :
```bash
apptainer shell --bind /tmpdir,/work --nv /work/conteneurs/sessions-interactives/pytorch-24.02-py3-calmip-si.sif
```
Ensuite, à l’intérieur du conteneur, on installe Ray avec pip :
```bash
Apptainer> pip install ray
```
Pour sortir du conteneur :
```bash
Crlt + d // pour sortir du conteneur 
```
A ce moment là tout est pret pour [lancer le calcul](#lancer-le-job)

---

## Structure du répertoire
Après extraction vous devriez obtenir :

```
ray_tune/
├── code_and_slurm-scripts
│   ├── mnist_ddp.py
│   ├── ray_tune.py
│   ├── run-ray_tune_on_2gpus_Turpan.sh
│   ├── run-ray_tune_on_8gpus_Turpan.sh
├── data
│   └── MNIST/               (dataset MNIST téléchargé)
└── README.txt
```

### Description des fichiers

| Fichier                            | Description                                                   |
|-----------------------------------|---------------------------------------------------------------|
| `mnist_ddp.py`                    | Script d'entraînement utilisant PyTorch                      |
| `ray_tune.py`                     | Script principal Ray Tune pour l'HPO                         |
| `run-ray_tune_on_2gpus_Turpan.sh` | Script SLURM pour lancer Ray Tune sur 2 GPU                  |
| `run-ray_tune_on_8gpus_Turpan.sh` | Script SLURM pour lancer Ray Tune sur 8 GPU                  |
| `data/MNIST`                      | Dataset MNIST (téléchargé automatiquement si manquant)       |
| `README.txt`                      | Instructions et notes                                         |

#### Rôle des fichiers : comment Ray Tune interagit avec le code d’entraînement
Le fichier ray_tune.py agit comme une couche au-dessus du script d’entraînement :
- C’est lui qui définit l’espace d’hyperparamètres à explorer (learning rate, batch size, nombre de couches, etc.).
- Il choisit comment explorer cet espace : aléatoire, grid search, BOHB, Optuna, BayesOpt, etc.
- Il crée et lance chaque essai d’entraînement (trial) en appelant votre fonction d’entraînement dans mnist_ddp.py.
- Il attribue les ressources (nombre de GPU/CPU par essai).
- Il récupère les métriques via tune.report() et les utilise pour guider la recherche.

## Script SLURM (sbatch)
Exemple de fichier sbatch utilisé pour lancer Ray Tune sur **4 nœuds**, chacun avec **2 GPU**, en utilisant `srun` + `apptainer` :

```bash
#!/bin/bash
#SBATCH --job-name=benchmark
#SBATCH -N 4
#SBATCH --ntasks=4
#SBATCH --cpus-per-task=40
#SBATCH --mem=100G
#SBATCH --time=40
#SBATCH --gres=gpu:2

srun apptainer exec --bind /tmpdir,/work --nv /work/conteneurs/sessions-interactives/pytorch-24.02-py3-calmip-si.sif python3 ray_tune.py
```

### Concepts clés
Une tâche Ray correspond à un processus lancé par Ray. Avec `--ntasks=4` et `--gres=gpu:2`, vous avez 4 workers Ray et chaque worker voit 2 GPU. Ray détecte automatiquement les GPU réservés via `ray.cluster_resources()` et lance des *trials* en parallèle tant que des GPU libres existent.

---

## Script principal Ray Tune
Le script `ray_tune.py` initialise Ray, définit l'espace de recherche, le scheduler et soumet les essais.

### Initialiser Ray dans SLURM
Ray est lancé localement dans le job :

```python
ray.init(
    num_cpus=max(1, int(os.environ.get("SLURM_CPUS_PER_TASK", "40"))),
    include_dashboard=False,
    _system_config={"enable_metrics_collection": False}
)
```

### Attribution des ressources
Chaque essai utilise par exemple :

```python
tune.with_resources(original_main, resources={"cpu": 4, "gpu": 1})
```

Cela signifie que chaque *trial* consomme 1 GPU. Si chaque nœud offre 2 GPU → 2 trials simultanés par noeud. Avec 4 nœuds → 8 trials en parallèle.

Si vous voulez qu'un *trial* utilise plusieurs GPU, changez `"gpu": 2` et adaptez le code d'entraînement pour utiliser `DistributedDataParallel` ou un schéma multi-GPU.

---

## Espace de recherche Ray Tune (modifiable)
Exemple d'espace utilisé :

```python
config = {
    "lr": tune.loguniform(1e-5, 5e-3),
    "batch_size": tune.choice([16, 32, 64, 128]),
    "optimizer": tune.choice(["adam", "sgd", "adamw"]),
    "weight_decay": tune.uniform(0.0, 0.1),

    "conv1_channels": tune.choice([8, 16, 32, 64]),
    "conv2_channels": tune.choice([16, 32, 64, 128]),
    "conv3_channels": tune.choice([0, 16, 32, 64, 128]),

    "kernel1": tune.choice([3, 5, 7]),
    "kernel2": tune.choice([3, 5, 7]),
    "kernel3": tune.choice([3, 5, 7]),

    "activation": tune.choice(["relu", "gelu", "silu"]),
    "dropout": tune.uniform(0.0, 0.5),

    "fc_dim": tune.choice([64, 128, 256, 512]),

    "scheduler": tune.choice(["none", "cosine", "step", "onecycle"]),
    "step_size": tune.choice([10, 20, 30]),
    "gamma": tune.uniform(0.1, 0.9),

    "epochs": tune.choice([2, 3, 5]),
    "num_classes": 10,
}
```

Adaptez ces paramètres pour élargir ou restreindre l'espace de recherche selon vos besoins.

---

### Comment Ray collecte les résultats
À la fin d'une époque, le script d'entraînement appelle :

```python
tune.report({"loss": loss_sum / len(train_loader)})
```

Les logs Ray et le stdout s'écrivent dans le fichier SLURM (p.ex. `slurm-<JOBID>.out`), que vous pouvez consulter avec `cat`.

---

## Modèle MNIST dynamique
Dans `mnist_ddp.py`, le modèle se construit dynamiquement à partir de la configuration Ray :

```python
self.layer1 = nn.Sequential(
    nn.Conv2d(1, config["conv1_channels"], config["kernel1"], padding=config["kernel1"]//2),
    nn.BatchNorm2d(config["conv1_channels"]),
    nn.ReLU(),
    nn.MaxPool2d(2)
)
```

Cette approche permet :
- d'ajouter/supprimer des couches,
- de tester différentes largeurs de canaux,
- de changer les fonctions d'activation,
- d'activer le dropout,
- de varier la taille des noyaux.

Tout cela est construit automatiquement pour chaque *trial*.

---

## Adapter pour des expériences LLM
Pour passer de MNIST à un modèle T5 (ou autre LLM), remplacez la partie modèle par une construction T5 :

```python
from transformers import T5Config, T5ForConditionalGeneration

config_llm = T5Config(
    d_model=config["hidden_size"],
    num_heads=config["num_heads"],
    num_layers=config["num_layers"]
)

model = T5ForConditionalGeneration(config_llm)
```

Déclarez les hyperparamètres pertinents dans l'espace Ray, par exemple :

```python
"hidden_size": tune.choice([512, 768, 1024]),
"num_heads": tune.choice([8, 12, 16]),
"num_layers": tune.choice([4, 8, 12]),
```

Supprimez les parties liées à MNIST (dataset, transformations) et adaptez le pipeline d'entraînement.

---

## Lancer le job

Dans `code_and_slurm-scripts` il y a deux exemples prêts à être lances `run-ray_tune_on_2gpus_Turpan.sh` et `run-ray_tune_on_8gpus_Turpan.sh`
Pour les lances il suffit de :

```bash
sbatch run-ray_tune_on_2gpus_Turpan.sh
```

Pour surveillez la file d'attente :
```bash
squeue --me
```

Vérifiez l'utilisation des GPU une fois le job est en RUNNING (commande interne au cluster) :
```bash
placement --checkme
```

---

## Évolutivité attendue
Si chaque essai demande 1 GPU et que `num_samples=8` :
- 1 nœud = 2 GPUs → 2 essais simultanés
- 4 nœuds = 8 GPUs → 8 essais simultanés (tous les essais peuvent s'exécuter en parallèle)
- Le temps total ≈ temps d'entraînement d'un modèle (si le nombre d'essais ≤ nombre de GPUs)

`num_samples` définit le nombre total d'essais Ray lancés (échantillonnés dans l'espace d'hyperparamètres). Ce n'est pas nécessairement égal au nombre de combinaisons possibles : Ray échantillonne `num_samples` points dans l'espace.

---

## Utiliser des algorithmes de recherche avancés (BOHB, HEBO, Optuna, BayesOpt)
Ray Tune permet de remplacer la recherche aléatoire par des algorithmes adaptatifs. Ajoutez un *search_alg* au `Tuner` :

```python
from ray import tune
from ray.tune.search.bohb import TuneBOHB
from ray.tune.search.optuna import OptunaSearch
from ray.tune.search.hebo import HEBOSearch
from ray.tune.search.bayesopt import BayesOptSearch

search_alg = OptunaSearch()  # <-- choisissez un algo

tuner = tune.Tuner(
    train_fn,
    param_space=config,
    tune_config=tune.TuneConfig(
        metric="loss",
        mode="min",
        num_samples=50,        # nombre total d'essais
        search_alg=search_alg, # l'algorithme d'optimisation
        max_concurrent_trials=8,
    ),
)
tuner.fit()
```

Chaque algorithme a ses forces : Optuna est robuste et populaire, HEBO est efficace pour certains espaces complexes, BOHB combine bande passante et optimisation bayésienne pour être efficace en budget restreint. Le "meilleur" dépend du problème et du budget : essayez plusieurs algos.

---
