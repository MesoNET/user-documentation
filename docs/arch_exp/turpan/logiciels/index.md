---
title: "Les logiciels installés"
sidebar_position: 6
---


Les compilateurs : Nvidia HPC, ARM, GNU

Les librairies de communication : OpenMPI

Les librairies : BLAS, LAPACK, ScaLAPACK, FFT, PetSC

Applications scientifique : MAGMA, OpenFoam, Saturne, HDF5, AMGX, CuFFT, CuBlas, CuSparse, CuTENSOR

Les outils de profiling et diagnostique : MAP (CPU / GPU), Nsight (GPU)



## Les bibliothèques scientifiques
- [BLAS](./blas.md)
- [LAPACK](./lapack.md)
- [ScaLAPACK](./scalapack.md)
- [HDF5](./hdf5.md)



## Les logiciels scientifiques
- [PETSc](./petsc.md)
- [AmgX](./amgx.md)
- [FFTW](./fftw.md)
- [netCDF](./netcdf.md)
- [parallel netCDF](./pnetcdf.md)


## Les logiciels de visualisation
Les logiciels suivants de visualisation de données scientifiques sont installés sur Turpan.  
RAPPEL - Pour se connecter aux nœuds de visualisation de Turpan
- ParaView

## L'écosystème Python


## CALMIP préconise l’utilisation de conda pour l’installation de vos environnements python :

- La documentation CALMIP pour conda

### Environnements conda prêts à être utilisés ou clonés :

- python (uniquement python)
- python-tools (contenant les modules : Numpy, Scipy, Pandas, Matplotlib, JupyterLab plus quelques autres)
- tensorflow (tensorflow, JupyterLab et TensorBoard) [en cours de création]
- pytorch (pytorch et JupyterLab) [en cours de création]
- scikit-learn (scikit-learn et JupyterLab) [en cours de création]

### Outils de visualisation également disponibles :

- TensorBoard [en cours de création]
 - JupyterLab [en cours de création]

### Si vous avez des dépendances très nombreuses et particulières:

- Il est peut-être plus simple de passer par un conteneur singularity [a venir]



