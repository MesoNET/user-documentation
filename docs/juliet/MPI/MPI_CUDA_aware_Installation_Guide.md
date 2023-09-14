# Building a CUDA-aware Open MPI  library on an Infiniband cluster

Historically, on Infiniband clusters, Open MPI was built with the openib BTL support, enabled when Open MPI is configured --with-verbs. The openib BTL became deprecated in favor of the Unified Communication X (UCX) PML. Hence, the current documentation shows some guidelines on how to install a CUDA-Aware Open MPI library with UCX. Note that all the examples used in this document were run on juliet supercomputer. 

The building process includes two main steps:
1. Building UCX with GPU support (+ some GPU-specific module kernels)
2. Building OpenMPI with previously configured UCX

## Setting up and building UCX with GPU support

### GPU communication performance

Before building UCX, we might need to set up the GPUDirect RDMA technology, in order to improve the GPU communication performance. Prior to CUDA 11.4, GPUDirect RDMA technology was handled by the 
`nv_peer_memory` kernel developed by Mellanox. Starting with CUDA 11.4 there is a new kernel module called `nvidia-peermem` implemented by Nvidia. To note that `nv_peer_memory` became deprecated and should be replaced by `nvidia-peermem`. Please visit the [Nvidia website](https://docs.nvidia.com/cuda/gpudirect-rdma/) for more details.

Additionally, to optimize the intra-node GPU communication latency, UCX should be build with the `gdrcopy` support. The last one is a library based on the GPUDirect RDMA features. A data transfer performed with `gdrcopy` is driven by the CPU, and is meant to reduce the communication latency. This library is composed of a kernel module called `gdrdrv` and a API called `gdrapi`.

Hence, before building UCX please make sure that both `nvidia-peermem` and `gdrdrv` kernel modules are installed and loaded. 
```sh
$ lsmod | grep gdrdrv
$ lsmod | grep nvidia_peermem
```
If the kernel modules are not loaded please refer to the following resources for [installing gdrcopy](https://github.com/NVIDIA/gdrcopy) and/or for [loading nvidia-peermem](https://docs.nvidia.com/cuda/gpudirect-rdma/).

### Building UCX

Building UCX is typically a combination of running "configure" and "make". For GPU support we need to specify the cuda and gdrcopy install directories via the `--with-cuda` and `--with-gdrcopy` options of "configure". Below are the steps required to build and install UCX on juliet supercomputer. The latest release UCX tarball can be downloaded from the [UCX repository](https://github.com/openucx/ucx/releases). 

```sh
$ ./configure --prefix=<prefix_path> --with-cuda=/apps/spack/spack-softwares/linux-rocky9-zen3/gcc-13.1.0/cuda-12.1.1-hhxtp4y7d55t27jbbxwpjxc4t24tgi3h --with-gdrcopy=/apps/manual_install/gdrcopy
$ make -j8 install
```

Once the installation is completed, the information about the current UCX installation instance can be retrieved via the `ucx_info` command. For example, it is possible to check the UCX GPU support via the following command:
```sh
$ ucx_info -d | grep cuda
```

To obtain more information it is also possible to change the UCX log level: 
```sh
$ env UCX_LOG_LEVEL=debug ucx_info -d | grep -i cuda
```

## Setting up and building OpenMPI

 Below are the commands for building a CUDA-Aware OpenMPI library with Slurm support on juliet supercomputer. We need to specify the path to the UCX installation directory via the `--with-ucx` option and the path to cuda via `--with-cuda`. Additionally, we need to set the `--with-pmi` option for supporting slurm (i.e. running MPI application with srun). We also disable the btl openib via `--without-verbs` option. 

```sh
$ ./configure --prefix=<prefix_path> --with-ucx=<path_to_ucx_install> --with-cuda=/apps/spack/spack-softwares/linux-rocky9-zen3/gcc-13.1.0/cuda-12.1.1-hhxtp4y7d55t27jbbxwpjxc4t24tgi3h --with-pmi --without-verbs
make -j8 install
# Check that OpenMPI has been built with CUDA-aware support:
$ ompi_info --parsable --all | grep mpi_built_with_cuda_support:value
```

:::note
Recent OpenMPI versions contain a BTL component called `uct`, which might cause data corruption when building MPI with UCX. If needed, you can disable `uct` via the `--enable-mca-no-build=btl-uct` configuration option. More information about building MPI with UCX can be found [here](https://openucx.readthedocs.io/en/master/running.html).
:::


