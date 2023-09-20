# Nvidia NGC catalog
NVIDIA NGC catalog provides a set of containerized environments (e.g. software development kits) you can use in deep learning, machine learning, and high-performance computing projects. Certain containers also include pre-trained models and HPC applications, optimized for running on Nvidia GPUs.

## Pull NGC containers with Apptainer
Pulling containers from NGC requires authentication. Trying to pull an image without an authentification token will result in the following error:
```sh
$> apptainer pull nvidia_hpc_benchmarks.sif docker://nvcr.io/nvidia/hpc-benchmarks:23.5

FATAL:   While making image from oci registry: error fetching image to cache: failed to get checksum for docker://nvcr.io/nvidia/hpc-benchmarks:23.5: reading manifest 23.5 in nvcr.io/nvidia/hpc-benchmarks: unauthorized: authentication required
```

To set up an authentification token follow the steps below:
1. Create an account at [https://ngc.nvidia.com](https://ngc.nvidia.com) or Sign In if you already have an account
2. Once logged in, generate an API key at [https://ngc.nvidia.com/setup](https://ngc.nvidia.com/setup)
3. Export the Apptainer environment variables. Execute the commands below after replacing `<API_key>` with your generated API key.
```sh
export APPTAINER_DOCKER_USERNAME='$oauthtoken'
export APPTAINER_DOCKER_PASSWORD=<API_key>
```

Now you are able to pull any NGC container. For example, you can build the `NVIDIA HPC-Benchmarks` which includes three benchmarks (HPL-NVIDIA, HPL-AI-NVIDIA and HPCG-NVIDIA) along with some GPU-optimized communication libraries:
```sh
apptainer pull nvidia_hpc_benchmarks.sif docker://nvcr.io/nvidia/hpc-benchmarks:23.5
```
