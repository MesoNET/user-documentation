---
title: Pytorch
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

L'installation de torch par pip ou conda sur l'architecture ARM (aarch64) installe uniquement une version CPU. Pour permettre une utilisation GPU, nous avons créé un conteneur apptainer en adaptant pour TURPAN le conteneur pytorch de Nvidia depuis le NGC. Il contient l'ensemble des programmes et librairies décrits ici : https://docs.nvidia.com/deeplearning/frameworks/pytorch-release-notes/rel-23-10.html

## Utilisation du conteneur pytorch

Il y a deux façons d'utiliser ce conteneur :

<Tabs>
<TabItem label="Mode sbatch" value="sbatch" default>

Vous pouvez utiliser le conteneur dans un script sbatch. Dans l'exemple ci-dessous avec une réservation de 1 cœur CPU et 1 GPU :

>```
>#!/bin/bash
>#SBATCH -J mon_job
>#SBATCH -p shared
>#SBATCH --nodes 1
>#SBATCH --ntasks 1
>#SBATCH --time=0:15:00
>#SBATCH --gres=gpu:1
>
>apptainer exec --nv /work/conteneurs/pytorch_23.10-py3-calmip.sif python mon_script.py
>```

</TabItem>
<TabItem label="Mode interractif" value="interractif" default>

Vous pouvez utiliser le conteneur interactif (pour tester ou installer d'autres outils ou configurer votre environnement). Dans l'exemple ci-dessous avec une demande de ressources de 1 cœur CPU et 1 GPU :

```bash
srun -p shared -n1 --gres=gpu:1 --pty apptainer shell --nv /work/conteneurs/pytorch_23.10-py3-calmip.sif
Apptainer> python
Python 3.10.12 (main, Jun 11 2023, 05:26:28) [GCC 11.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import torch
>>> # Pour vérifier que vos ressources GPU sont bien visibles depuis pytorch
>>> torch.cuda.current_device()
0
>>> torch.cuda.device(0)
<torch.cuda.device object at 0x4000154a7580>
>>> torch.cuda.device_count()
1
>>> torch.cuda.get_device_name(0)
'NVIDIA A100 80GB PCIe'
>>> torch.cuda.is_available()
True
[...]
>>> # Vos commandes python
[...]
```

</TabItem>
</Tabs>

:::info

Le conteneur n'a accès par défaut qu'à votre espace $HOME. Si vous avez besoin des espaces WORK `/work` ou SCRATCH `/tmpdir` vous pouvez les accrocher en utilisant l'option `--bind` d'Apptainer par exemple :

```bash
apptainer exec --nv --bind /tmpdir,/work ....
```

:::

Exemple de script sbatch pour utiliser pytorch avec le lanceur torchrun en multi-noeuds sur Turpan :

>```
>#!/bin/bash
>
>#SBATCH --job-name=multinode-example
>#SBATCH --nodes=2
>#SBATCH --ntasks=4
>#SBATCH --ntasks-per-node=2
>#SBATCH --gres=gpu:2
>#SBATCH --cpus-per-task=1
>
>set -x
>sleep 10
>
>export MASTER_PORT=$(echo "${SLURM_JOB_ID} % 100000 % 50000 + 30000" | bc)
>export MASTER_ADDR=$(hostname --ip-address)
>echo "MASTER_ADDR:MASTER_PORT="${MASTER_ADDR}:${MASTER_PORT}
>export LOGLEVEL=DEBUG
>
>echo "HOSTNAME: $(hostname)"
>echo "NODES : ${SLURM_JOB_NODELIST}"
>
>srun apptainer exec --nv /work/conteneurs/pytorch_23.10-py3-calmip.sif torchrun \
>--nnodes 2 \
>--nproc_per_node 2 \
>--rdzv_id ${RANDOM} \
>--rdzv_backend c10d \
>--rdzv_endpoint "${MASTER_ADDR}:${MASTER_PORT}" \
>./multinode.py 50 10
>```


Le script et le dataset d'exemple est disponible ici : [torchrun-turpan.tgz (TGZ - 2 ko)](/img/turpan/torchrun-turpan.tgz)


## Pour plus d'information

Pour plus d'information sur l'utilisation des conteneurs Apptainer :

* La documentation de l'utilisation des conteneurs Apptainer sur Turpan
* La documentation officeille d'Apptainer : https://apptainer.org/docs/user/1.1/


## Pytorch et modules python supplémentaires

:::caution Attention

L'utilisation de ce conteneur est incompatible avec l'utilisation des environnements conda !

:::

Néanmoins, vous pouvez ajouter des modules avec pip depuis le conteneur en se positionnant sur une frontale de connexion pour  l'installation (les noeuds de calcul n'ont pas d'accès à internet) :

```bash
apptainer shell --nv /work/conteneurs/pytorch_23.10-py3-calmip.sif
```

Puis, vous pouvez installer les modules souhaités avec obligatoirement l'option `--user` afin de les installer dans votre home :

```bash
Apptainer> pip install --user wandb
```