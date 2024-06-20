---
title: Modulus
sidebar_position: 7
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


L'installation de Modulus par pip ou conda sur l'architecture ARM (aarch64) installe uniquement une version CPU. Pour permettre une utilisation GPU, nous avons créé un conteneur apptainer en adaptant pour TURPAN le conteneur Modulus de Nvidia. Il contient l'ensemble des programmes et librairies décrit ici : https://docs.nvidia.com/modulus/index.html

## Utilisation du conteneur modulus

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
>apptainer exec --bind /tmpdir,/work --nv /work/conteneurs/sessions-interactives/modulus-24.01-calmip-si.sif python mon_script.py
>```

</TabItem>
<TabItem label="Mode interractif" value="interractif" default>

Vous pouvez utiliser le conteneur interactif (pour tester ou installer d'autres outils ou configurer votre environnement). Dans l'exemple ci-dessous avec une demande de ressources de 1 cœur CPU et 1 GPU :

```bash
srun -p shared -n1 --gres=gpu:1 --pty apptainer shell --nv /work/conteneurs/sessions-interactives/modulus-24.01-calmip-si.sif
Apptainer> python
Python 3.10.12 (main, Jun 11 2023, 05:26:28) [GCC 11.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import torch
>>> from modulus.models.mlp.fully_connected import FullyConnected
>>> model = FullyConnected(in_features=32, out_features=64)
>>> input = torch.randn(128, 32)
>>> output = model(input)
>>> output.shape
torch.Size([128, 64])
[...]
>>> # Vos commandes python
[...]
```

</TabItem>
</Tabs>

:::info

Le conteneur n'a accès par défaut qu'à votre espace $HOME. Si vous avez besoin des espaces WORK `/work` ou SCRATCH `/tmpdir` vous pouvez les accrocher en utilisant l'option `--bind` d'Apptainer par exemple :

```bash
apptainer exec --bind /tmpdir,/work --nv ...
```

:::

## Pour plus d'information

Pour plus d'information sur l'utilisation des conteneurs Apptainer :

* La documentation de l'[utilisation des conteneurs Apptainer sur Turpan](../apptainer.md)
* La documentation officeille d'Apptainer : https://apptainer.org/docs/user/1.1/


## Conteneur rapids et modules python supplémentaires

:::caution Attention

L'utilisation de ce conteneur est incompatible avec l'utilisation des environnements conda !

:::

Néanmoins, vous pouvez ajouter des modules avec pip depuis le conteneur en se positionnant sur une frontale de connexion pour  l'installation (les noeuds de calcul n'ont pas d'accès à internet) :

```bash
apptainer shell --nv /work/conteneurs/sessions-interactives/modulus-24.01-calmip-si.sif
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
apptainer exec --env "PYTHONUSERBASE=${HOME}/myenv3" --nv ...
```
:::
