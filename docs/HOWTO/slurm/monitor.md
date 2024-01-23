---
title: "Monitoring"
sidebar_position: 2
---
# Surveiller l'état de nœuds et de la file d'attente

## sinfo

La commande [sinfo](https://slurm.schedmd.com/sinfo.html) donne des informations sur les nœuds et partitions d'un cluster.

Il est possible de [formater la sortie de sinfo](https://slurm.schedmd.com/sinfo.html#OPT_format) pour obtenir des informations plus détaillés.

- sinfo -s
    donne un resumé de l'état du cluster
- sinfo -N --long
    donne plus l'état du cluster nœud par nœud avec plus de détails

## squeue

[squeue](https://slurm.schedmd.com/squeue.html) montre l'état de la file d'attente. Sur certaines machines il se peut que cette commande soit configurée pour ne montrer que vos jobs (`squeue -u $USER`).


## scontrol


## sacct

informations comptables sur des jobs complétés ou actifs






`squeue -u username`

Cette commande affiche la liste des travaux en cours pour l'utilisateur spécifié. Vous pouvez voir des informations telles que l'ID du travail, l'état, le nœud, le temps, etc.
