# Optuna

Optuna est une bibliothèque d’optimisation d’hyperparamètres moderne, efficace et très flexible. Elle permet d’explorer automatiquement un espace d’hyperparamètres, d’utiliser des algorithmes avancés comme TPE, CMA-ES ou la recherche par grille, et d’exécuter de nombreux essais (« trials ») en parallèle.  
Contrairement à Ray Tune, qui fonctionne bien sur un seul nœud, **Optuna supporte naturellement les environnements multi‑nœuds sur Turpan**, via une base de données partagée SQLite que chaque worker met à jour. Cela permet de lancer des centaines de trials en parallèle sur plusieurs GPU et plusieurs nœuds.

Ce document explique comment utiliser Optuna sur Turpan :  
- [copier les fichiers d’exemple](#copier-lexemple-optuna)
- [Structure du répertoire](#structure-du-répertoire)
- [installer Optuna dans le conteneur](#installer-optuna-dans-le-conteneur-turpan)
- [fonctionnement d’Optuna sur Turpan (multi‑nœuds)](#fonctionnement-doptuna-sur-turpan-multinœuds)
- [écrire votre fonction `objective(trial)` dynamique](#la-fonction-objectivetrial--cœur-doptuna)
- [Script SBATCH (multi‑nœuds, multi‑GPU)](#script-sbatch-multinœuds-multigpu)  
- [récupérer le meilleur modèle](#récupérer-le-meilleur-modèle) 
- [Algorithmes d'optimisation avancés dans Optuna](#algorithmes-doptimisation-avancés-dans-optuna) 
- [Visualisations Optuna](#visualisations-optuna)
- [Adapter l’exemple à des modèles plus grands (LLM)](#adapter-lexemple-à-des-modèles-plus-grands-llm)
- [Lancer le job](#lancer-le-job)
- [Scalabilité attendue sur Turpan](#scalabilité-attendue-sur-turpan)

Toute la documentation est adaptée exactement à l’exemple que nous avons mis en place pour Turpan.

---

##  Copier l'exemple Optuna

Les scripts d’exemple Optuna se trouvent dans :

```
/work/shares/IA-Tests/optuna.tar.gz
```

Extraire dans votre espace :

```bash
tar xvf /work/shares/IA-Tests/optuna.tar.gz
```

Le répertoire suivant sera créé :

```
optuna/
├── code_and_slurm-scripts
│   ├── optuna_mnist.py
│   ├── check_best_model.py
│   ├── run-optuna-multinode_Turpan.sh
│   ├── init_optuna_db.py
│   ├── study.db                (fichier SQLite partagé)
├── data/
│   └── MNIST/                  (dataset MNIST)
└── README.txt
```

---

##  Structure du répertoire

| Fichier | Rôle |
|--------|------|
| `optuna_mnist.py` | Script principal Optuna (fonction objective + entraînement MNIST) |
| `check_best_model.py` | Lit le meilleur modèle depuis la base de données |
| `run-optuna-multinode-Turpan.sh` | Script SLURM multi‑nœuds utilisant apptainer |
| `init_optuna_db.py` | Crée la base de donnes. Code lancé aussi par run-optuna-multinode-Turpan.sh |
| `study.db` | Base SQLite contenant les résultats (crée par le code) |
| `data/MNIST` | Dataset téléchargé automatiquement |
| `README.txt` | Instructions |

Optuna utilise le fichier `study.db` comme base de données distribuée.  
Tous les workers (tâches SLURM) écrivent dans cette base.

---

##  Installer Optuna dans le conteneur Turpan

Ouvrir un shell dans le conteneur :

```bash
apptainer shell --bind /tmpdir,/work --nv /work/conteneurs/sessions-interactives/pytorch-24.02-py3-calmip-si.sif
```

Installer Optuna :

```bash
Apptainer> pip install optuna
```

Quitter le conteneur :

```
Ctrl + d
```

Vous êtes maintenant prêt à lancer l’optimisation.

---

##  Fonctionnement d’Optuna sur Turpan (multi‑nœuds)

Optuna fonctionne ainsi :

- chaque tâche SLURM (chaque GPU typiquement) démarre un worker,
- chaque worker charge la même base de données `study.db`,
- la méthode `study.optimize()` demande à Optuna de créer un *trial*,
- Optuna réserve ce trial dans la base de données,
- votre code entraîne un modèle,
- Optuna écrit le résultat dans la base,
- un autre worker récupère un nouveau trial dans la base,
- et le processus continue.

 **Aucun worker ne traite deux fois le même trial** le travail se synchronise automatiquement  

---

##  La fonction `objective(trial)` — cœur d’Optuna

Exemple utilisé dans l’entraînement MNIST :

```python
def objective(trial):

    config = {
        "lr": trial.suggest_float("lr", 1e-4, 5e-3, log=True),
        "batch_size": trial.suggest_categorical("batch_size", [16, 32, 64, 128]),
        "conv1_channels": trial.suggest_categorical("conv1_channels", [8, 16, 32, 64]),
        "conv2_channels": trial.suggest_categorical("conv2_channels", [16, 32, 64, 128]),
        "kernel1": trial.suggest_categorical("kernel1", [3, 5, 7]),
        "kernel2": trial.suggest_categorical("kernel2", [3, 5, 7]),
        "fc_dim": trial.suggest_categorical("fc_dim", [64, 128, 256, 512]),
        "epochs": trial.suggest_categorical("epochs", [2, 3, 5]),
        "num_classes": 10
    }

    loss = train_model(config, trial)
    return loss
```

### Pourquoi passer `trial` à `train_model()` ?

Car `trial.report()` et `trial.should_prune()` sont nécessaires :

```python
trial.report(epoch_loss, epoch)

if trial.should_prune():
    raise optuna.TrialPruned()
```

Cela active le *pruning* :  
→ arrête tôt les mauvaises configurations → économise du temps GPU

---

##  Script SBATCH (multi‑nœuds, multi‑GPU)

Voici la version adaptée Turpan :

```bash
#!/bin/bash
#SBATCH --job-name=optuna-mnist
#SBATCH --output=logs/%A_%a.%t.out
#SBATCH --error=logs/%A_%a.%t.err
#SBATCH --nodes=2                 # 2 nodes
#SBATCH --ntasks-per-node=2       # 2 tasks per node -> 2 GPUs per node
#SBATCH --gres=gpu:2              # 2 GPUs per node
#SBATCH --gpus-per-task=1
#SBATCH --cpus-per-task=4
#SBATCH --time=00:10:00
#SBATCH --mem=16G

set -euo pipefail

# ---------- USER CONFIG ----------
USER_WORKDIR="${SLURM_SUBMIT_DIR}"        # must be shared across nodes
CONTAINER=/work/conteneurs/sessions-interactives/pytorch-24.02-py3-calmip-si.sif
PY_SCRIPT=$USER_WORKDIR/optuna_mnist.py
STUDY_DB=sqlite:///study.db
DB_PATH="$USER_WORKDIR/study.db"
STUDY_NAME="mnist_hpo"
TOTAL_TRIALS=500            # total trials you want to run across all workers
# -----------------------------------
INIT_SCRIPT=$USER_WORKDIR/init_optuna_db.py

mkdir -p "$USER_WORKDIR"
mkdir -p logs

# ======================================================
#  CREATE DB BEFORE RUNNING THE CODE
# ======================================================
echo "🟦 Initializing DB before starting parallel workers..."

apptainer exec \
    --bind /tmpdir \
    "$CONTAINER" \
    python "$INIT_SCRIPT" "$STUDY_DB" "$STUDY_NAME"
echo "[SBATCH] DB ready. Launching workers…"

# Ensure $HOME/.local/bin is in PATH for the container
export PATH="$HOME/.local/bin:$PATH"

echo "SLURM NODELIST: $SLURM_NODELIST"
echo "SLURM_NNODES: $SLURM_NNODES"
echo "SLURM_NTASKS_PER_NODE: $SLURM_NTASKS_PER_NODE"
echo "Total tasks (ntasks): $SLURM_NTASKS"
echo "This job will launch $SLURM_NTASKS tasks (one per GPU)."

# srun will launch the same command once per task (ntasks = nodes * ntasks-per-node)
# Each task runs a separate Apptainer instance, inside the container the script uses SLURM vars
srun --kill-on-bad-exit=1 --ntasks=$SLURM_NTASKS \
    apptainer exec --nv \
        --bind /tmpdir \
        --env PATH="$PATH" \
        --env STUDY_DB="/optuna_workdir/$(basename "$STUDY_DB")" \
        --env STUDY_NAME="$STUDY_NAME" \
        --env TOTAL_TRIALS="$TOTAL_TRIALS" \
        "$CONTAINER" \
        python "$PY_SCRIPT"
```

### Comment cela se répartit ?

Avec deux nœuds × deux GPU → **4 workers Optuna en parallèle**.

Chaque worker traite un trial indépendant.

---

## Récupérer le meilleur modèle

Vous pouvez lancer :

```bash
apptainer exec --bind /tmpdir,/work --nv /work/conteneurs/sessions-interactives/pytorch-24.02-py3-calmip-si.sif python check_best_model.py
```

Le fichier :

```python
import optuna
study = optuna.load_study("mnist_hpo", storage="sqlite:///study.db")
print(study.best_value)
print(study.best_params)
```

---

## Algorithmes d'optimisation avancés dans Optuna

Optuna propose plusieurs moteurs de recherche d’hyperparamètres :

| Algorithme | Description | Recommandé |
|-----------|-------------|------------|
| **TPE (par défaut)** | Très efficace, adaptatif | Recommandé |
| **RandomSearch** | Basique mais robuste | petites expériences |
| **GridSearch** | exhaustive | espaces petits |
| **CMA‑ES** | optimisation évolutive | grands espaces continus |
| **BruteForceSampler** | debug | jamais en production |
| **NSGA‑II** | optimisation multi‑objectifs | problèmes scientifiques |

### Exemple TPE (par défaut)
```python
study = optuna.create_study(direction="minimize", sampler=optuna.samplers.TPESampler())
```

### Exemple CMA‑ES
```python
from optuna.samplers import CmaEsSampler
study = optuna.create_study(sampler=CmaEsSampler())
```

---

## Visualisations Optuna

Optuna permet de générer automatiquement des graphiques :

```python
optuna.visualization.plot_optimization_history(study)
optuna.visualization.plot_param_importances(study)
optuna.visualization.plot_parallel_coordinate(study)
```

---

## Adapter l’exemple à des modèles plus grands (LLM)

Il suffit de remplacer le modèle MNIST :

```python
from transformers import T5ForConditionalGeneration, T5Config

def build_model(config):
    tconf = T5Config(
        d_model=config["hidden_size"],
        num_heads=config["num_heads"],
        num_layers=config["num_layers"]
    )
    return T5ForConditionalGeneration(tconf)
```

Et définir un espace :

```python
"hidden_size": trial.suggest_categorical([512, 768, 1024]),
"num_layers": trial.suggest_int("num_layers", 4, 24),
"num_heads": trial.suggest_categorical([8, 12, 16]),
"lr": trial.suggest_float(1e-6, 1e-4, log=True),
```

---

## Lancer le job

```bash
sbatch run-optuna-multinode-Turpan.sh
```

Suivre la file :

```bash
squeue --me
```

Voir quels GPU sont utilisés :

```bash
placement --checkme
```

---

## Scalabilité attendue sur Turpan

Si vous lancez 500 trials avec 4 GPU :

→ 4 trials simultanés  
→ Optuna envoie un nouveau trial dès qu’un GPU se libère  
→ Temps total ≈ (500 / 4) × durée d’un entraînement

Avec 8 GPU → 8 trials simultanés  
Avec 16 GPU → 16 trials simultanés

Optuna scale bien tant qu’il y a des trials à lancer.

Ce document fournit un exemple complet utilisant MNIST, mais le schéma peut être étendu à des modèles plus complexes comme des CNN plus profonds ou des modèles transformers.

---

