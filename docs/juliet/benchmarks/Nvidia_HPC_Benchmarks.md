# NVIDIA HPC-Benchmarks
Nvidia HPC-Benchmarks represent a collection of three classical benchmarks (HPL, HPL-AI, and HPCG) optimized for Nvidia accelerated systems. `HPL` and `HPL-AI` are both implementations of the well-known Linpack benchmark. The difference is that HPL solves a dense linear system in double precision (64 bits) arithmetic and HPL-AI in mixed precision arithmetic. Opting for mixed precision can drastically decrease the execution time. It can be useful for applications that can achieve desired results at lower floating-point precision formats (e.g. machine learning). `HPCG` is another well-known benchmark. It performs a fixed number of multigrid preconditioned conjugate gradient iterations using double-precision arithmetics.

NGC provides a container that includes the three benchmarks optimized for Nvidia GPU systems: `nvcr.io/nvidia/hpc-benchmarks:23.5`. The last one also contains some CUDA-Aware communication libraries like MPI, NCCL, or SHMEM.

## Running the benchmarks
Before proceeding to this section please make sure that you configured the NGC `<API_key>` for Apptainer see [Pull NGC containers with Apptainer](../Apptainer/Building_NGC_Containers.md) for details.

:::caution

Nvidia HPL implementation requires `gdrcopy` to be installed on the compute nodes. You can check if `gdrcopy` is loaded via the `lsmod | grep gdrdrv` command. The last one needs to be executed on the compute nodes (there is no reason to have a GPU driver on login nodes). Feel free to perform this operation via slurm if needed: 

`srun -p mesonet -n 1 -w juliet3 lsmod | grep gdrdrv`

:::

### Pull the NCG container
```sh
apptainer pull nvidia_hpc_benchmarks.sif docker://nvcr.io/nvidia/hpc-benchmarks:23.5
```

### run NVIDIA HPL
```sh
 srun -p mesonet -N 1 -n 8 -c 14 -G 8 --cpu-bind=none --mpi=pmi2 apptainer exec --nv nvidia_hpc_benchmarks.sif /workspace/hpl.sh --dat /workspace/hpl-linux-x86_64/sample-dat/HPL-dgx-1N.dat --ucx-tls ^cma
```

:::info

Inside the container, the `/workspace/hpl-linux-x86_64/sample-dat` directory includes several `.dat` input files (e.g. inputs suitable for 2,4 and 16 DGX nodes). Feel free to use the most appropriate ones for your benchmarking, or to build your own inputs. 

:::

### run NVIDIA HPL-AI
```sh
 srun -p mesonet -N 1 -n 8 -c 14 -G 8 --cpu-bind=none --mpi=pmi2 apptainer exec --nv nvidia_hpc_benchmarks.sif /workspace/hpl.sh --xhpl-ai --gpu-affinity 2:3:0:1:6:7:4:5 --mem-affinity 2:3:0:1:6:7:4:5 --dat /workspace/hpl-ai-linux-x86_64/sample-dat/HPL-dgx-1N.dat --ucx-tls ^cma
```

:::info

The processor and memory affinities can drastically impact the performance of the `HPL-AI-NVIDIA` benchmark. Hence, you might need to hand-tune the CPU, GPU, and memory affinities via the `--cpu-affinity`, `--mem-affinity`, and `--gpu-affinity`. For more details see the [NGC catalog](https://catalog.ngc.nvidia.com/orgs/nvidia/containers/hpc-benchmarks)

:::

### run NVIDIA HPCG
```sh
srun -p mesonet -N 1 -n 8 -c 14 -G 8 --cpu-bind=none --mpi=pmi2 apptainer exec --nv nvidia_hpc_benchmarks.sif /workspace/hpcg.sh --nx 256 --ny 256 --nz 256 --rt 2 --ucx-tls ^cma
```

:::warning

There is a known issue when running HPC-X with Apptainer. It fails because of the `cma` shared memory fabric support. Hence, for all our runs we disable the `cma` via the `--ucx-tls` command line argument. You can also disable it via the `UCX_TLS` environment variable (i.e. `export UCX_TLS=^cma`). More details about this issue can be found in the [Workaround for Communication Issue with MPI Apps & Apptainer report](https://ciq.com/blog/workaround-for-communication-issue-with-mpi-apps-apptainer-without-setuid/).

:::
