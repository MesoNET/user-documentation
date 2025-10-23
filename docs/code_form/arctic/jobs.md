---
title: "Lancer un calcul"
sidebar_position: 5
---

# Lancer un calcul sur Arctic
Une section de documentation est dédiée à la [soumssion des travaux par Slurm](https://services.criann.fr/services/hpc/cluster-austral/guide/#environnement-de-soumission-slurm)

Les modèles de script sont fournis dans un répertoire `/soft/slurm/Modeles_scripts/`

## Les partitions (classes de soumission)

La [parition Slurm](https://services.criann.fr/services/hpc/cluster-austral/guide/#environnement-de-soumission-slurm) est à spécifier par l'utilisateur dans son script. 

**_Partitions pour architectures spécifiques_**

| Partition    | Durée maximale | Limites par calcul                                      
| ------------ | -------------- |------------------------------------------------------- |
| **ar_mig**   | 8 h            | 2 nœuds (16 GPU, 256 cœurs CPU, 2x480000 MB de mémoire) |
| **ar_a100**  | 8 h            | 1 nœuds (8 GPU, 128 cœurs CPU, 480000 MB de mémoire)    |
| **ar_h200**  | 8 h            | 1/2 nœud (4 GPU,96 cœurs)
| **ar_mi210** | 8 h            | 2 nœuds (8 GPU, 64 cœurs CPU, 2x242000 MB de mémoire)   |

Domaine **IA - deep learning** : lire sa [page consacrée](https://services.criann.fr/services/hpc/cluster-austral/guide/ia-deep-learning) et sa section **Utilisation**
