---
title: "Environnements logiciels"
sidebar_position: 5
---

# Gestion de l'Environnement

Pour garantir que votre shell fonctionne correctement sur le cluster **Hedy**, nous utilisons un système appelé **[Modules](https://lmod.readthedocs.io/en/latest/index.html)**. Son but principal est de simplifier la configuration initiale.

Concrètement, l'outil Modules permet à chaque utilisateur de modifier son environnement facilement. Il y parvient en utilisant des fichiers de configuration qui contiennent tous les réglages pour qu'une application spécifique soit prête à l'emploi. Vous avez accès à de nombreux programmes déjà installés via ces modules.


# UTILISATION DU SYSTÈME DE MODULES
## module list

Pour lister les modules chargés dans votre environnement, vous pouvez utiliser la commande **module list** (ou son raccourci **ml list**) :

```console
[user@m-login02 ~]$ module list
No modules loaded
[user@m-login02 ~]$ ml list
No modules loaded
```
On voit qu'au départ, aucun module n'est chargé et l'environnement de travail est propre.

## module avail

La commande **module avail** (**ml avail**) permet d'obtenir la liste des modules installés sur le cluster.

```console
[user@m-login02 ~]$ module avail 

----------------------------------------------------------------- /opt/ohpc/pub/modulefiles -----------------------------------------------------------------
   R-Studio/2024.04.1                 cuda-nccl/2.21.5-cuda12.5                gdb/16.3         (D)    octave/10.2.0          (D)    pmix/4.2.9
   R-Studio/2025.05.1          (D)    cuda-nccl/2.27.3-cuda12.9         (D)    gnu12/12.2.0            openjdk/21                    prun/2.2
   R/4.4.0                            cuda-tensorrt/10.0.1.6-cuda12.4          gnu13/13.2.0            openjdk/24             (D)    python/3.12.4
   R/4.5.0                     (D)    cuda-tensorrt/10.11.0.33-cuda12.9 (D)    hwloc/2.12.0            os                            python/3.13.4    (D)
   autotools                          cuda-toolkit/12.4                        intel/2023.2.1          paraview/5.12.1-egl           ucx/1.18.0
   blender/4.1.1                      cuda-toolkit/12.5                        intel/2024.0.0   (D)    paraview/5.12.1-mpi    (D)    valgrind/3.24.0
   blender/4.4.3               (D)    cuda-toolkit/12.6                        intel/2024.1.2          paraview/5.12.1-osmesa        visit/3.4.1-beta
   cmake/4.0.0                        cuda-toolkit/12.8                        intel/2024.2.1          paraview/5.13.3-egl           visit/3.4.2      (D)
   cuda-cuddn/9.2.0.82-cuda12         cuda-toolkit/12.9                 (D)    libfabric/1.18.0        paraview/5.13.3-mpi
   cuda-cuddn/9.10.2.21_cuda12 (D)    gdb/14.2                                 octave/9.2.0            paraview/5.13.3-osmesa

  Where:
   D:  Default Module
```
Certains modules ont des tags entre parenthèses. Ces modules représentent les modules qui seront chargés par défaut si on ne précise pas de version de module. 

La liste peut être un peu longue, il est préférable d'affiner ses recherches avec le nom d'une application, par exemple :

```console
[user@m-login02 ~]$ module avail cuda

----------------------------------------------------------------- /opt/ohpc/pub/modulefiles -----------------------------------------------------------------
   cuda-cuddn/9.2.0.82-cuda12         cuda-nccl/2.27.3-cuda12.9         (D)    cuda-toolkit/12.4    cuda-toolkit/12.8
   cuda-cuddn/9.10.2.21_cuda12 (D)    cuda-tensorrt/10.0.1.6-cuda12.4          cuda-toolkit/12.5    cuda-toolkit/12.9 (D)
   cuda-nccl/2.21.5-cuda12.5          cuda-tensorrt/10.11.0.33-cuda12.9 (D)    cuda-toolkit/12.6
```

## module load

Prenons l'exemple de **python3.12**. Voici ce qui se passe si vous recherchez **python3.12** dans votre environnement sans charger de module :
```console
[user@m-login02 ~]$ which python3.12
/usr/bin/which: no python3.12 in (/home/user/.local/bin:/home/user/bin:/etc/slurm/bin:/etc/slurm/svisu/bin:/usr/local/bin:/usr/bin:/usr/local/sbin:/usr/sbin:/opt/dell/srvadmin/bin)
```

Cette version de Python n'apparaît pas dans votre environnement, et par conséquent vous ne pouvez pas l'utiliser. Il faut donc charger le bon module avec la commande **module load** (ou son raccourci **ml load**) :

```console
[user@m-login02 ~]$ module load python/3.12

[user@m-login02 ~]$ module list
Currently Loaded Modules:
  1) python/3.12.4

[user@m-login02 ~]$ which python3.12
/opt/ohpc/pub/apps/python/3.12.4/bin/python3.12
```

On voit que maintenant **python3.12** est utilisable. Tous les modules requis en tant que dépendances seront identifiés et chargés automatiquement, le cas échéant.

## module remove

Lorsque vous ne voulez plus utiliser un module, vous pouvez le supprimer de votre environnement avec la commande **module remove** (ou ses raccourcis **module rm** ou **ml rm**) :

```console
[user@m-login02 ~]$ module list
Currently Loaded Modules:
  1) python/3.12.4

[user@m-login02 ~]$ module remove python/3.12.4 

[user@m-login02 ~]$ module list
No modules loaded
```

Module va gérer de manière "intelligente" les dépendances, si vous enlevez un module dont dépend d'autres modules, tous les modules seront déchargés.

## module purge

Vous pouvez supprimer tous vos modules d'un coup pour repartir sur une base nouvelle avec **module purge** (**ml purge**)

```console
[user@m-login02 ~]$ module list
Currently Loaded Modules:
  1) python/3.13.4   2) cuda-nccl/2.27.3-cuda12.9   3) autotools

[user@m-login02 ~]$ module purge

[user@m-login02 ~]$ module list
No modules loaded
```

## module swap

Il est possible de remplacer un module par un autre avec une seule commande **module swap** (**ml sw**) :

```console
[user@m-login02 ~]$ module list 
Currently Loaded Modules:
  1) python/3.12.4

[user@m-login02 ~]$ module swap python/3.12.4 python/3.13.4 
The following have been reloaded with a version change:
  1) python/3.12.4 => python/3.13.4

[user@m-login02 ~]$ module list 
Currently Loaded Modules:
  1) python/3.13.4
```
Ici on remplace le module **python3.12** par le module **python3.13**. Les dépendances sont gérées automatiquement, le cas échéant.
