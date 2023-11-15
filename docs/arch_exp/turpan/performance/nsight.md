---
title: NSIGHT
sidebar_position: 4
---


Pour utiliser nsys, c'est très simple.

D'abord, il faut aller sur le nœud de calcul pour générer un rapport avec votre application (nœud unique ou nœuds multiples).

Ensuite, il faut aller sur le TurboVNC ouvrez une interface graphique nsys pour visualiser votre rapport.

## Exemple de rapport simple nœud

```
#!/usr/bin/bash
#SBATCH -N 1
#SBATCH -n 16
#SBATCH --ntasks-per-node=16
#SBATCH --gres=gpu:2
#SBATCH --time=01:00:00
#SBATCH --mem=128G
#SBATCH -p small
#nvprofiling

module purge
module load amgx/nvidia/2.4.0-nvhpc231-system
module load dcgm/3.1.3-1
module list

workdir=$PWD/${SLURM_JOBID}
mkdir ${workdir}

cd ${workdir}
\cp -f ../{bul3.*,jcl,PCG.json} .
cp ../nsys.sh .
cp $0 .
maxit=4                                                                                                           

export CUDA_VISIBLE_DEVICES=0,1
export TEST_SYSTEM_PARAMS=1
export UCX_MEMTYPE_CACHE=n

export UCX_IB_GPU_DIRECT_RDMA=no
echo "UCX_IB_GPU_DIRECT_RDMA=${UCX_IB_GPU_DIRECT_RDMA}"
echo "LD_LIBRARY_PATH=$LD_LIBRARY_PATH"

#DCGM
nv-hostengine --pid nvhostengine.pid --log-filename nv-hostengine.log
#PCIe
dcgmi dmon -e 1009,1010 -c 200 > compteur.${SLURM_JOB_ID} &

clush -w ${SLURM_NODELIST} nvidia-cuda-mps-control -d
BIN=../my_application
ldd ${BIN}
nodeset -e ${SLURM_JOB_NODELIST} | tr ' ' '\n' > hostfile_${SLURM_JOBID}
nsys profile -t mpi,ucx,openmp,openacc,oshmem,cuda,opengl,nvtx,osrt -o report-mpirun-singlenode mpirun -hostfile ./hostfile_${SLURM_JOBID} -np ${SLURM_NTASKS} --map-by ppr:${SLURM_NTASKS_PER_NODE}:socket:PE=1 $BIN 2 2 4
clush -w ${SLURM_NODELIST}  echo quit | nvidia-cuda-mps-control

kill -9 $(cat nvhostengine.pid)
```


## Visualisation de rapport simple nœud

```
#Vous ouvrez un terminal sur le TurboVNC :

module load nvidia
module load nvhpc/23.1
cd /usr/local/arch-x86/nvidia/nvhpc/Linux_x86_64/23.1/profilers/Nsight_Systems/host-linux-x64/
./nsys-ui.vglrun.wrapper

#Vous visualisez un rapport sur une interface graphique nsys :

/tmpdir/jamal/Tests_Nsys/6147/report-mpirun-singlenode.nsys-rep
```
![Capture d'écran du formulaire d'engistrement dans le SSO Mesonet](/img/nsight.png)

