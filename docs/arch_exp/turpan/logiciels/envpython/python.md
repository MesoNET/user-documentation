---
title: Python
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Le module conda "python" est un environnement conda vierge ne contenant aucun module particulier. Il est en général cloné pour servir de base à installation de modules python soit:

* via conda (recommandé)
* via pip si une version conda n’est pas disponible.

Si l’on mixe les 2 façon de faire, il faut toujours commencer par les modules conda puis finir par les modules pip.

<Tabs>
<TabItem label="python-3.10.9" value="python3109" default>

Le module conda "python-3.10.9" est un environnement conda basé sur python 3.10.9

Pour l’utiliser :

```shell
module purge
module load python/3.10.9
```

Pour cloner cet environnement et ensuite l’utiliser :

```shell
module purge
module load conda/22.11.1
conda create -n MyNewEnv --clone python-3.10.9
conda activate MyNewEnv
```

</TabItem>
</Tabs>