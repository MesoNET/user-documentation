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

## OpenMPI performance tests

For testing the performance of a CUDA-Aware OpenMPI installation instance, one can use the well-known OSU benchmarks. 

### Building OSU Micro-Benchmarks

```sh
$ wget https://mvapich.cse.ohio-state.edu/download/mvapich/osu-micro-benchmarks-7.2.tar.gz
$ tar xfp osu-micro-benchmarks-7.2.tar.gz
$ cd osu-micro-benchmarks-7.2
$ ./configure CC=mpicc CXX=mpicxx --prefix=<prefix> --enable-cuda
$ make install
```

### Running OSU Micro-Benchmarks

By default, UCX tries to use all available devices on the machine and selects the best ones based on performance characteristics. One can also use manual tunning in order to force the use of certain devices or technologies.

For example, we can enable or disable the use of GPUDirect RDMA optimization (available through the `nvidia-peermem` kernel) and enable or disable the use of gdrcopy (i.e. use of the `gdrdrv` kernel). Below are a few examples.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import GDROptSvg from './gdr_impact.svg';

<Tabs>
  <TabItem value="perf_graph" label="Performance graph" default>
    <GDROptSvg/>
  </TabItem>
  <TabItem value="rdma1_gdr1" label="GPUDirect RDMA and gdrcopy" default>
    Both GPUDirect RDMA and gdrcopy enabled (Device to Device)

    $ mpirun -H juliet3,juliet4 -x LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/apps/manual_install/gdrcopy/lib -x UCX_IB_GPU_DIRECT_RDMA=1 -x UCX_TLS=all -x UCX_NET_DEVICES=mlx5_0:1 -np 2 c/mpi/pt2pt/standard/osu_latency -d cuda D D
    # OSU MPI-CUDA Latency Test v7.2
    # Send Buffer on DEVICE (D) and Receive Buffer on DEVICE (D)
    # Size          Latency (us)
    # Datatype: MPI_CHAR.
    1                       4.06
    2                       4.26
    4                       4.33
    8                       4.22
    16                      4.23
    32                      4.37
    64                      4.45
    128                     4.59
    256                     4.54
    512                     4.88
    1024                    4.89
    2048                    4.93
    4096                    5.57
    8192                    6.20
    16384                   9.02
    32768                  12.15
    65536                  18.42
    131072                 31.48
    262144                 56.07
    524288                 43.67
    1048576                74.08
    2097152               145.56
    4194304               281.57
    ```

  </TabItem>
  <TabItem value="rdma1_gdr0" label="GPUDirect RDMA only">
    GPUDirect RDMA enabled and gdrcopy disabled (Device to Device)

    $ mpirun -H juliet3,juliet4 -x LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/apps/manual_install/gdrcopy/lib -x UCX_IB_GPU_DIRECT_RDMA=1 -x UCX_TLS=^gdr_copy -x UCX_NET_DEVICES=mlx5_0:1 -np 2 c/mpi/pt2pt/standard/osu_latency -d cuda D D
    # OSU MPI-CUDA Latency Test v7.2
    # Send Buffer on DEVICE (D) and Receive Buffer on DEVICE (D)
    # Size          Latency (us)
    # Datatype: MPI_CHAR.
    1                      94.54
    2                     129.68
    4                     220.87
    8                     181.06
    16                    178.25
    32                    142.65
    64                     40.02
    128                    45.58
    256                    42.28
    512                    39.08
    1024                   41.72
    2048                   47.23
    4096                   47.46
    8192                   49.56
    16384                  48.52
    32768                 176.01
    65536                 284.82
    131072                238.62
    262144                343.78
    524288                 38.15
    1048576                70.01
    2097152               133.14
    4194304               264.97
  </TabItem>
  <TabItem value="rdma0_gdr1" label="gdrcopy only">
    GPUDirect RDMA disabled and gdrcopy enabled (Device to Device)

    $ mpirun -H juliet3,juliet4 -x LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/apps/manual_install/gdrcopy/lib -x UCX_IB_GPU_DIRECT_RDMA=0 -x UCX_TLS=all -x UCX_NET_DEVICES=mlx5_0:1 -np 2 c/mpi/pt2pt/standard/osu_latency -d cuda D D
    # OSU MPI-CUDA Latency Test v7.2
    # Send Buffer on DEVICE (D) and Receive Buffer on DEVICE (D)
    # Size          Latency (us)
    # Datatype: MPI_CHAR.
    1                       4.32
    2                       5.75
    4                       5.71
    8                       5.64
    16                      4.86
    32                      5.23
    64                      6.57
    128                     5.68
    256                     7.22
    512                     8.51
    1024                   10.48
    2048                   14.39
    4096                   25.10
    8192                   45.75
    16384                  97.11
    32768                 752.08
    65536                 994.36
    131072               1725.03
    262144               3549.30
    524288                109.51
    1048576               166.81
    2097152               268.49
    4194304               443.22
  </TabItem>
  <TabItem value="rdma0_gdr0" label="no GDR optimization">
    Both GPUDirect RDMA and gdrcopy disabled (Device to Device)

    $ mpirun -H juliet3,juliet4 -x LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/apps/manual_install/gdrcopy/lib -x UCX_IB_GPU_DIRECT_RDMA=0 -x UCX_TLS=^gdr_copy -x UCX_NET_DEVICES=mlx5_0:1 -np 2 c/mpi/pt2pt/standard/osu_latency -d cuda D D
    # OSU MPI-CUDA Latency Test v7.2
    # Send Buffer on DEVICE (D) and Receive Buffer on DEVICE (D)
    # Size          Latency (us)
    # Datatype: MPI_CHAR.
    1                      24.92
    2                      25.12
    4                      51.83
    8                     122.11
    16                    230.41
    32                    167.57
    64                    217.15
    128                   305.34
    256                   315.44
    512                   245.43
    1024                  252.01
    2048                  294.08
    4096                  138.61
    8192                  220.35
    16384                 672.99
    32768                1189.99
    65536                1197.14
    131072               1714.11
    262144                928.49
    524288                101.82
    1048576               161.01
    2097152               251.90
    4194304               432.20
  </TabItem>
</Tabs>





#### Manual tunning parameters

For all the runs above we need to specify the location of the gdrcopy library via `-x LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/apps/manual_install/gdrcopy/lib`. Without this option, the MPI library could not use gdrcopy, resulting in performance degradation. We also select the same Infiniband MCA for all our runs via `x UCX_NET_DEVICES=mlx5_0:1 `. This was done for reproducibility issues. To learn more about possible UCX options and manual tunning please visit the [OpenUCX website](https://openucx.readthedocs.io/en/master/faq.html?highlight=uct#working-with-gpu).

