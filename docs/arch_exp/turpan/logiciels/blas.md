---
title: BLAS
sidebar_position: 1
---

## Comment utiliser la librairie blas sous l'environnement nvhpc ? Voici un exemple script.slurm

```
#!/bin/bash
#SBATCH -N 1
#SBATCH -n 1
#SBATCH -c 80
#SBATCH --time=00:10:00
#SBATCH -w turpancomp10
module purge
module load nvhpc-nompi/22.9
nvfortran -O3 -g -cpp -Minfo -mp=multicore file.f90 -o ./file -lblas
export OMP_NUM_THREADS=${SLURM_CPUS_PER_TASK}
time mpirun -np 1 --map-by ppr:1:node:PE=${OMP_NUM_THREADS} ./file
```

## Comment utiliser la librairie blas sous l'environnement arm ? Voici un exemple script.slurm

```
#!/bin/bash
#SBATCH -N 1
#SBATCH -n 1
#SBATCH -c 80
#SBATCH --time=00:10:00
#SBATCH -w turpancomp0
module purge
module load arm
module load acfl/22.1
module load armpl/22.1.0
Copmilation and execution:
armflang -Ofast -fopenmp file.f90 -o ./file -armpl_mp
export OMP_NUM_THREADS=${SLURM_CPUS_PER_TASK}
time mpirun -np 1 --map-by ppr:1:node:PE=${OMP_NUM_THREADS} ./file
```
