---
title: Environnement logiciel
sidebar_position: 6
---
## Modules d'environnement

Le système d'exploitation installé sur tous les nœuds est Rocky Linux 8.7.

Pour faciliter la gestion des environnements logiciels Zen utilise [lmod](https://lmod.readthedocs.io/en/latest/), dont le fonctionnement est très proche d'[environment-modules](https://modules.readthedocs.io/en/latest/).

Pour se familiariser avec l'outil, vous pouvez consulter [ce tutoriel](HOWTO/module.md).



:::info

Si un module d'environnement vous manque, envoyez un courriel à support@mesonet.fr (en spécifiant que votre demande concerne le cluster Zen).

:::


## Organisation hierarchique

Les modules d'environnement sont organisés de façon hierarchique.

La commande
```module avail```
montre les modules "core" disponibles sans dépendance. Ils peuvent être chargés directement.

```shell
ml av

----------------------------------------------------------------------------------- /bxfs/modules/core -----------------------------------------------------------------------------------
   aocc/4.0.0        apptainer/1.2.4      gcc/13.2.0               go/1.21.1              miniconda3/23.5.2.py311    openjdk/21.0.1      pgi/19.10 (D)
   aocc/4.1.0 (D)    gaussian/g16.C.01    gnu-parallel/20230922    intel-oneapi/2023.2    nodejs/18.18.2             pgi/19.10.nollvm
```

Pour voir le module `openmpi/4.1.6` qui dépend de `gcc/13.2.0` il faut au préalable charger cette dépendance.

Après avoir chargé `gcc` la commande `module avail` montrera alors les modules qui en dépendent.

```shell
--------------------------------------------------------------------------- /bxfs/modules/compiler/gcc/13.2.0 ----------------------------------------------------------------------------
   fftw/3.3.10    gmp/6.3.0    hdf5/1.14.2.mpi    hdf5/1.14.2.seq    hdf5/1.14.2.threadsafe (D)    openblas/0.3.24    openmpi/4.1.6
```

## `module spider`

La commande `module spider` affiche tous les modules disponibles. Par exemple, il y a la ligne

```shell
openmpi: openmpi/3.1.3, openmpi/4.1.5, openmpi/4.1.6
```

La tentative de charger directement un de ces modules donne une erreur. Pour savoir comment les charger:

```shell
module spider openmpi/4.1.6

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  openmpi: openmpi/4.1.6
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    You will need to load all module(s) on any one of the lines below before the "openmpi/4.1.6" module is available to load.

      gcc/13.2.0

    Help:
      This module loads the OpenMPI-4.1.6 library build with gcc-13.2.0
```

Pour utiliser `openmpi/4.1.6` il faut donc le charger ainsi
```shell
module load gcc/13.2.0
module load openmpi/4.1.6
```

Ou, en utilisant les [raccourcis](/HOWTO/module#ml) et le fait que les deux versions sont marqués "(D)efault", simplement

```shell
ml gcc openmpi
```
