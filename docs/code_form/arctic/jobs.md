---
title: "Lancer un calcul"
sidebar_position: 5
---

# Lancer un calcul sur Arctic
Une section de documentation est dédiée à la [soumssion des travaux par Slurm](https://services.criann.fr/services/hpc/cluster-austral/guide/#environnement-de-soumission-slurm)

Les modèles de script sont fournis dans un répertoire `/soft/slurm/Modeles_scripts/`

## Les partitions (classes de soumission)

La parition Slurm est à spécifier par l'utilisateur dans son script. 

**_Partitions pour architectures spécifiques_**

| Partition    | Durée maximale | Limites par calcul                                      
| ------------ | -------------- |------------------------------------------------------- |
| **ar_mig**   | 8 h            | 4 cœurs, 1 instance de GPU NVIDIA A100 partitionné en MIG |
| **ar_a100**  | 8 h            | 16 cœurs, 1 GPU NVIDIA A100
| **ar_h200**  | 8 h            | 24 cœurs, 1 GPU NVIDIA H200
| **ar_mi210** | 1 h            | 4 cœurs, 1 GPU AMD MI210

La partition `ar_mig` est associée à un nœud de calcul dont les GPU NVIDIA A100 sont partitionnés par la technologie MIG (Multi-Instance GPU). Différentes tailles d'instance de GPU partitionné sont disponibles : un [complément d'information](https://services.criann.fr/services/hpc/cluster-austral/guide/#gpus-mig) décrit ces tailles, et le nom de la ressource qui leur est associée et doit être spécifiée par la directive `--gres` de Slurm (sur le complément précédent, remplacer le nom de la partition `hpda_mig` par `ar_mig`).

Domaine **IA - deep learning** : lire sa [page consacrée](https://services.criann.fr/services/hpc/cluster-austral/guide/ia-deep-learning) et sa section **Utilisation**
