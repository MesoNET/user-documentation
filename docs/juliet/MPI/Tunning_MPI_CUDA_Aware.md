# Tunning and testing CUDA-Aware MPI communication libraries
For testing the performance of a CUDA-Aware OpenMPI installation instance, we can use the well-known OSU benchmarks. We can also hand-tune the MPI runs via several UCX environment variables. Below we show some examples that highlight the impact of tunning options on the communication performance. 

## Building OSU Micro-Benchmarks

```sh
$ wget https://mvapich.cse.ohio-state.edu/download/mvapich/osu-micro-benchmarks-7.2.tar.gz
$ tar xfp osu-micro-benchmarks-7.2.tar.gz
$ cd osu-micro-benchmarks-7.2
$ ./configure CC=mpicc CXX=mpicxx --prefix=<prefix> --enable-cuda
$ make install
```

## Running OSU Micro-Benchmarks

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


### Tunning parameters explained

For all the runs above we need to specify the location of the gdrcopy library via `-x LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/apps/manual_install/gdrcopy/lib`. Without this option, the MPI library could not use gdrcopy, resulting in performance degradation. We also select the same Infiniband MCA for all our runs via `x UCX_NET_DEVICES=mlx5_0:1 `. This was done for reproducibility issues. To learn more about possible UCX options and manual tunning please visit the [OpenUCX website](https://openucx.readthedocs.io/en/master/faq.html?highlight=uct#working-with-gpu).
