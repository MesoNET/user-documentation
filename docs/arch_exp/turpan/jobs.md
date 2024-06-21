---
title: Lancer un calcul
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Comment lancer un calcul sur Turpan ? 

Partition / global = 3 jobs max par utilisateur :

- **small** : exclusive, 2 jobs max, pas plus de 6 noeuds par jobs, max walltime par job 4H
- **big** : exclusive, 1 job max, pas plus de 13 noeuds par jobs, max walltime par job 2H
- **full** : exclusive, 1 job max, au moins 14 noeuds par jobs, max walltime par job 20H
- **shared** : non exclusive, 2 jobs max, pas plus de 1 GPU, 40 cpu et 256G ram par jobs, max walltime par job 4H
- **visu** : non exclusive, 1 job max, max 50Go RAM max 8 cpu par job, max walltime par job 4H

Afin de ne pas monopoliser l’ensemble des noeuds du cluster en journée :

- la partition "full" est activée du lundi au vendredi à 18H00
- la partition "full" est désactivée du lundi au jeudi ainsi que le dimanche à partir de 22H00

Lorsque la partition est désactivée, les soumissions sont possibles, mais les jobs sont suspendus jusqu’à l’activation de la partition. A la désactivation, les jobs RUNNING sur la partition "full" ne sont pas arrêtés.

## Comment lancer un script `sbatch` ?

<Tabs>
<TabItem label="Exemple script exclusif" value="exclusif" default>

Exemple script exclusif, 2 nœuds, 160 processeurs, le temps d'exécution moins de 4H

>```shell
>#!/bin/bash
>#SBATCH -N 2
>#SBATCH -n 160
>#SBATCH --gres=gpu:2 
>#SBATCH -p small
>#SBATCH --ntasks-per-node=80
>#SBATCH --time=00:10:00
>
>module purge
>module load gnu/11.2.0
>module load openmpi/gnu/4.1.4-gpu
>
>nodeset -e ${SLURM_JOB_NODELIST} | tr ' ' '\n' > hostfile_${SLURM_JOBID}
>mpirun -hostfile ./hostfile_${SLURM_JOBID} -n 160 ./exec
>```

</TabItem>
<TabItem label="Exemple script shared" value="shared">

Exemple script shared, 1 nœud, 40 processeurs,  le temps d'exécution moins de 4H

>```
>#!/bin/bash
>#SBATCH -N 1
>#SBATCH -n 40
>#SBATCH --gres=gpu:1
>#SBATCH -p shared
>#SBATCH --ntasks-per-node=40
>#SBATCH --time=00:10:00
>
>module purge
>module load gnu/11.2.0
>module load openmpi/gnu/4.1.4-gpu
>
>mpirun -n 40 ./exec
>```

</TabItem>
</Tabs>

## Obtenir des informations sur un job

Il est possible pour visualiser simplement des information sur son job d'utiliser la commande `jobinfo <jobid>`.Il peut être utilisé à la fin d'un script sbatch, jobinfo donnera des informations très utiles si vous contactez le support.

<Tabs>
<TabItem label="Normal" value="simple-info" default>

```shell
jobinfo 6101
```

>```
>Job Infos :
>                Name : Test partition small - 4 noeuds
>                User : marteau
>           Partition : small
>              NNodes : 4
>               Nodes : turpancomp[0-3]
>               State : COMPLETED
>              Submit : 2023-04-14T16:08:02
>               Start : 2023-04-14T16:08:02
>                 End : 2023-04-14T16:08:05
>   Reserved walltime : 04:00:00
>       Used walltime : 00:00:03
>       Used CPU time : 00:01.884
>% User Computation) : 0 % (00:00.658)
>      % System (I/O) : 100.00 % (00:01.225)
>        Mem reserved : 2.0T
>        Max Mem used : 24M
>      Max Disk Write : 0
>       Max Disk Read : 0
>  Energy consumption : 1W.h
>```

</TabItem>
<TabItem label="Debug / Support" value="support-info">

>```
>#!/bin/bash
>#SBATCH -N 2
>#SBATCH -n 160
>#SBATCH --gres=gpu:2 
>#SBATCH -p small
>#SBATCH --ntasks-per-node=80
>#SBATCH --time=00:10:00
>
># Chargement des modules
>module purge
>module load gnu/11.2.0
>module load openmpi/gnu/4.1.4-gpu
>
># Preparation de l'environnement d'execution
>myProjectDir=/users/sysadmin/marteau/slurm-scripts/mpi_hello_world_project
>myExec="mpi_hello_world"
>myWorkDir="${SLURM_JOBID}"
>mkdir -p "${myWorkDir}"
>cd "${myWorkDir}"
>cp "${0}" .
>cp ${myProjectDir}/${myExec} .
>
>nodeset -e "${SLURM_JOB_NODELIST}" | tr ' ' '\n' > "hostfile_${SLURM_JOBID}"
>mpirun -hostfile "./hostfile_${SLURM_JOBID}" -n 160 "./${myExec}"
>
>jobinfo "${SLURM_JOBID}"
>```

Ce qui affiche dans la sortie slurm (`slurm-<jobid>.out`):

>```
>[...]
>Job Infos :
>                Name : partition-small-jobinfo.sbatch
>                User : marteau
>           Partition : small
>              NNodes : 2
>               Nodes : turpancomp[0-1]
>               State : RUNNING
>              Submit : 2023-04-17T17:58:37
>               Start : 2023-04-17T17:58:37
>                 End : Unknown
>   Reserved walltime : 00:10:00
>       Used walltime : 00:01:04
>       Used CPU time : 00:46.488
> % User Computation) : 41.00 % (00:19.439)
>      % System (I/O) : 58.00 % (00:27.049)
>        Mem reserved : 1008G
>        Max Mem used : 9.8G
>      Max Disk Write : 329M
>       Max Disk Read : 250M
>  Energy consumption : 3W.h
>
>Debug Infos :
>           BatchHost : turpancomp0
>             Command : /users/sysadmin/marteau/slurm-scripts/partition-small-jobinfo.sbatch
>              StdOut : /tmpdir/marteau/slurm-6154.out
>              StdErr : /tmpdir/marteau/slurm-6154.out
>             WorkDir : /tmpdir/marteau
>```

</TabItem>
</Tabs>

:::info

Il peut être utile de mettre une petite temporisation avant la commande jobinfo pour permettre d'avoir les dernières valeurs de l'accounting slurm s'il est utilisé dans un script sbatch.

>```
>sleep 10
>jobinfo
>```

:::