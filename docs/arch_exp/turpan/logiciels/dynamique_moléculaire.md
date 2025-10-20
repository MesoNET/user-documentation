---
title: La dynamique moléculaire
sidebar_position: 12
---

Les modules disponibles sont:
- LAMMPS
- GROMACS
- AMBER

## LAMMPS
LAMMPS (Large-scale Atomic/Molecular Massively Parallel Simulator) est un logiciel de dynamique moléculaire hautement parallélisé, conçu pour simuler des systèmes atomiques, moléculaires ou mésoscopiques. Il est particulièrement utilisé pour la modélisation des matériaux, des polymères, des métaux et des fluides complexes.

« Il y a deux modules disponibles : l’un avec GNU-CUDA et l’autre avec le support de Kokkos. »

```
#!/bin/bash
#SBATCH -J lammps-run
#SBATCH -N 1
#SBATCH -n 2
#SBATCH --gres=gpu:2
#SBATCH --cpus-per-task=1

export OMP_NUM_THREADS=$SLURM_CPUS_PER_TASK
export OMP_PROC_BIND=close
```
#### Kokkos GPU-MPI

```
module purge
module load lammps/lammps_kakos
mpirun -np ${ntasks} --mca pml ucx -x UCX_NET_DEVICES=all --map-by ppr:80:node:PE=$SLURM_CPUS_PER_TASK --bind-to core lmp -k on g 2 -sf kk -pk kokkos -in in.file

```

#### GNU-CUDA
```
module purge
module load lammps/lammps_gnu_cuda
```
Il existe plusieurs façons d’exécuter le programme ; vous pouvez en choisir une parmi les suivantes
```
# MPI
mpirun -np $SLURM_NTASKS --mca pml ucx -x UCX_NET_DEVICES=all --map-by ppr:80:node:PE=$SLURM_CPUS_PER_TASK --bind-to core lmp -in in.file
```
```
# MPI OMP (lmp -sf omp )
mpirun -np $SLURM_NTASKS --mca pml ucx -x UCX_NET_DEVICES=all --map-by ppr:80:node:PE=$SLURM_CPUS_PER_TASK --bind-to core lmp -sf omp -in in.file
```
```
# GPU cuda (lmp -sf gpu )
export CUDA_VISIBLE_DEVIES=0,1
mpirun -np $SLURM_NTASKS --mca pml ucx -x UCX_NET_DEVICES=all --map-by ppr:80:node:PE=$SLURM_CPUS_PER_TASK --bind-to core lmp -sf gpu -in in.file
```


## GROMACS
GROMACS est un logiciel open source spécialisé dans la dynamique moléculaire, principalement utilisé pour l’étude des biomolécules comme les protéines, les lipides et les acides nucléiques. Il est reconnu pour sa rapidité et son efficacité sur les architectures parallèles, notamment les GPU.

```
#!/bin/bash
#SBATCH --job-name=gmx_mpi_gpu
#SBATCH --nodes=1
#SBATCH --ntasks-per-node=16
#SBATCH --gres=gpu:2
#SBATCH --cpus-per-task=4
#SBATCH --time=00:30:00
#SBATCH --partition=small
#SBATCH -o gmx_%j.out
#SBATCH -e gmx_%j.err

# Chargement des modules
module purge
module load gromacs/2024.6

source $GMXRC

# Commande MPI explicite
mpirun -np $SLURM_NTASKS \
    --hostfile hosts.txt \
    --map-by ppr:$SLURM_NTASKS:node:PE=$SLURM_CPUS_PER_TASK \
    --bind-to core \
    gmx_mpi mdrun \
        -s benchPEP.tpr \
        -deffnm benchPEP \
        -ntomp $SLURM_CPUS_PER_TASK \
        -nb gpu \
        -pin on -v
```
:::danger Important
N'oubliez pas `source $GMXRC` 
:::

:::tip Note
Si vous lancez un calcul sans `mpirun`, et que vous ne définissez pas `--cpus-per-task` ou `OMP_NUM_THREADS`, le programme utilisera alors 80 threads
:::

## AMBER
AMBER (Assisted Model Building with Energy Refinement) est un ensemble de programmes destinés à la simulation de biomolécules par dynamique moléculaire. Il repose sur des champs de force précis et est couramment employé en chimie computationnelle et en biophysique pour l’étude des interactions et de la stabilité des systèmes biologiques.

```

#!/bin/bash
#SBATCH -N 1
#SBATCH -n 2
#SBATCH --gres=gpu:2
#SBATCH -p small
#SBATCH --ntasks-per-node=2

module purge
module load amber/gnu/25
source $AMBERSH

mpirun -n 2 pmemd.cuda_SPFP.MPI -O -i mdin5 -o overall_output.out -p sys.prmtop -c sys4.rst  -inf mdinfo5 -x sys4rot5.mdcrd

```
:::danger Important
N'oubliez pas `source $AMBERSH` 
:::
