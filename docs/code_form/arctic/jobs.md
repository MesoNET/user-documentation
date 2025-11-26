---
title: "Lancer un calcul"
sidebar_position: 6
---

# Lancer un calcul sur Arctic

## Commandes de Slurm
| Action                                         | Commande                            
| -----------------------------------------------| ----------------------------------------- |
| Caractéristiques des partitions (classes)      | `sinfo`                                   |
| Soumettre un travail                           | `sbatch slurm_script.sl`             |
| Lister l'ensemble des travail                  | `squeue`                                  |
| Lister ses propres travaux                     | `squeue --me`                             |
| Affichage des caractéristiques d'un travail    | `scontrol show job job_id`                |
| Prévision d'horaire de passage d'un travail en file d'attente | `squeue --start --job job_id`|
| Prévision d'horaire de passage de ses propres travaux | `squeue --me --start`              |
| Vérification de la syntaxe et prévision d'horaire de passage d'un travail, sans le soumettre | `sbatch --test-only slurm_script.sl` |
| Tuer un travail                                | `scancel job_id`                          |

## Modèles de script
Les modèles de script sont fournis dans un répertoire `/soft/slurm/Arctic_Modeles_scripts/`

## Les partitions (classes de soumission)
La parition Slurm est à spécifier par l'utilisateur dans son script. 

| Partition    | Durée maximale | Limites par calcul                                      
| ------------ | -------------- |------------------------------------------------------- |
| **ar_mig**   | 8 h            | 4 cœurs, 1 instance de GPU NVIDIA A100 partitionné en MIG |
| **ar_a100**  | 8 h            | 16 cœurs, 1 GPU NVIDIA A100 |
| **ar_h200**  | 8 h            | 24 cœurs, 1 GPU NVIDIA H200 |
| **ar_mi210** | 1 h            | 16 cœurs, 1 GPU AMD MI210 |
| **ar_fin**   | 1 h            | 384 cœurs (2 nœuds de calcul purs CPU, AMD Genoa) |

## Domaine IA - deep learning
Lire sa [page consacrée](https://services.criann.fr/services/hpc/cluster-austral/guide/ia-deep-learning) et sa section **Utilisation** (les partitions Slurm pour GPU NVIDIA mentionnées sur ce lien sont à remplacer par celles du tableau ci-dessus).

## GPU partitionnés
La partition `ar_mig` est associée à un nœud de calcul dont les GPU NVIDIA A100 sont partitionnés par la technologie MIG (Multi-Instance GPU).

Différentes tailles d'instances sont disponibles (SM : Streaming Multiprocessor, TC : Tensor Core) :
  - 10 devices a100_1g.10gb avec 10 GB de Mémoire, 14 SM et 56 TC
  - 17 devices a100_2g.20gb avec 20 GB de Mémoire, 28 SM et 108 TC
  - 4 devices a100_3g.40gb avec 40 GB de Mémoire, 42 SM et 164 TC

Pour utiliser l'un de ces devices dans vos calculs il faut :
  - cibler la partition `ar_mig` avec l'option `--partition ar_mig` de sbatch
  - préciser le type de device souhaité avec l'option `--gres` de sbatch :
    - `--gres=gpu:a100_1g.10gb` pour l'architecture a100_1g.10gb
    - `--gres=gpu:a100_2g.20gb` pour l'architecture a100_2g.20gb
    - `--gres=gpu:a100_3g.40gb` pour l'architecture a100_3g.40gb

Un exemple complet basé sur le tutoriel mnist pour PyTorch est disponible un répertoire :

`/soft/slurm/Arctic_Modeles_scripts/pytorch-mig/`
