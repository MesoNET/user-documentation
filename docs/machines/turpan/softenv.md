---
title: "Environnement de développement"
sidebar_position: 5
---

# Les environnements de développement

les environnements de développement disponibles sur Turpan sont : 
- Nvidia HPC, ARM et GNU Compiler Collection. 
- Les compilateurs C/C++/Fortran et les accélérateurs support des normes OpenMP et OpenACC.
- Il y a également les librairies scientifiques BLAS LAPACK Scalapack FFT et MPI optimisée.

## Comment configurer un environnement ? 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="nvhpc" label="nvhpc" default>

Sans openmpi, avec cuda :

```
module load nvidia
module load nvhpc-nompi/22.9
```

Avec openmpi compilé pour cpu, avec cuda

```
module load nvidia
module load nvhpc-nompi/22.9
module load openmpi/nvidia/4.1.4-cpu
```
Avec openmpi compilé pour gpu, avec cuda

```
module load nvidia
module load nvhpc-nompi/22.9
module load openmpi/nvidia/4.1.4-gpu

```  
  </TabItem>
  <TabItem value="arm" label="ARM">
Sans openmpi, sans gpu

```
module load arm
module load acfl/22.1
module load armpl/22.1.0

```
Avec openmpi, sans gpu

```
module load arm
module load acfl/22.1
module load armpl/22.1.0
module load openmpi/arm/4.1.4-cpu

```
Avec openmpi, avec gpu

```
module load arm
module load acfl/22.1
module load armpl/22.1.0
module load openmpi/arm/4.1.4-gpu

```
  </TabItem>
  <TabItem value="gnu" label="GNU">
  Sans openmpi, sans gpu

```
module load gnu/11.2.0

```
Avec openmpi, sans gpu

```
module load gnu/11.2.0
module load openmpi/gnu/4.1.4-cpu

```
Avec openmpi, avec gpu

```
module load gnu/11.2.0
module load openmpi/gnu/4.1.4-gpu

```  
  </TabItem>
</Tabs>

## Comment charger un module ? 

```Shell
module purge
module avail hdf5
----------------------------- /usr/local/modules/modulefiles/scientific_applications -----------------------------
hdf5/arm/1.12.2-parallel  hdf5/gnu/1.12.2-parallel  hdf5/nvidia/1.12.2-parallel  
hdf5/arm/1.12.2-seq       hdf5/gnu/1.12.2-seq       hdf5/nvidia/1.12.2-seq 
module load hdf5/gnu/1.12.2-seq
module unload hdf5/gnu/1.12.2-seq
module list
```

## Les compilateurs pour GNU ARM NVHPC

- GNU :
  - gcc pour C 
  - g++ pour C++ 
  - gfortran pour Fortran
- ARM
  - armclang pour C
  - armclang++ pour C++
  - armflang pour Fortran
- NVHPC
  - nvc pour C
  - nvc++ pour C++
  - nvfortran pour Fortran

 
## Les flags de compilation

### GNU 

https://gcc.gnu.org/onlinedocs/gcc/Optimize-Options.html

### ARM + OpenMP : 

```
FFLAGS     = -O3 -g -cpp -fopenmp -fsimdmath -mcpu=neoverse-n1 -ffp-contract=fast -fvectorize -funroll-loops -ffast-math
```

[Voir ce lien](https://developer.arm.com/documentation/101725/0300/Coding-for-Neon) pour aider à porter les applications vers ARM.

### nvfortran + OpenACC

```
FFLAGS     = -O3 -g -Mpreprocess -ta=tesla:cc80,pinned -acc -Mcuda -Minfo=accel
```

[Voici le lien](https://docs.nvidia.com/hpc-sdk/compilers/index.html) vers la doc compilateur NVIDIA.
 
