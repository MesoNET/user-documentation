---
title: LAPACK
sidebar_position: 2
---

## Comment utiliser la librairie lapack sous l'environnement nvhpc ? Voici un exemple script.slurm (BigInt=32, BigInt=64)

```
#!/bin/bash
#SBATCH -J script_art63
#SBATCH -N 1
#SBATCH -n 1
#SBATCH -c 80
#SBATCH --time=00:40:00
#SBATCH -w turpancomp1

#reprsentation digitale des entiers : 32 ou 64 bits
BigInt=64

module purge
module load nvhpc-nompi/22.9 
export BINARY=test_LU_f
export SOURCE=test_LU

rm -f ${SOURCE}.o ${BINARY}
if [ ${BigInt} -eq 64 ]
then
echo "compilation integer 64 bit"
nvfortran -c -DBIGINT -O3 -g -cpp -Minfo -mp=multicore ${SOURCE}.F90
ls ${SOURCE}.o
nvfortran -O3 -g -cpp -Minfo -mp=multicore -o ${BINARY} ${SOURCE}.o -lblas_ilp64 -llapack_ilp64
else
echo "compilation integer 32 bit"
nvfortran -c -O3 -g -cpp  -Minfo -mp=multicore ${SOURCE}.F90
ls ${SOURCE}.o
nvfortran -O3 -g -cpp -Minfo -mp=multicore -o ${BINARY} ${SOURCE}.o -lblas -llapack
fi

ldd ./${BINARY}
export OMP_NUM_THREADS=${SLURM_CPUS_PER_TASK}
echo "OMP_NUM_THREADS=${OMP_NUM_THREADS}"
srun $(placement 1 ${SLURM_CPUS_PER_TASK} ) ./${BINARY}
```

## Comment utiliser la librairie lapack sous l'environnement arm ? Voici un exemple script.slurm (BigInt=32)

```
#!/bin/bash
#SBATCH -J script_art633
#SBATCH -N 1
#SBATCH -n 1
#SBATCH -c 80
#SBATCH --time=00:40:00

module purge
module load arm
module load acfl/22.1
module load armpl/22.1.0

export BINARY=test_LU_f
export SOURCE=test_LU_32
rm -f ${SOURCE}.o ${BINARY}

armflang -I$ARMPL_INCLUDES -Ofast -c -g -fopenmp ${SOURCE}.F90
ls ${SOURCE}.o

armflang -Ofast -g -fopenmp -o ${BINARY} ${SOURCE}.o -armpl_mp
ldd ./${BINARY}

export OMP_NUM_THREADS=${SLURM_CPUS_PER_TASK}

echo "OMP_NUM_THREADS=${OMP_NUM_THREADS}"
./${BINARY}
```

## Comment utiliser la librairie lapack sous l'environnement arm ? Voici un exemple script.slurm (BigInt=64)

```
#!/bin/bash
#SBATCH -J script_art633
#SBATCH -N 1
#SBATCH -n 1
#SBATCH -c 80
#SBATCH --time=00:40:00

module purge
module load arm
module load acfl/22.1
module load armpl/22.1.0

export BINARY=test_LU_f
#export SOURCE=test_LU-bckup
export SOURCE=test_LU_64
rm -f ${SOURCE}.o ${BINARY}

armflang -I$ARMPL_INCLUDES_ILP64_MP -Ofast -c -g -fopenmp ${SOURCE}.F90
ls ${SOURCE}.o

armflang -Ofast -g -fopenmp -o ${BINARY} ${SOURCE}.o -armpl=ilp64,parallel
ldd ./${BINARY}

export OMP_NUM_THREADS=${SLURM_CPUS_PER_TASK}

echo "OMP_NUM_THREADS=${OMP_NUM_THREADS}"
./${BINARY}
```
