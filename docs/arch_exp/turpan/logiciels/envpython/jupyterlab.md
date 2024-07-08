---
title: Notebook jupyter
sidebar_position: 8
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Durant la phase mise au point des scripts python, il peut être intéressant d’utiliser l’outil jupyter notebook.

C’est possible sur Turpan, à certaines conditions :
* la durée de connexion ne peut pas excéder 4 heures
* La réservation est sur la file "shared", et par conséquent limitée à 1 GPU, 40 CPUs et 256G de RAM
* Pour un travail plus intensif, il vaut mieux préférer le lancement par sbatch qui permet de réserver des ressources adaptées

## Comment demander une session interactive de notebook jupyter
Lorsque vous êtes connecté sur une frontale de Turpan, exécutez le script :
```bash
runJupyterSession.sh
```

Laissez le script démarrer (cela prend quelques secondes, soyez patient...), puis vous devriez voir un affichage de ce style :

>```
>[  3/150] Queuing and waiting for Jupyter session resources initialization (JJJJJ) ...
>
>jupyter session ...
>
>#===========================================================================
>|
>| Your jupyter notebook is now available. 
>|  
>| You must now open a TERMINAL on YOUR laptop and execute the command : 
>|
>|     ssh -L 8888:/users/mxxxxx/uyyyyy/.jupyter/jupyter-notebook-WW.XX.YY.ZZ-JJJJJ.sock  -n uyyyyy@WW.XX.YY.ZZ 'si-init.sh'
>| 
>| Then from your browser, visit the following url :
>|     
>|     http://localhost:8888/?token=azertyuiopqsdfghjklmwxcvbn
>|
>#===========================================================================
>| CAUTION : DO NOT CLOSE this slurm job or this terminal !
>#===========================================================================
>
>+---------------------------------------------------------------------------
>| CONNECTION INFO :
>|   * Job ID                 : JJJJJ
>|   * Client                 : WWW.XXX.YYY.ZZZ (FROM THE MOON)
>|   * Target                 : WW.XX.YY.ZZ (turpancompY)
>|   * Notebook URL           : http://localhost:8888/?token=azertyuiopqsdfghjklmwxcvbn
>|   * Notebook token         : azertyuiopqsdfghjklmwxcvbn
>|   * SSH tunnel socket path : /users/mxxxxx/uyyyyy/.jupyter/jupyter-notebook-WW.XX.YY.ZZ-JJJJJ.sock
>+---------------------------------------------------------------------------
>
>[/] - Press CTRL-C to quit
>```

Sur **un second terminal** sur **votre poste de travail**, exécuter la commande ssh donnée par le script :
```bash
ssh -L 8888:/users/mxxxxx/uyyyyy/.jupyter/jupyter-notebook-WW.XX.YY.ZZ-JJJJJ.sock  -n uyyyyy@WW.XX.YY.ZZ 'si-init.sh'
```

Patientez là encore quelques secondes et vous devriez obtenir le message suivant :
>```
>#===========================================================================
>|
>| ssh tunnel established.
>|
>#===========================================================================
>| CAUTION : DO NOT CLOSE this terminal !
>#===========================================================================
>```
:::warning DO NOT CLOSE TERMINALS
Comme les 2 messages l'indiquent, ne fermez pas la fenêtre de demande de session interactive sur Turpan, ni celle du tunnel ssh sur votre poste de travail.
:::

Enfin, vous pouvez utiliser votre notebook jupyter :
* En utilisant **le navigateur de votre poste de travail** et copier/coller l'URL fournie par le script "http://localhost:8888/?token=..."
* En utilisant vscode, et copier/coller l'URL fournie par le script "http://localhost:8888/?token=..." en suivant la [documentation officielle de vscode](https://code.visualstudio.com/docs/datascience/jupyter-kernel-management#_existing-jupyter-server)

:::warning Erreur "Permission denied (publickey)"
Si vous obtenez l'erreur suivante lors de l'inititailisation du tunnel :
>```
>uyyyyy@turpanlogin.calmip.univ-toulouse.fr: Permission denied (publickey).
>```

Vérifier votre configuration ssh. La configuration associée à clé ssh dans votre fichier .ssh/config, doit avoir "turpanlogin.calmip.univ-toulouse.fr" sur la ligne "Host" 
>```
># La configuration suivante est indispensable pour utiliser les outils
># runVisuSession, runJupyterSession, runTensorboardSession sur turpan
>Host turpan turpanlogin turpanlogin.calmip.univ-toulouse.fr
>   Hostname turpanlogin.calmip.univ-toulouse.fr
>   IdentityFile ~/.ssh/votre_cle_ssh_privee
>   IdentitiesOnly=yes
>   User votre_nom_d_utilisateur
>```
:::

## Utiliser les conteneurs nvidia (pytorch, tensorflow, rapids et modulus)

Il existe 4 type de conteneurs disponibles pour les sessions interactives :
* pytorch : [NVIDIA PyTorch container](https://catalog.ngc.nvidia.com/orgs/nvidia/containers/pytorch)
* tensorflow : [NVIDIA TensorFlow container](https://catalog.ngc.nvidia.com/orgs/nvidia/containers/tensorflow)
* rapids : [NVIDIA RAPIDS container](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/rapidsai/containers/notebooks)
* modulus : [NVIDIA Modulus container](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/modulus/containers/modulus)

Ceux-ci peuvent être utilisés en invoquant `runJupyterSession.sh` avec l'option `--container`. Exemple pour utiliser le conteneur pytorch :
```bash
runJupyterSession.sh --container pytorch
```
### Installer un paquet python supplémentaire dans mon environnement

À l'intérieur d'une cellule du notebook, exécuter la commande `!pip install --user monpaquet'`

Exemple pour installer le paquet "ansicolors"
```bash
!pip install --user ansicolors
```

### Pour tester

Voici des tutoriels pour tester chacun des conteneurs NVIDIA :
* [Pytoch quickstart](https://pytorch.org/tutorials/beginner/basics/quickstart_tutorial.html)
* [TensorFlow quickstart](https://www.tensorflow.org/tutorials/quickstart/beginner)
* [RAPIDS introduction](https://github.com/rapidsai-community/notebooks-contrib/blob/main/getting_started_materials/intro_tutorials_and_guides/14_Introduction_to_Machine_Learning_using_cuML.ipynb)
* [scikit-learn Getting Started](https://scikit-learn.org/stable/getting_started.html)
* [NVIDIA Modulus Getting Started](https://docs.nvidia.com/deeplearning/modulus/getting-started/index.html)

### Passer en production
Une fois votre script mis au point, vous pouvez le lancer en production en mettant dans votre script sbatch les commandes suivantes. Dans cet exemple les ressources réservées sont proches de celle de la session de Notebook Jupyter :

<Tabs>
<TabItem label="Conteneur pytorch" value="pytorch" default>

```bash
#!/bin/bash
#SBATCH -N 1
#SBATCH -n 40
#SBATCH --gres=gpu:1
#SBATCH -p shared
#SBATCH --ntasks-per-node=40
#SBATCH --time=00:10:00

module purge

apptainer exec --bind /tmpdir,/work --nv /work/conteneurs/sessions-interactives/pytorch-24.02-py3-calmip-si.sif /usr/local/bin/proxychains.sh python monscript.py
```

Et si vous aviez lancé le notebook avec l'option "--userbase" (Exemple : `runJupyterSession.sh --container rapids --userbase "${HOME}/myenv3"`), alors vous devrez ajouter `--env "PYTHONUSERBASE=${HOME}/myenv3"` à la commande de lancement apptainer :

```bash
apptainer exec --env "PYTHONUSERBASE=${HOME}/myenv3" --bind /tmpdir,/work --nv /work/conteneurs/sessions-interactives/pytorch-24.02-py3-calmip-si.sif /usr/local/bin/proxychains.sh python monscript.py
```

</TabItem>
<TabItem label="Conteneur tensorflow" value="tensorflow" >

```bash
#!/bin/bash
#SBATCH -N 1
#SBATCH -n 40
#SBATCH --gres=gpu:1
#SBATCH -p shared
#SBATCH --ntasks-per-node=40
#SBATCH --time=00:10:00

module purge

apptainer exec --bind /tmpdir,/work --nv /work/conteneurs/sessions-interactives/tensorflow-24.02-tf2-py3-calmip-si.sif /usr/local/bin/proxychains.sh python monscript.py
```

Et si vous aviez lancé le notebook avec l'option "--userbase" (Exemple : `runJupyterSession.sh --container rapids --userbase "${HOME}/myenv3"`), alors vous devrez ajouter `--env "PYTHONUSERBASE=${HOME}/myenv3"` à la commande de lancement apptainer :

```bash
apptainer exec --env "PYTHONUSERBASE=${HOME}/myenv3" --bind /tmpdir,/work --nv /work/conteneurs/sessions-interactives/tensorflow-24.02-tf2-py3-calmip-si.sif /usr/local/bin/proxychains.sh python monscript.py
```

</TabItem>
<TabItem label="Conteneur rapids" value="rapids" >

```bash
#!/bin/bash
#SBATCH -N 1
#SBATCH -n 40
#SBATCH --gres=gpu:1
#SBATCH -p shared
#SBATCH --ntasks-per-node=40
#SBATCH --time=00:10:00

module purge

apptainer exec --bind /tmpdir,/work --nv /work/conteneurs/sessions-interactives/rapids-notebooks-24.02-cuda12.0-py3.10-si.sif /usr/local/bin/proxychains.sh python monscript.py
```

Et si vous aviez lancé le notebook avec l'option "--userbase" (Exemple : `runJupyterSession.sh --container rapids --userbase "${HOME}/myenv3"`), alors vous devrez ajouter `--env "PYTHONUSERBASE=${HOME}/myenv3"` à la commande de lancement apptainer :

```bash
apptainer exec --env "PYTHONUSERBASE=${HOME}/myenv3" --bind /tmpdir,/work --nv /work/conteneurs/sessions-interactives/rapids-notebooks-24.02-cuda12.0-py3.10-si.sif /usr/local/bin/proxychains.sh python monscript.py
```

</TabItem>
<TabItem label="Conteneur modulus" value="modulus" >

```bash
#!/bin/bash
#SBATCH -N 1
#SBATCH -n 40
#SBATCH --gres=gpu:1
#SBATCH -p shared
#SBATCH --ntasks-per-node=40
#SBATCH --time=00:10:00

module purge

apptainer exec --bind /tmpdir,/work --nv /work/conteneurs/sessions-interactives/modulus-24.01-calmip-si.sif /usr/local/bin/proxychains.sh python monscript.py
```

Et si vous aviez lancé le notebook avec l'option "--userbase" (Exemple : `runJupyterSession.sh --container rapids --userbase "${HOME}/myenv3"`), alors vous devrez ajouter `--env "PYTHONUSERBASE=${HOME}/myenv3"` à la commande de lancement apptainer :

```bash
apptainer exec --env "PYTHONUSERBASE=${HOME}/myenv3" --bind /tmpdir,/work --nv /work/conteneurs/sessions-interactives/modulus-24.01-calmip-si.sif-si.sif /usr/local/bin/proxychains.sh python monscript.py
```

</TabItem>
</Tabs>

Voici quelques liens pour avoir de l'information supplémentaire :
  * Sur l'[utilisation des conteneurs](../apptainer.md) sur Turpan
  * Sur l'[utilisation de la bibliothèque Pytorch](./pytorch.md) sur Turpan
  * Sur l'[utilisation de la bibliothèque TensorFlow](./tensorflow.md) sur Turpan
  * Sur l'[utilisation de la bibliothèque Scikit-learn](./scikit-learn.md) sur Turpan
  * Sur l'[utilisation de la bibliothèque modulus](./modulus.md) sur Turpan

## Comment arrêter une session interactive de notebook jupyter
Vous pouvez arrêter la session interactive de notebook jupyter de 2 façon :

* Soit en allant sur le terminal dans lequel vous avez lancé runJupyterSession.sh, et tapez :
    ```bash
    CTRL-C
    ```
* Soit en cliquant sur le bouton "Quit" de l’interface du notebook jupyter
:::tip
Depuis un notebook actif, il faut d'abord quitter le notebook ("File"->"Close and Halt") afin de pouvoir visualiser le bouton "Quit".
:::

## Si ça ne fonctionne pas
Avant de contacter le support, vous pouvez essayer les actions suivantes :
* Vérifier que le terminal contenant la session est toujours actif
* Vérifier que le terminal contenant le tunnel SSH est toujours actif
* Vérifier que vous n'avez pas de session de notebook jupyter en local sur votre poste de travail qui utilise déjà le port 8888
* Tuer toutes vos connexions ssh à destination de Turpan et recommencer une session interactive
* Si vous êtes sous windows, relancer votre session mobaxterm