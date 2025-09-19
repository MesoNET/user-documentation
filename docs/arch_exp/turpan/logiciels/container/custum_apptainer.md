---
title: Créer un conteneur
sidebar_position: 3
---

Le plus simple est de partir d’un [des conteneurs disponible](./list_containers.md).

Les commandes pour créer l’environnement apptainer depuis l’image du conteneur nommés ici « X » ( où X peut être n'importe lequel des conteneurs disponibles):

```shell
cd /work/conteneurs/build_container
apptainer build --sandbox mon_conteneur/ /work/conteneurs/sessions-interactives/x.sif

# Create necessary directory 
mkdir mon_conteneur/users  mon_conteneur/tmpdir mon_conteneur/work
```


## Accéder au conteneur : deux cas à distinguer
Il est important de prendre en compte les éléments suivants lors de l'accès à un conteneur :

* Si vous souhaitez installer des paquets nécessitant un accès à Internet, vous devez lancer le conteneur depuis nœud frontal, c’est-à-dire à l’endroit où se trouve le répertoire contenant le conteneur.
    ```shell
    apptainer shell --fakeroot --writable mon_conteneur/
    ```

* Si vous avez besoin d’effectuer des compilations ou des tâches lourdes en utilisant un nœud de calcul (par exemple via une soumission SLURM) pour accéder au conteneur.
    ```shell
    srun -p shared -n 1 --gres=gpu:1 --pty apptainer shell --fakeroot --writable  /work/conteneurs/calmip/ mon_conteneur/
    ```

**Maintainant vous pouvez installer ou compiler tous les paquets nécessaires.**

## Accès aux fichiers locaux dans le conteneur
Si vous avez besoin de fichiers de votre espace personnel et que vous souhaitez les utiliser dans le conteneur :
```shell
apptainer shell --fakeroot --writable --bind path/to/file/:/tmpdir  mon_conteneur/
```
Depuis l’intérieur du conteneur, copiez les fichiers depuis /tmpdir vers un autre répertoire tel que /work ou /users, afin de les rendre disponibles dans votre conteneur.

## Utiliser des binaires installés sur Turpan
Pour inclure un binaire déjà installé sur Turpan, commencez par identifier le module avec la commande  `module show name` qui indiquera le chemin vers le binaire du module.

Ensuite, pour l’utiliser dans le conteneur.
```shell
apptainer shell --fakeroot --writable --bind path/to/binary/:/tmpdir  mon_conteneur/
```
Une fois le chemin monté (bindé) dans le conteneur, copiez le fichier depuis `/tmpdir` vers `/usr/local/` à l’intérieur du conteneur.

## Créer l'image
Puis une fois les modifications faites, il faut construire l’image et éventuellement faire le ménage :
```shell
apptainer build mon_conteneur.sif mon_conteneur/
# A faire uniquement tout a la fin une fois que l'image est définitive pour libérer la place
apptainer cache clean
```
:::tip Note
Si vous avez construit un conteneur personnalisé, merci de nous communiquer son chemin ainsi que les paquets ajoutés, afin que nous puissions l’inclure dans la liste des conteneurs disponibles.
:::

## Le conteneur avec Jupyter Notebook
Enfin, pour lancer le conteneur que vous avez créé avec un Jupyter Notebook, vous pouvez procéder comme suit :
```shell
runJupyterSession.sh --container custom --containerpath /work/conteneurs/calmip/mon_conteneur.sif
```

