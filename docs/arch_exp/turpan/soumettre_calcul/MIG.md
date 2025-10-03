import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Les GPU A100 sont puissants, mais parfois une application n’a pas besoin de toute la capacité du GPU. La technologie MIG (Multi-Instance GPU) de NVIDIA permet de partitionner un seul GPU en plusieurs instances plus petites, chacune avec sa propre mémoire, ses cœurs et ses ressources de calcul dédiées.

L’utilisation de MIG améliorera l’efficacité de la machine et réduira aussi [votre consommation d’heures](../accounting/accounting-rules.md) au lieu d'utiliser Shared ou Full nœud.  

:::info
Pour savoir si votre application doit utiliser un MIG ou non, essayez-la d’abord sur un GPU complet et utilisez `placement` pour observer l’utilisation du GPU ``` placement --jobid={your_job_id} ``` qui permet de voir l’utilisation du GPU et de la mémoire, sachant qu’un GPU complet dispose de 80 Go de mémoire.
:::


## À propos de MIG sur Turpan
Il existe 2 types d’instances MIG sur Turpan :
#### 3g.40gb
Cela représente environ 57 % d’un GPU A100 complet. À prendre en compte dans cette configuration :
- Le nombre de cœurs CPU disponibles sur cette configuration est `20 cores` 
- La mémoire disponible est `40 GB`
#### 2g.20gb
Cela représente environ 40 % d’un GPU A100 complet. À prendre en compte dans cette configuration :
- Le nombre de cœurs CPU disponibles sur cette configuration est  `10 cores` 
- La mémoire disponible est `20 GB`

## Quand utiliser MIG
Après avoir exécuté votre code une première fois sur un GPU complet, utilisez placement pour analyser l’usage du GPU.
- Si votre **code utilise entre 50 % et 35 %**, moins de 20 cœurs et moins de 40 Go de mémoire, utilisez **`3g.40gb`**
    - Si votre code a besoin de plus de 40 Go ou de plus de 20 cœurs, restez sur le GPU complet.
- Si votre **code utilise moins de 35 %**, 10 cœurs et moins de 20 Go de mémoire, utilisez **`2g.20gb`**
    - Si vous avez besoin de plus de 10 cœurs mais moins de 20, ou de plus de 20 Go de mémoire mais moins de 40 Go, suivez les indications de la configuration `3g.40gb`. 

:::caution
MIG est utilisable uniquement si votre application n’a besoin que d’un seul GPU.
:::

## Comment utiliser MIG

<Tabs>
  <TabItem label="3g.40gb" value="3g.40gb" >

>```
>#!/bin/bash
>#SBATCH -N 1
>#SBATCH -n 20
>#SBATCH --gres=gpu:3g.40gb 
>#SBATCH -p 3g.40gb
>
>module purge
>module load gnu/11.2.0
>module load openmpi/gnu/4.1.4-gpu
>
>mpirun -n 20 ./exec
>```

  </TabItem>
  
  <TabItem label="2g.20gb" value="2g.20gb" >

>```
>#!/bin/bash
>#SBATCH -N 1
>#SBATCH -n 10
>#SBATCH --gres=gpu:2g.20gb 
>#SBATCH -p 2g.20gb
>
>module purge
>module load gnu/11.2.0
>module load openmpi/gnu/4.1.4-gpu
>
>mpirun -n 10 ./exec
>```

  </TabItem>
</Tabs>

:::danger Important
- Impossible d’utiliser plus d’une instance MIG par job.
- Évitez l’option --gpus-per-task, car elle considère automatiquement un GPU complet.
:::