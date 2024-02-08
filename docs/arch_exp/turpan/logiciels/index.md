---
title: "Les logiciels installés"
sidebar_position: 6
---

Un cetains nombre d'outils et de blibiothèques sont disponibles sur Turpan :
* Les compilateurs : [Nvidia HPC ARM, GNU](../softenv.md#les-compilateurs-pour-gnu-arm-nvhpc)
* Les librairies de communication : OpenMPI
* Les librairies : [BLAS, LAPACK, ScaLAPACK, FFT, PetSC](#les-bibliothèques-scientifiques)
* Applications scientifique : [MAGMA, OpenFoam, Saturne, HDF5, AMGX, CuFFT, CuBlas, CuSparse, CuTENSOR](#les-logiciels-scientifiques)
* Les outils de profiling et diagnostique : MAP (CPU / GPU), Nsight (GPU)

## Les bibliothèques scientifiques

Les bibliothèques scientifiques disponibles sur Turpan :
* [BLAS](./blas.md)
* [LAPACK](./lapack.md)
* [ScaLAPACK](./scalapack.md)
* [HDF5](./hdf5.md)

## Les logiciels scientifiques

Les logiciels scientifiques disponibles sur Turpan :
* [PETSc](./petsc.md)
* [AmgX](./amgx.md)
* [FFTW](./fftw.md)
* [netCDF](./netcdf.md)
* [parallel netCDF](./pnetcdf.md)


## Les logiciels de visualisation

Les logiciels suivants de visualisation de données scientifiques sont installés sur Turpan : 
* ParaView

:::tip Rappel

Pour avoir une session graphique, il faut se [connecter aux nœuds de visualisation de Turpan](../connexion/visu.md#prérequis).

:::

## L'écosystème Python

Les [environnements python](./envpython/index.md) font l'objet d'une section entière et dédiée.

## Les conteneurs

Si vous avez des dépendances très nombreuses et particulières, vous pouvez utiliser des conteneurs :

* La documentation sur les [conteneur Apptainer (anciennement Singularity)](./apptainer.md)

