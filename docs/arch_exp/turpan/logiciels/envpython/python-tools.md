---
title: Python tools
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Le module conda "python-tools" contient les modules python suivants :
* scipy
* numpy
* pandas
* matplotlib
* jupyterlab
* beautifulsoup4
* requests
* nltk

<Tabs>
<TabItem label="python-tools-3.10.9" value="pythontools3109" default>

Le module conda "python-tools-3.10.9" est un environnement conda basé sur python 3.10.9 et contenant les modules python suivants :

* scipy (version 1.9.3)
* numpy (version 1.23.5)
* pandas (version 1.5.2)
* matplotlib (version 3.6.2)
* jupyterlab (version 3.5.3)
* beautifulsoup4 (version 4.11.1)
* requests (version 2.28.1)
* nltk (versino 3.7)

Pour l’utiliser :

```shell
module purge
module load python-tools/3.10.9
```

Pour cloner cet environnement et ensuite l’utiliser :

```shell
module purge
module load conda/22.11.1
conda create -n MyNewEnv --clone python-tools-3.10.9
conda activate MyNewEnv
```

</TabItem>
</Tabs>