---
title: "Monitoring"
sidebar_position: 2
---
# Surveiller et gérer ses travaux

## Voir la file d'attente

[squeue](https://slurm.schedmd.com/squeue.html) montre l'état de la file d'attente.

Cette commande affiche la liste des travaux en cours pour l'utilisateur spécifié. Vous pouvez voir des informations telles que l'ID du travail, l'état, le nœud, le temps, etc.

```
$ squeue
   JOBID PARTITION     NAME     USER ST       TIME  NODES NODELIST(REASON)
    ...        ...      ...      
```

Sur certaines machines il se peut que cette commande soit configurée pour ne montrer que vos jobs par  (`squeue -u $USER`).

La colonne `ST` indique l'état du job : parmi le grand nombre d'[états](https://slurm.schedmd.com/squeue.html#SECTION_JOB-STATE-CODES) possible les plus fréquents sont: R (Running), PD (Pending - en attente), F (Failed - échec).

Pour des jobs en attente, la colonne `(REASON)` donne la raison pour laquelle le job est en attente - [la liste](https://slurm.schedmd.com/squeue.html#SECTION_JOB-REASON-CODES) est longue.

Les plus attendues sont *Priority* (vous n'avez pas la priorité) et *Resources* (en attente de disponibilité de ressources). Si d'autres raisons s'affichent, il peut être utile de vérifier si les resources demandés sont compatibles.


## Annuler un job

[scancel](https://slurm.schedmd.com/sbatch.html) permet d'annuler un ou plusieurs job(s).

- `scancel JOBID` permet d'annuler le job JOBID.
- `scancel -n toto` annule les jobs nommés *toto* (bien sûr, seulement *vos* jobs).
- `scancel -n toto -t PENDING` annule les jobs nommés *toto* en attente.


## Voir l'état de la machine

La commande [sinfo](https://slurm.schedmd.com/sinfo.html) donne des informations sur les nœuds et partitions d'un cluster.

Il est possible de [formater la sortie de sinfo](https://slurm.schedmd.com/sinfo.html#OPT_format) pour obtenir des informations plus détaillés.

Par exemple

- `sinfo -s`
    donne un resumé de l'état du cluster
- `sinfo -N --long`
    donne plus l'état du cluster nœud par nœud avec plus de détails


## Inspecter des jobs passés

[sacct](https://slurm.schedmd.com/sacct.html) donne de l'informations sur des jobs passés.

```
sacct -S 0715 -u $USER
```

### Estimer l'utilisation mémoire d'un code

`sacct -o jobid,jobname,reqnodes,reqcpus,reqmem,maxrss,averss,elapsed -j JOBID`

```
ReqMem     MaxRSS     AveRSS    Elapsed
---------- ---------- ---------- ----------
55000Mn        16?              00:08:33
55000Mn  17413256K  16269776K   00:08:33
55000Mn  17440808K  16246408K   00:08:32
```



<!-- ## scontrol

`scontrol hold JOBID`

`scontrol release JOBID` -->
