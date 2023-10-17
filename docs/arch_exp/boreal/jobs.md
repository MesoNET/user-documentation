---
title: Lancer un calcul
sidebar_position: 4
---

# Lancer un job sur Boréale

## Environnement de soumission (Slurm)

Le répertoire `/soft/boreale/slurm/criann_scripts_templates` contient les **scripts de soumission** génériques pour code séquentiel ou OpenMP, MPI, MPI+OpenMP en mode natif (`job*_VE.sl`), hybride (`job_VE-VH.sl`), hybride au moyen de l'API VEDA (`job_*VEDA*`) ou purement CPU (`job_MPI_OpenMP_VH.sl`).

### Mémoire

La directive `SBATCH --mem` de Slurm contrôle pour un travail :

- la mémoire résidente (RSS) par VE : la limite demandée par `--mem` s'applique à chaque VE du travail
- la mémoire résidente par VH : la limite demandée par `--mem` s'applique au processus séquentiel, à la somme des threads ou à la somme des tâches MPI sur CPU du travail dans chacun de ses nœuds de calcul (Vector Host).

### Commandes

Ce tableau fournit les commandes utiles pour la soumission des travaux.

| Action | Commande |
|--------|----------|
| Caractéristiques des partitions (classes) |	`sinfo` |
| Soumettre un travail | `sbatch script_soumission.sl` |
| Soumettre un travail en "hold" (attente) | `sbatch -H script_soumission.sl` |
| Libérer un travail en "hold" (attente) | `scontrol release job_id` |
| Lister l'ensemble des travaux | `squeue` |
| Lister ses propres travaux | `squeue -u login` |
| Affichage des caractéristiques d'un travail |	`scontrol show job job_id` |
| Prévision d'horaire de passage d'un travail en file d'attente |	`squeue --start --job job_id` |
| Vérification de la syntaxe et prévision d'horaire de passage d'un travail sans le soumettre |	`sbatch --test-only script_soumission.sl` |
| Prévision d'horaire de passage de ses propres travaux	| `squeue -u login --start` |
| Tuer un travail	scancel | `job_id` |

### Variables d'environnement 

Les variables utilitaires suivantes (liste non exhaustive) peuvent être exploitées dans les commandes utilisateurs (Shell) d'un script de soumission.

| Action | Commande |
|--------|----------|
| `SLURM_JOB_ID` | Identification du travail (exemple : 64549) |
| `SLURM_JOB_NAME` | Nom du travail (spécifié par `#SBATCH -J`) | 
| `SLURM_SUBMIT_DIR` | Nom du répertoire initial (dans lequel la commande `sbatch` a été lancée) | 
| `SLURM_NTASKS` | Nombre de processus MPI du travail | 
| `LOCAL_WORK_DIR` | Nom du répertoire de scratch temporaire fondé sur le numéro du calcul : `/dlocal/run/$SLURM_JOB_ID`. Cette arborescence est supprimée 45 jours après la fin du calcul. |

### Les partitions (classes de soumissions)

#### Travaux d'exécution de calcul

La partition est spécifiée par le script de soumission avec la directive `#SBATCH --partition` (ou dans la ligne de commande : `sbatch --partition compute script_soumission.sl`).

| Partition | Durée maximale | Noeuds disponibles | Limites par calcul |
|-----------|----------------|--------------------|--------------------|
|  compute | 100h | 9 noeuds | 9 nœuds (288 cœurs et 243000 Mo / nœud) |

#### Travaux de visualisation

La commande `startvisu` soumet un travail de partition `visu`, demandant 64 Go de mémoire, 4 cœurs et 4 heures de limite de temps.

La demande en temps est extensible à une durée supérieure si besoin, par l'option --time (exemple pour 6 heures : `startvisu --time 6:00:00`). La limite de temps de la partition visu est de 8 heures.

### Visualisation à distance 

Une [documentation spécifique pour les travaux de visualisation](https://services.criann.fr/services/hpc/mesonet-project/guide/visu/) est disponible.

### Gestion des signaux envoyés par Slurm

[Une documentation spécifique pour attraper et traiter les signaux envoyés par Slurm](https://services.criann.fr/services/hpc/mesonet-project/guide/signals-sent-by-slurm/) est disponible.


