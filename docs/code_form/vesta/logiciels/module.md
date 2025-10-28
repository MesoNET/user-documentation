---
title: "Environnements logiciels"
sidebar_position: 1
---

# INTRODUCTION

Le système de [Modules](https://modules.readthedocs.io/en/latest/#) est un outil qui simplifie l'initialisation du shell et permet aux utilisateurs et utilisatrices de modifier leur environnement facilement avec des fichiers de modules.

Chaque fichier de module contient les informations requises pour configurer le shell pour une application spécifique. Plusieurs modules sont pré-installés sur **Vesta**.

Par défaut, le module **[slurm/slurm](jobs)** (notre gestionnaire de ressources, indispensable pour soumettre des jobs) est chargé par défaut dans l'environnement de toutes les personnes se connectant au cluster.

# UTILISATION
## module list

Pour lister les modules chargés dans votre environnement, vous pouvez utiliser la commande **module list** (ou son raccourci **ml list**) :

```console
hal@hpc-vesta1:~$ module list
Currently Loaded Modulefiles:
 1) slurm/slurm(latest)
```

On voit ici que le module **slurm/slurm** est chargé, ce qui nous permettra d'utiliser cette application.

## module load

Prenons l'exemple de **openmpi**. Voici ce qui se passe si vous essayez de l'utiliser sans charger de module :

```console
hal@hpc-vesta1:~$ mpirun
-bash: mpirun: command not found
hal@hpc-vesta1:~$ which mpirun
/usr/bin/which: no mpirun in (/usr/local/bin/di:/nfs/mesonet/home/users/hal/HPC_tools/utilities:/nfs/mesonet/home/users/hal/.local/bin:/nfs/mesonet/sw/slurm/slurm-24.05.0/bin:/nfs/mesonet/sw/modules/modules-5.4.0/bin:/usr/local/bin:/usr/bin:/usr/local/sbin:/usr/sbin:/nfs/mesonet/home/users/hal/bin:/nfs/mesonet/sw/munge/munge-0.5.16/bin/)
```
Le logiciel n'apparaît pas dans votre environnement, et par conséquent vous ne pouvez pas l'utiliser. Il faut donc charger le bon module avec la commande **module load** (ou son raccourci **ml load**) :

```console
hal@hpc-vesta1:~$ module load openmpi/5.0.6.rocm-5.7.1
Loading openmpi/5.0.6.rocm-5.7.1
  Loading requirement: rocm/5.7.1
hal@hpc-vesta1:~$ module list
Currently Loaded Modulefiles:
 1) slurm/slurm(latest)   2) rocm/5.7.1(latest)   3) openmpi/5.0.6.rocm-5.7.1
hal@hpc-vesta1:~$ which mpirun
/nfs/mesonet/sw/openmpi/openmpi-5.0.6.rocm-5.7.1/bin/mpirun
```

On voit que maintenant **openmpi** est utilisable. On constate également que tous les autres modules desquels **openmpi** dépend ont été chargé automatiquement. Pour désactiver l'affichage du message, vous pouvez utiliser l'option **-s** (ou **--silent**) :
```console

hal@hpc-vesta1:~$ module -s load openmpi/5.0.6.rocm-5.7.1
Loading openmpi/5.0.6.rocm-5.7.1
  Loading requirement: rocm/5.7.1
hal@hpc-vesta1:~$ module list
Currently Loaded Modulefiles:
 1) slurm/slurm(latest)   2) rocm/5.7.1(latest)   3) openmpi/5.0.6.rocm-5.7.1
```
Le message ne s'est pas affiché, mais tous les modules sont bien chargés. Cela peut servir pour alléger les logs de vos jobs.

## module remove

Lorsque vous ne voulez plus utiliser un module, vous pouvez le supprimer de votre environnement avec la commande **module remove** (ou ses raccourcis **module rm** ou **ml rm**). Dans notre exemple, le module **openmpi/5.0.6.rocm-5.7.1** n'est plus nécessaire :

```console
hal@hpc-vesta1:~$ module list
Currently Loaded Modulefiles:
 1) slurm/slurm(latest)   2) rocm/5.7.1(latest)   3) openmpi/5.0.6.rocm-5.7.1
hal@hpc-vesta1:~$ module remove openmpi/5.0.6.rocm-5.7.1
Unloading openmpi/5.0.6.rocm-5.7.1
  Unloading useless requirement: rocm/5.7.1
hal@hpc-vesta1:~$ module list
Currently Loaded Modulefiles:
 1) slurm/slurm(latest)
```

Module va gérer de manière "intelligente" les dépendances. Il a supprimé les dépendances automatiquement. Si vous aviez chargé le module **rocm/5.7.1** avant de charger le module **openmpi/5.0.6.rocm-5.7.1**, ce dernier ne chargera que l'autre dépendance manquante. Lors de la suppression, le module **rocm/5.7.1** sera conservé :

```console
hal@hpc-vesta1:~$ module list
Currently Loaded Modulefiles:
 1) slurm/slurm(latest)   2) rocm/5.7.1(latest)
hal@hpc-vesta1:~$ module load openmpi/5.0.6.rocm-5.7.1
hal@hpc-vesta1:~$ module list
Currently Loaded Modulefiles:
 1) slurm/slurm(latest)   2) rocm/5.7.1(latest)   3) openmpi/5.0.6.rocm-5.7.1
hal@hpc-vesta1:~$ module rm openmpi/5.0.6.rocm-5.7.1
  Unloading useless requirement: openmpi/openmpi-3.1.i18
hal@hpc-vesta1:~$ module list
Currently Loaded Modulefiles:
 1) slurm/slurm(latest)   2) rocm/5.7.1(latest)
```

À l'inverse, si vous enlevez un module dont dépend d'autres modules, tous les modules seront déchargés :
```console
hal@hpc-vesta1:~$ module load openmpi/5.0.6.rocm-5.7.1
Loading openmpi/5.0.6.rocm-5.7.1
  Loading requirement: rocm/5.7.1
hal@hpc-vesta1:~$ module list
Currently Loaded Modulefiles:
 1) slurm/slurm(latest)   2) rocm/5.7.1(latest)   3) openmpi/5.0.6.rocm-5.7.1
hal@hpc-vesta1:~$ module rm rocm/5.7.1
Unloading rocm/5.7.1
  Unloading dependent: openmpi/5.0.6.rocm-5.7.1
```

## module purge

Vous pouvez supprimer tous vos modules d'un coup pour repartir sur une base nouvelle avec **module purge** (**ml purge**)

```console
hal@hpc-vesta1:~$ module list
Currently Loaded Modulefiles:
 1) slurm/slurm(latest)   2) rocm/5.7.1(latest)   3) openmpi/5.0.6.rocm-5.7.1   4) gcc/13.2.0(latest)
hal@hpc-vesta1:~$ module purge
Unloading slurm/slurm
  ERROR: Unload of super-sticky module skipped
hal@hpc-vesta1:~$ module list
Currently Loaded Modulefiles:
 1) slurm/slurm(latest)
```

Vous pouvez qu'une erreur indique que le module **slurm/slurm** n'a pas pu être supprimé. C'est tout à fait normal, ce module étant indispensable au fonctionnement du centre de calcul, nous avons décidé de le rendre permanent. Si vous ne souhaitez pas voir l'erreur apparaître, vous pouvez utiliser l'option **-s** :

```console
hal@hpc-vesta1:~$ module list
Currently Loaded Modulefiles:
 1) slurm/slurm(latest)   2) rocm/5.7.1(latest)   3) openmpi/5.0.6.rocm-5.7.1   4) gcc/13.2.0(latest)
hal@hpc-vesta1:~$ module purge -s
hal@hpc-vesta1:~$ module list
Currently Loaded Modulefiles:
 1) slurm/slurm(latest)
```

## module switch

Il est possible de remplacer un module par un autre avec une seule commande **module switch** (**ml switch**) :

```console
hal@hpc-vesta1:~$ module list
Currently Loaded Modulefiles:
 1) slurm/slurm(latest)
hal@hpc-vesta1:~$ module load aocl/4.2.0.aocc
Loading aocl/4.2.0.aocc
  Loading requirement: rocm/5.7.1
hal@hpc-vesta1:~$ module list
Currently Loaded Modulefiles:
 1) slurm/slurm(latest)   2) rocm/5.7.1(latest)   3) aocl/4.2.0.aocc
hal@hpc-vesta1:~$ module switch aocl/4.2.0.aocc aocl/4.2.0.gcc
Switching from aocl/4.2.0.aocc to aocl/4.2.0.gcc
  Unloading useless requirement: rocm/5.7.1
  Loading requirement: gcc/13.2.0
hal@hpc-vesta1:~$ module list
Currently Loaded Modulefiles:
 1) slurm/slurm(latest)   2) gcc/13.2.0(latest)   3) aocl/4.2.0.gcc
```

Ici on remplace le module **aocl/4.2.0.aocc** par le module **aocl/4.2.0.gcc**. Les dépendances sont gérées automatiquement.

## module avail

La commande **module avail** (**ml avail**) permet d'obtenir la liste des modules installés sur le cluster.

La liste peut être un peu longue et indigeste, il est préférable d'affiner un peu ses recherches avec le nom d'une application par exemple :

```console
hal@hpc-vesta1:~$ module avail gcc
---------------- /nfs/mesonet/sw/modulefiles ----------------
gcc/9.5.0  gcc/10.5.0  gcc/11.4.0  gcc/12.3.0  gcc/13.2.0(latest)
```

Certains modules ont des tags entre parenthèses. Ces derniers servent à identifier rapidement le module le plus récent. Quand 2 modules partagent le tag *latest*, un autre tag s'ajoute pour les différencier (souvent le compilateur qui a servi a complier l'application).

D'autres modules sont soulignés. Ces modules représentent les modules qui seront chargés par défaut si on ne précise pas de version de module :

```console
hal@hpc-vesta1:~$ module load gcc
hal@hpc-vesta1:~$ module list
Currently Loaded Modulefiles:
 1) slurm/slurm(latest)   2) gcc/gcc-13.2.0(latest)
```

## .bashrc / .cshrc / .zshrc
Les fichiers **.bashrc** (pour [bash](https://www.gnu.org/software/bash)), **.cshrc** (pour [tcsh](https://www.tcsh.org) ou csh) et **.zshrc** (pour [zsh](https://www.zsh.org)) permettent une personalisation du shell. Vous pouvez y insérer des commandes qui seront lancées à chaque connexion. Il est ainsi possible de charger directement les modules qui vous intéressent dans ce fichier de configuration. Vous pouvez éditer ce fichier avec n'importe quel éditeur de texte installé sur **Vesta** :

```console
vim ~/.bashrc
```

Ces modules seront également utilisés pour vos jobs, donc il n'est plus nécessaire de les charger manuellement dans vos scripts de soumissions.

Voici un exemple de **.bashrc** qui charge des modules automatiquement :

```console
# .bashrc

# Source global definitions
if [ -f /etc/bashrc ]; then
        . /etc/bashrc
fi

source /usr/local/configfiles/bashrc.default

module load -s gcc/gcc-13.2.0
module load -s openmpi/5.0.6.rocm-5.7.1
module load -s cmake/3.29.5
```
