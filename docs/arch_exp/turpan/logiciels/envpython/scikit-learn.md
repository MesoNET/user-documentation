---
title: Scikit-learn et rapids
sidebar_position: 6
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Scikit-learn n'est disponible par défaut que sur cpu. Si vous souhaitez utiliser des librairies de machine learning qui utilisent le GPU, vous pouvez utiliser les librairies fournies par Nvidia comme cuML uniquement. Pour vous permettre les 2 utilisations, nous avons créé un conteneur apptainer en adaptant pour TURPAN le conteneur rapids de Nvidia depuis le NGC. Il contient l'ensemble des programmes et librairies décrit ici : https://catalog.ngc.nvidia.com/orgs/nvidia/teams/rapidsai/containers/notebooks

## Utilisation du conteneur rapids

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
>apptainer exec --bind /tmpdir,/work --nv /work/conteneurs/sessions-interactives/rapids-notebooks-24.02-cuda12.0-py3.10-si.sif python mon_script.py
>```

</TabItem>
<TabItem label="Mode interractif" value="interractif" default>

Vous pouvez utiliser le conteneur interactif (pour tester ou installer d'autres outils ou configurer votre environnement). Dans l'exemple ci-dessous avec une demande de ressources de 1 cœur CPU et 1 GPU :

```bash
srun -p shared -n1 --gres=gpu:1 --pty apptainer shell --nv /work/conteneurs/sessions-interactives/rapids-notebooks-24.02-cuda12.0-py3.10-si.sif
Apptainer> python
Python 3.10.12 (main, Jun 11 2023, 05:26:28) [GCC 11.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import cuml
>>> from cuml.neighbors import NearestNeighbors
>>> from cuml.datasets import make_regression, make_blobs
>>> from cuml.model_selection import train_test_split
>>> from cuml.common.device_selection import using_device_type
>>> X_blobs, y_blobs = make_blobs(n_samples=2000,
...                               n_features=20)

>>> X_train_blobs, X_test_blobs, y_train_blobs, y_test_blobs = train_test_split(X_blobs,
...                                                                             y_blobs,
...                                                                             test_size=0.2, shuffle=True)
>>> nn = NearestNeighbors()
>>> with using_device_type('gpu'):
...     nn.fit(X_train_blobs)
...     nearest_neighbors = nn.kneighbors(X_test_blobs)
... 
NearestNeighbors()
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

* La documentation de l'[utilisation des conteneurs Apptainer sur Turpan](../container/index.md)
* La documentation officeille d'Apptainer : https://apptainer.org/docs/user/1.1/


## Conteneur rapids et modules python supplémentaires

Utilisez la commande `conda env list` pour trouver le chemin de votre environnement Conda
>```
>$ conda env list 
># conda environments:
>myenv3                 /users/sysadmin/user_name/.conda/envs/myenv3
>base                   /usr/local/miniconda/25.1.1
>python-3.10.9          /usr/local/miniconda/25.1.1/envs/python-3.10.9
>python-tools-3.10.9    /usr/local/miniconda/25.1.1/envs/python-tools-3.10.9
>```

Le chemin sera ensuite utilisé pour l’ajouter au conteneur Apptainer, comme montré dans le script suivant.

>```
>#!/bin/bash
>#SBATCH -J mon_job
>#SBATCH -p shared
>#SBATCH --nodes 1
>#SBATCH --ntasks 1
>#SBATCH --time=0:15:00
>#SBATCH --gres=gpu:1
>
>ENV_PATH=/tmpdir/user_name/.conda/envs/myenv3
>
> srun apptainer exec \
>  --nv \
>  --bind /tmpdir,/work \
>  --env PYTHONUSERBASE=$ENV_PATH \
>  --env LD_LIBRARY_PATH=$ENV_PATH/lib:$LD_LIBRARY_PATH \
>  --env PYTHONPATH=$ENV_PATH/lib/python3.10/site-packages:$PYTHONPATH \
>  /work/conteneurs/sessions-interactives/rapids-notebooks-24.02-cuda12.0-py3.10-si.sif \
>  python mon_script.py
>```

