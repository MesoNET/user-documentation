---
title: "For Gray Scott School attendants"
sidebar_position: 8
---
# Attend GrayScott school with Juliet

## Connect to juliet
You have received a login and password by e-mail. You may connect to juliet using these logins and password by typing in a command prompt (ex: PowerShell for windows)

```
ssh username@juliet.mesonet.fr
```

Then, enter your password when prompt. Your typing may not show on your terminal, this is intended.

## Access your classes

Most of the classes use apptainer containers. These containers are on the directory /projects/m25065/containers/

The file at path `/projects/m25065-students/container_list.txt` contains the association between a class and a container

## Connect to a compute node

### Do not compute on juliet1
`juliet1` on which you first connect is a login node, which is shared between all users and not made to run computations.

To be able to run the codes you must be on a compute node which is either `juliet2` `juliet3` or `juliet4`. In case of a doubt, type the command

``` hostname ```

to know where you are.

### Default process to access compute nodes
To connect to a compute node you will need to use slurm

By default you can run the command:

``` srun --partition=mesonet --account=m25065-students --time=10:00:00 --mem=64G -c 16 --pty /bin/bash ```

If you need a GPU, run the command 

``` srun --partition=mesonet --account=m25065-students --time=10:00:00 -c 16 --mem=64G --gres=gpu:1 --pty /bin/bash ```

Due to a technical issue, for your job to properly take GPUs into account you will need to enter this command as soon as you connect to a compute node

``` export CUDA_VISIBLE_DEVICES=$SLURM_JOB_GPUS ```

Both commands will open a terminal on a compute node.

### For podman users

While we mainly use apptainer, you can use podman on every container of the school if you know how to use it. You will need the adresse on the [Container List time table](https://cta-lapp.pages.in2p3.fr/cours/gray_scott_revolutions/grayscottrevolution/7-5161.html)

With a few exceptions containers have not been tested with podman so choose this option if you know what you are doing.

If you want to use podman use `salloc` instead of `srun`

``` salloc --partition=mesonet --account=m25065-students --time=10:00:00 --mem=64G ```

OR

``` salloc --partition=mesonet --account=m25065-students --time=10:00:00 --mem=64G --gres=gpu:1 ```

then

``` ssh julietX```

where julietX can be `juliet2`, `juliet3` or `juliet4`

**NOTE**: For the RUST classes, it is recommended to use this approach.


## Run the containers

To run the containers you can run the command

``` apptainer shell path/to/container.sif ```

Alternatively, you can run a bash script that will do it for you. Bash scripts for classes are available at

` bash /projects/m25065-students/scripts/ ` and have the same name as the container with .sh instead of .sif

** /!\ MAKE SURE YOU ARE CONNECTED TO A COMPUTE NODE BEFORE STARTING A CONTAINER OR A SCRIPT /!\ **