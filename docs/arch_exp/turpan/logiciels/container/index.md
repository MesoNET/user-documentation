---
title: Les conteneurs
sidebar_position: 12
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Vous pouvez déployer vos applications via des conteneurs Apptainer (anciennement Singularity). La liste des conteneurs disponibles [se trouve ici](list_containers.md)

## [Construction de conteneurs](custum_apptainer)

Pour vous permettre de créer facilement des conteneurs pour l'architecture des CPUs ARM, la construction de conteneurs apptainer sur Turpan est possible à partir des frontales de connexion à l'aide de la commande `apptainer build` [voir ici](custum_apptainer)

## Utilisation d'un conteneur Apptainer

Pour être utilisables, les conteneurs doivent obligatoirement se trouver dans un sous-répertoire de `/work/conteneurs`. Vous devez contacter le support et demander la création d'un dossier pour votre compte s'il n'existe pas.

:::info

Merci de réserver le lancement de conteneurs sur la frontale de connexion à des tests uniquement (shell interactif, installations de paquets python, etc...)

:::

<Tabs>
<TabItem label="Mode sbatch" value="sbatch" default>
Pour utiliser un conteneur depuis un script sbatch:

* Pour exécuter un conteneur qui exécute un code spécifique :
  ```shell
  apptainer run /work/conteneurs/${PROJET}/${USER}/mon_conteneur.sif
  ```

* Pour exécuter mon code à qui se trouve à l'intérieur du conteneur :
  ```shell
  apptainer exec --nv /work/conteneurs/${PROJET}/${USER}/mon_conteneur.sif python mon_script.py
  ```

</TabItem>
<TabItem label="Mode interractif" value="interractif" default>

* Depuis une frontale, pour faire des essais ou des installations particulières :
  ```shell
  apptainer shell /work/conteneurs/<projet>/<user>/mon_conteneur.sif
  ```

* Dans une réservation interractive avec salloc ou srun, vous pouvez exécuter un conteneur pour appeler un shell dans le conteneur :
  ```shell
  srun -n 1 -p shared --pty apptainer shell /work/conteneurs/<projet>/<user>/mon_conteneur.sif
  ```

</TabItem>
</Tabs>

Par défaut, seul votre espace HOME est accessible à l'intérieur du conteneur. Pour ajouter les espaces WORK et TMPDIR vous devez ajouter l'option suivante : 
  ```shell
  --bind /tmpdir,/work
  ```

## Téléchargement de conteneurs depuis un dépôt
Vous pouvez utiliser des conteneurs mis à disposition par des éditeurs ou des projets de développement  à l'aide de la commande apptainer pull

Par exemple :
* Ajout du dépot Sylabs
  ```shell
  apptainer remote add --no-login SylabsCloud cloud.sycloud.io
  apptainer remote use SylabsCloud
  ```
* Téléchargement d'un conteneur de test
  ```shell
  cd /work/conteneurs/${PROJET}/${USER}
  apptainer pull --arch arm64 library://library/default/lolcow:latest
  ```

Pour tester :
```shell
apptainer run /work/conteneurs/${PROJET}/${USER}/lolcow_latest.sif
```

## Gestion du cache local

Attention, des fichiers de cache parfois volumineux sont téléchargés localement dans votre espace $HOME  lorsque vous utilisez la commande `apptainer pull`.

* Pour lister le contenu du cache et l'espace utilisé : `apptainer cache list`
* Pour vider le cache et libérer l'espace : `apptainer cache clean`

## Pour aller plus loin

[La documentation officielle du logiciel Apptainer](https://apptainer.org/docs/user/1.1/)

:::info

Pour des raisons de sécurité, l'exécution de conteneurs en mode privilégié (setuid) n'est pas autorisée sur Turpan. Dans de rares cas, cela peut empêcher l'utilisation de certaines options d'Apptainer

:::