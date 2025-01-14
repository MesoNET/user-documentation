---
title: NSIGHT
sidebar_position: 4
---


Pour utiliser nsys, c'est très simple.

D'abord, il faut aller sur le nœud de calcul pour générer un rapport avec votre application (nœud unique ou nœuds multiples).

Ensuite, il faut aller sur le TurboVNC ouvrez une interface graphique nsys pour visualiser votre rapport.

## Exemple de rapport simple nœud
La directive `#nvprofiling` est responsable de la configuration de l’environnement nécessaire pour NSIGHT.

```
#!/usr/bin/bash
#SBATCH -N 1 
#SBATCH -n 2 
#SBATCH --ntasks-per-node=2
#SBATCH --gres=gpu:2
#SBATCH --time=00:30:00
#SBATCH -p small 
#nvprofiling

module purge
module load nvidia 
module load nvhpc/22.9
module load amgx/nvidia/2.4.0-nvhpc231-system
module load dcgm/system
module list

workdir=RUN/${SLURM_JOBID}
mkdir ${workdir}
cd ../${workdir}/
cp $0 .

nodeset -e ${SLURM_JOB_NODELIST} | tr ' ' '\n' > hostfile_${SLURM_JOBID}

# Nsight profiling
nsys profile \
  -t mpi,ucx,openmp,openacc,oshmem,cuda,opengl,nvtx,osrt \
  -o report-mpirun-singlenode \
  mpirun -hostfile ./hostfile_${SLURM_JOBID} \
         -np ${SLURM_NTASKS} \
         --map-by ppr:${SLURM_NTASKS_PER_NODE}:socket:PE=2 \
         ./mon_projet
```


## Visualisation de rapport simple nœud
Connectez-vous sur Turpan par ssh [voir ici](../connexion/visu.md). Vous ouvrez un terminal sur le TurboVNC:
```
module load nvidia
module load nvhpc/23.1

cd /usr/local/arch-x86/nvidia/nvhpc/Linux_x86_64/23.1/profilers/Nsight_Systems/host-linux-x64/

./nsys-ui.vglrun.wrapper
```
Pour visualiser un rapport dans l'interface graphique de NSYS, utilisez la "open" dans Nsight pour ouvrir le fichier situé à : /tmpdir/username/mon_project/mon_project.nsys-rep.
![Capture d'écran du formulaire d'engistrement dans le SSO MesoNET](/img/turpan/nsight.png)

