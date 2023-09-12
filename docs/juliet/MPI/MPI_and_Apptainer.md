# Apptainer and MPI implementations
There are two main ways of launching MPI applications with apptainer, known as `Hybrid` and `Bind` models. The `Hybrid` model involves the use of two MPI libraries: the MPI installed by the administrator on the host-side, and the MPI installed inside the container. Both libraries work in tandem work in tandem to instantiate the job. Hence, the MPI used to compile the application in the container must be compatible with the version of MPI available on the host. In the case of the `Bind` model, we mount the host MPI into the container, without installing any MPI library inside the container. The two models, along with their advantages and drawbacks are described in the [Apptainer User Guide](https://apptainer.org/docs/user/1.0/mpi.html).

:::caution

The present document is inteended to offer some particular examples for MesoNET supercomputer and should not be taken as an comprehensive User Guide. We encourage you to read and uderstand the [Apptainer Documentation](https://apptainer.org/docs/user/1.0/mpi.html) before proceeding.

:::

## Hybrid Model
The Apptainer documentation provides several useful examples for the `Hybrid` model. They can be directly used on the MesoNET supercomputers, without any additional configurations.


:::tip

On Slurm supercomputers, it is possible to avoid having two MPI installation instances. Indeed, by using `srun` we can launch containerized MPI applications without having any host-side MPI library. Thus we use exlusivly the MPI library that inside the container, launched with Slurm. 

:::
