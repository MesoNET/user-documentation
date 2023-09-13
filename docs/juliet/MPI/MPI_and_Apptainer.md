# Apptainer and MPI implementations
There are two main ways of launching MPI applications with apptainer, known as `Hybrid` and `Bind` models. The `Hybrid` model involves the use of two MPI libraries: the MPI installed by the administrator on the host-side, and the MPI installed inside the container. Both libraries work in tandem to instantiate the job. Hence, the MPI used to compile the application in the container must be compatible with the version of MPI available on the host. In the case of the `Bind` model, we mount the host MPI into the container, without having any MPI library inside the container. The two models, along with their advantages and drawbacks are described in the [Apptainer User Guide](https://apptainer.org/docs/user/1.0/mpi.html).

:::caution

The present document is intended to offer some examples and tips for MesoNET supercomputers and should not be taken as a comprehensive User Guide. We encourage you to read and understand the [Apptainer Documentation](https://apptainer.org/docs/user/1.0/mpi.html) before proceeding.

:::

## Hybrid Model
The Apptainer documentation provides several useful examples for the `Hybrid` model, which can be directly used on the MesoNET supercomputers (i.e. without any additional configurations). Hence 


:::tip

On Slurm supercomputers, it is possible to avoid having two MPI installation instances. Indeed, by using `srun` it is possible to launch containerized MPI applications without having any host-side MPI library. In this case, you totally rely on the MPI library that is inside the container. See examples in [NVIDIA HPC-Benchmarks](../benchmarks/Nvidia_HPC_Benchmarks.md).

:::

## Bind Model 
By default, Apptainer automatically mounts several bind points: `$HOME`, `/sys`, `/proc`, `/tmp`, etc. Meaning that you will have access to these points inside the container. These bindings depend on the system configuration and can be different from one machine to another. For more details please visit the (Apptainer Bind Paths and Mounts Documentation)[https://apptainer.org/docs/user/main/bind_paths_and_mounts.html]. 

Hence, in order to use the host-side MPI library, we need to identify its location, and mount/bind it into the container. Below we provide an example of an Aptainer (Definition File)[https://apptainer.org/docs/user/main/definition_files.html] where we use the host-side MPI implementation to install the well-known (OSU Micro-Benchmarks)[https://mvapich.cse.ohio-state.edu/benchmarks/] inside the container. Then, we run MPI applications inside the container by specifying the installation path to the host-side MPI library via the Apptainer `--bind` option. 

:::caution

This example is based on an NGC container. Before proceeding, please make sure that you (configured the NGC Catalog <API_key>)[../Apptainer/Building_NGC_Containers.md].

:::

On juliet supercomputer, there is a CUDA-Aware MPI library installed in `/apps/manual_install/openmpi/4.1.5`. This location does not correspond to a path that is mounted by default. Hence, we need to manually specify this location when building the container. Also, since we have a CUDA-Aware communication library, we need CUDA to be installed inside the container. For this, we create a definition file called `apptainer_mpi_cuda.sif` based on an existing container called `nvcr.io/nvidia/cuda:12.2.0-devel-rockylinux9` from the NGC Catalog, which already 
has CUDA installed. Below is the content of the definition file.

```sh

Bootstrap: docker
From: nvcr.io/nvidia/cuda:12.2.0-devel-rockylinux9

%setup
        mkdir -p $APPTAINER_ROOTFS/openmpi/4.1.5
        mkdir -p $APPTAINER_ROOTFS/bin_host
        mkdir -p $APPTAINER_ROOTFS/lib64_host

%environment
        export PATH="$PATH:/usr/bin_host:/apps/manual_install/openmpi/4.1.5/bin"
        export LD_LIBRARY_PATH="$LD_LIBRARY_PATH:/usr/lib64_host:/apps/manual_install/openmpi/4.1.5/lib"

%post
        dnf install -y wget gcc g++
        # relocate MPI installation directory (bind mode)
        export OPAL_PREFIX="/openmpi/4.1.5"
        export PATH="$PATH:/bin_host:/openmpi/4.1.5/bin"
        export LD_LIBRARY_PATH="$LD_LIBRARY_PATH:/lib64_host:/openmpi/4.1.5/lib"
        # install OSU MPI benchmarks
        mkdir /root/network_benchmarking && cd $_
        wget https://mvapich.cse.ohio-state.edu/download/mvapich/osu-micro-benchmarks-7.2.tar.gz
        tar -xf osu-micro-benchmarks-7.2.tar.gz && rm osu-micro-benchmarks-7.2.tar.gz
        cd osu-micro-benchmarks-7.2
        ./configure CC=/openmpi/4.1.5/bin/mpicc CXX=/openmpi/4.1.5/bin/mpicxx --enable-cuda --with-cuda-include=/usr/local/cuda-12.2/include --with-cuda-libpath=/usr/local/cuda-12.2/lib64
        make
```

Build the container on juliet:
```sh
$> export JULIET_MPI_BINDING=/apps/manual_install/openmpi/4.1.5:/openmpi/4.1.5,/usr/bin:/bin_host,/usr/lib64:/lib64_host
$> apptainer build --nv --bind $JULIET_MPI_BINDING apptainer_mpi_cuda.sif apptainer_mpi_cuda.def
```

Run the container on juliet:
```sh
Run the container on juliet:
export JULIET_MPI_BINDING=/apps/manual_install/openmpi/4.1.5:/openmpi/4.1.5,/usr/bin:/bin_host,/usr/lib64:/lib64_host
$> apptainer shell --nv --bind $JULIET_MPI_BINDING apptainer_mpi_cuda.sif
```

:::info

The juliet MPI instance depends on the hwloc library, which is located in `/usr` directory. Hence we also need to bind the `/usr/bin` and `/usr/lib` directories.

:::
