---
title: Lancer un calcul
sidebar_position: 5
---

Pour effectuer des calculs sur Zen il faut obligatoirement utiliser le gestionnaire de travaux `slurm`.

:::caution

Pour rappel, il est strictement interdit de lancer des calculs directement sur la frontale. Cépendant, vous pouvez y compiler vos codes et éditer des scripts.

:::

Si vous n'êtes pas familier avec slurm il est vivement conseillé de suivre cette [introduction générale à `slurm` ici](/HOWTO/slurm).

Cette page se concentre sur les particularités du cluster Zen.

## Lancer un job sur Zen

Pour exécuter votre code sur les nœuds calcul il faut soumettre un script via la commande `sbatch`.

Voici un exemple minimal de script slurm:

```shell
#!/bin/bash
#SBATCH --nodes=1
#SBATCH --time=00:10:00

hostname
sleep 600
```

Pour créer ce script sur la frontale de Zen, vous pouvez l'éditer directement sur le nœud `login` (par ex. avec vi, vim, emacs, nano) ou bien l'éditer localement et le copier de votre machine sur Zen (par ex. avec rsync ou scp).

Supposons que votre script s'appelle `job.slurm`. Vous pouvez le soumettre avec

```shell
sbatch job.slurm
```

et slurm vous repondra en donnant un identifiant unique à votre job.

```shell
Submitted batch job 56540
```

Avec la commande `squeue` vous pouvez suivre l'état de votre job et `scancel` permet de l'arrêter.

Cliquez [ici](/HOWTO/slurm) pour aller plus loin avec slurm.


## Jobs interactifs

### Connexion par ssh

Il n'est pas possible de se connecter directement par ssh aux nœuds de calcul, sauf si vous avez un job actif sur le nœud.

Si vous tentez de vous connecter par `ssh node001` alors vous obtenez alors le message suivant

```shell
Access denied by pam_slurm_adopt: you have no active jobs on this node
Connection closed by 10.30.0.1 port 22
```

Par contre, vous pouvez vous connecter par ssh aux nœuds où vous avez une réservation active (par `ssh node0xx`).

Votre session ssh sera contrainte par les ressources allouées dans votre job le plus récent sur le nœud.

### Session interactive via srun

Vous pouvez démarrer une session interactive comme ceci:
```
$ srun --nodes=1 --ntasks-per-node=1 --time=01:00:00 --pty bash -i
```

Ici nous demandons un seul cœur sur un nœud pendant une heure. L'invite de commande apparaître dès que le job démarre.



## Démarrage des nœuds {#powersave}

A des fins d'économie d'énergie, les nœuds de calcul de Zen s'arrêtent complètement au bout de 3 heures d'inactivité.

Si les seuls nœuds pour satisfaire votre requête sont éteints, alors votre job se lancera seulement après environ 5 minutes, le temps nécessaire au serveur pour démarrer.
