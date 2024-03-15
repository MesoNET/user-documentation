---
title: TensorFlow
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

L'installation de tensoflow par pip ou conda sur l'architecture ARM (aarch64) installe uniquement une version CPU. Pour permettre une utilisation GPU, nous avons créé un conteneur apptainer en adaptant pour TURPAN le conteneur tensorflow de Nvidia depuis le NGC. Il contient l'ensemble des programmes et librairies décrit ici : https://docs.nvidia.com/deeplearning/frameworks/tensorflow-release-notes/rel-24-02.html

## Utilisation du conteneur tensorflow

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
>apptainer exec --bind /tmpdir,/work --nv /work/conteneurs/sessions-interactives/tensorflow-24.02-tf2-py3-calmip-si.sif python mon_script.py
>```

</TabItem>
<TabItem label="Mode interractif" value="interractif" default>

Vous pouvez utiliser le conteneur interactif (pour tester ou installer d'autres outils ou configurer votre environnement). Dans l'exemple ci-dessous avec une demande de ressources de 1 cœur CPU et 1 GPU :

```bash
srun -p shared -n1 --gres=gpu:1 --pty apptainer shell --bind /tmpdir,/work --nv /work/conteneurs/sessions-interactives/tensorflow-24.02-tf2-py3-calmip-si.sif
Apptainer> python
Python 3.10.12 (main, Jun 11 2023, 05:26:28) [GCC 11.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import tensorflow as tf
2024-03-08 13:40:10.216933: E external/local_xla/xla/stream_executor/cuda/cuda_dnn.cc:9373] Unable to register cuDNN factory: Attempting to register factory for plugin cuDNN when one has already been registered
2024-03-08 13:40:10.217894: E external/local_xla/xla/stream_executor/cuda/cuda_fft.cc:607] Unable to register cuFFT factory: Attempting to register factory for plugin cuFFT when one has already been registered
2024-03-08 13:40:10.355765: E external/local_xla/xla/stream_executor/cuda/cuda_blas.cc:1534] Unable to register cuBLAS factory: Attempting to register factory for plugin cuBLAS when one has already been registered
>>> print("Num GPUs Available: ", len(tf.config.list_physical_devices('GPU')))
Num GPUs Available:  1
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

## Pour plus d'information

Pour plus d'information sur l'utilisation des conteneurs Apptainer :

* La documentation de l'[utilisation des conteneurs Apptainer sur Turpan](../apptainer.md)
* La documentation officeille d'Apptainer : https://apptainer.org/docs/user/1.1/


## Conteneur tensorflow et modules python supplémentaires

:::caution Attention

L'utilisation de ce conteneur est incompatible avec l'utilisation des environnements conda !

:::

Néanmoins, vous pouvez ajouter des modules avec pip depuis le conteneur en se positionnant sur une frontale de connexion pour  l'installation (les noeuds de calcul n'ont pas d'accès à internet) :

```bash
apptainer shell --nv /work/conteneurs/sessions-interactives/tensorflow-24.02-tf2-py3-calmip-si.sif
```

Puis, vous pouvez installer les modules souhaités avec obligatoirement l'option `--user` afin de les installer dans votre home :

```bash
Apptainer> pip install --user wandb
```

:::info
Les paquets seront installés dans votre environnement pip par défaut. Si vous souhaitez les installer dans un environnemnt spécifique, vous devrez positionner cette variable d'environnement pour l'installation, et la paramétrer pour l'exécution du conteneur :

Lors de l'installation du paquet
```bash
export PYTHONUSERBASE="${HOME}/myenv3"
Apptainer> pip install --user wandb
```

Puis lors de l'exécution du conteneur :
```bash
apptainer exec --env "PYTHONUSERBASE=${HOME}/myenv3" --nv /work/conteneurs/sessions-interactives/tensorflow-24.02-tf2-py3-calmip-si.sif python mon_script.py
```
:::
