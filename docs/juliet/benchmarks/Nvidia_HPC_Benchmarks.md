# NVIDIA HPC-Benchmarks
Nvidia HPC-Benchmarks represent a collection of three classical benchmarks (HPL, HPL-AI, and HPCG) optimized for Nvidia accelerated systems. `HPL` and `HPL-AI` are both implementations of the well-known Linpack benchmark. The difference is that HPL solves a dense linear system in double precision (64 bits) arithmetic and HPL-AI in mixed precision arithmetic. Opting for mixed precision can drastically decrease the execution time. It can be useful for applications that can achieve desired results at lower floating-point precision formats (e.g. machine learning). `HPCG` is another well-known benchmark. It performs a fixed number of multigrid preconditioned conjugate gradient iterations using double-precision arithmetics.

NGC provides a container that includes the three benchmarks optimized for Nvidia GPU systems: `nvcr.io/nvidia/hpc-benchmarks:23.5`. The last one also contains some CUDA-Aware communication libraries like MPI, NCCL, or SHMEM.

## Running the benchmarks
Before proceeding to this section please make sure that you configured the NGC `<API_key>` for Apptainer see [Pull NGC containers with Apptainer](../Apptainer/Building_NGC_Containers.md) for details.

:::caution

Nvidia HPL implementation requires `gdrcopy` to be installed on the compute nodes. You can check if `gdrcopy` is loaded via the `lsmod | grep gdrdrv` comand. The last one need to be executed on the compute (there is no reason to have a GPU driver on login nodes). Feel free to perform this operation via slurm if needed: 

`srun -p mesonet -n 1 -w juliet3 lsmod | grep gdrdrv`

:::

### Pull the NCG container
```sh
apptainer pull nvidia_hpc_benchmarks.sif docker://nvcr.io/nvidia/hpc-benchmarks:23.5
```

### run NVIDIA HPL
```sh
 srun -p mesonet -N 1 -n 8 -c 14 -G 8 --cpu-bind=none --mpi=pmi2 apptainer exec --ipc --nv nvidia_hpc_benchmarks.sif /workspace/hpl.sh --dat /workspace/hpl-linux-x86_64/sample-dat/HPL-dgx-1N.dat
```

:::info

Inside the container, the `/workspace/hpl-linux-x86_64/sample-dat` directory includes several `.dat` input files (e.g. inputs suitable for 2,4 and 16 DGX nodes). Feel free to use the most appropriate ones for your benchmarking, or to build your own inputs. 

:::

### run NVIDIA HPL-AI
```sh
 srun -p mesonet -N 1 -n 8 -c 14 -G 8 --cpu-bind=none --mpi=pmi2 apptainer exec --nv --ipc nvidia_hpc_benchmarks.sif /workspace/hpl.sh --xhpl-ai --gpu-affinity 2:3:0:1:6:7:4:5 --mem-affinity 2:3:0:1:6:7:4:5 --dat /workspace/hpl-ai-linux-x86_64/sample-dat/HPL-dgx-1N.dat
```

:::info

The processor and memory affinities can drastically impact the performance of the `HPL-AI-NVIDIA` benchmark. Hence, you might need to hand-tune the CPU, GPU, and memory affinities via the `--cpu-affinity`, `--mem-affinity`, and `--gpu-affinity`. For more details see the [NGC catalog](https://catalog.ngc.nvidia.com/orgs/nvidia/containers/hpc-benchmarks)

:::

### run NVIDIA HPCG
```sh
srun -p mesonet -N 1 -n 8 -c 14 -G 8 --cpu-bind=none --mpi=pmi2 apptainer exec --nv --ipc nvidia_hpc_benchmarks.sif /workspace/hpcg.sh --nx 256 --ny 512 --nz 512 --rt 2
```

