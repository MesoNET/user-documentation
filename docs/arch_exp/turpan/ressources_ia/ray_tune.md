# Ray Tune

Ray Tune is a scalable framework for hyperparameter optimization that makes it easy to run many training experiments in parallel. Each experiment, called a trial, trains a model using a different combination of hyperparameters such as the learning rate, batch size, number of layers, or optimizer settings. Instead of manually launching dozens of experiments one by one, Ray Tune automates this process and distributes the work across all available computational resources. 

One of the strengths of Ray Tune is its support for a wide range of modern optimization algorithms. Beyond simple random search or grid search, it can automatically adapt the sampling of hyperparameters using methods such as BOHB, HEBO, Optuna, Bayesian Optimization, HyperBand, or ASHA. These algorithms learn from the results of previous trials and focus the search on the most promising regions, allowing the model to converge to better hyperparameters with fewer total experiments.  

This document explains how to run Ray Tune on the Turpan cluster using SLURM scripts for two and eight GPUs. It also describes how to modify the hyperparameter configuration, how to switch between search algorithms, and how the training script dynamically builds the neural-network architecture based on the hyperparameters selected for each trial. Finally, it explains how to adapt the example to a models, such as transformer-based LLMs.

---
## Resources on This Page
- [Copying the Example Code](#copying-the-example-code)  
- [Directory Structure](#directory-structure)  
- [SLURM Job Script](#slurm-job-script-sbatch)  
- [Ray Tune Main Script](#ray-tune-main-script)  
- [Ray Tune Search Space](#ray-tune-search-space-modifiable)  
- [Dynamic MNIST Model](#dynamic-mnist-model)  
- [Modifying for LLM Experiments](#how-to-modify-the-model-for-llm-experiments)  
- [Running the Job](#running-the-job)  
- [Expected Scaling](#expected-scaling)  
- [Advanced Search Algorithms](#using-advanced-search-algorithms-bohb-hebo-optuna-bayesopt)  

---
## Copying the Example Code
All the example Ray Tune scripts and SLURM launchers are available on Turpan and can be copied directly from:
```bash
/work/shares/IA-Tests/ray_tune.tar.gz
```
To extract it in your directory:
```bash
tar xvf /work/shares/IA-Tests/ray_tune.tar.gz
```
This will create a directory called `ray_tune/`

## Directory Structure
After extracting, you will see:
```bash
ray_tune/
├── code_and_slurm-scripts
│   ├── mnist_ddp.py
│   ├── ray_tune.py
│   ├── run-ray_tune_on_2gpus_Turpan.sh
│   ├── run-ray_tune_on_8gpus_Turpan.sh
├── data
│   └── MNIST/               (downloaded MNIST dataset)
└── README.txt
```

### File descriptions

| File                              | Description                                                   |
|----------------------------------|---------------------------------------------------------------|
| `mnist_ddp.py`                   | Training script using PyTorch         |
| `ray_tune.py`                    | Ray Tune hyperparameter tuning script  |
| `run-ray_tune_on_2gpus_Turpan.sh` | SLURM script to run Ray Tune on 2 GPUs.                       |
| `run-ray_tune_on_8gpus_Turpan.sh` | SLURM script to run Ray Tune on 8 GPUs.                       |
| `data/MNIST`                     | MNIST dataset (downloaded automatically if missing).         |
| `README.txt`                     | Instructions and notes.                                      |

The file to be changed to add your trainning is mnist_ddp.py


## SLURM Job Script (sbatch)
Below is the job file used to launch Ray Tune on **4 nodes**, each with **2 GPUs**, using `srun` + `apptainer`.

```bash
#!/bin/bash
#SBATCH --job-name=benchmark
#SBATCH -N 4
#SBATCH --ntasks=4
#SBATCH --cpus-per-task=40
#SBATCH --mem=100G
#SBATCH --time=40
#SBATCH --gres=gpu:2

srun apptainer exec --bind /tmpdir,/work --nv /work/conteneurs/sessions-interactives/pytorch-24.02-py3-calmip-si.sif python3 ray_tune.py
```

### Key Concepts  
- **1 Ray trial = 1 process launched by Ray**  
- `--ntasks=4` = `-N 4` ⇒ 4 Ray workers  
- Each worker sees **2 GPUs** because of `--gres=gpu:2`  
- Ray automatically detects all the GPUs in the reservation via `ray.cluster_resources()`  
- Trials run **in parallel** as long as there are free GPUs

---

## Ray Tune Main Script
`ray_tune.py` launches Ray, defines the search space, scheduler, and submits trials.

Key parts:

### Initialize Ray in SLURM
Ray is launched locally inside the job:

```python
ray.init(
    num_cpus=max(1, int(os.environ.get("SLURM_CPUS_PER_TASK", "40"))),
    include_dashboard=False,
    _system_config={"enable_metrics_collection": False}
)
```

### Resource Assignment  
Each trial uses:

```python
tune.with_resources(original_main, resources={"cpu": 4, "gpu": 1})
```

This means:
- Each trial uses **1 GPU**
- The cluster nodes have 2 GPUs → **2 parallel trials per node**
- With 4 nodes → **8 parallel trials total**

GPUs per trial can be changed but at that time trainning the code needs to use `DistributedDataParallel` or other method to perform data parallelism:

```python
resources={"gpu": 2}
```

---

## Ray Tune Search Space (modifiable)
Example used in your test:

```python
config = {
    "lr": tune.loguniform(1e-5, 5e-3),
    "batch_size": tune.choice([16, 32, 64, 128]),
    "optimizer": tune.choice(["adam", "sgd", "adamw"]),
    "weight_decay": tune.uniform(0.0, 0.1),

    "conv1_channels": tune.choice([8, 16, 32, 64]),
    "conv2_channels": tune.choice([16, 32, 64, 128]),
    "conv3_channels": tune.choice([0, 16, 32, 64, 128]),

    "kernel1": tune.choice([3, 5, 7]),
    "kernel2": tune.choice([3, 5, 7]),
    "kernel3": tune.choice([3, 5, 7]),

    "activation": tune.choice(["relu", "gelu", "silu"]),
    "dropout": tune.uniform(0.0, 0.5),

    "fc_dim": tune.choice([64, 128, 256, 512]),

    "scheduler": tune.choice(["none", "cosine", "step", "onecycle"]),
    "step_size": tune.choice([10, 20, 30]),
    "gamma": tune.uniform(0.1, 0.9),

    "epochs": tune.choice([2, 3, 5]),
    "num_classes": 10,
}
```

💡 Modify these values to expand or reduce the search space.

---

### How Ray collects results:
Each epoch:

```python
tune.report({"loss": loss_sum / len(train_loader)})
```

To check the output:
```python
cat slurm-<JOBID>.out
```

---

## Dynamic MNIST Model
Inside `mnist_ddp.py`, the model is built dynamically from the configuration.

Example:

```python
self.layer1 = nn.Sequential(
    nn.Conv2d(1, config["conv1_channels"], config["kernel1"], padding=config["kernel1"]//2),
    nn.BatchNorm2d(config["conv1_channels"]),
    nn.ReLU(),
    nn.MaxPool2d(2)
)
```

This allows:
- adding/removing layers  
- testing different widths  
- changing activations  
- using dropout  
- changing kernel sizes  

Everything is done **automatically per-trial**.



---

## How to Modify the Model for LLM Experiments
If you switch from MNIST → T5 (5B model), just replace the model code:

```python
from transformers import T5Config, T5ForConditionalGeneration

config_llm = T5Config(
    d_model=config["hidden_size"],
    num_heads=config["num_heads"],
    num_layers=config["num_layers"]
)

model = T5ForConditionalGeneration(config_llm)
```

Define hyperparameters in the Ray config, example:

```python
"hidden_size": tune.choice([512, 768, 1024]),
"num_heads": tune.choice([8, 12, 16]),
"num_layers": tune.choice([4, 8, 12]),
```

And remove MNIST parts.

---

## Running the Job
Submit example for 2 GPUs:

```bash
sbatch run-ray_tune_on_2gpus_Turpan.sh
```

Submit example for 8 GPUs:

```bash
sbatch run-ray_tune_on_8gpus_Turpan.sh
```

To check that the code is running:
```bash
squeue --me
```
To check that the GPUs are being used (it is a screen shot of the resources):
```bash
placement --checkme
```


---

## Expected Scaling
If you keep:

```
resources={"gpu": 1}
num_samples=8
```

Then:
- 1 node = 2 GPUs = 2 parallel trials
- 4 nodes = 8 GPUs = 8 parallel trials → all trials run simultaneously  
- Runtime ≈ equal to training time of **one** model

If you set:

`num_samples` should be equal or greater than the number of GPUs.

---

## Using Advanced Search Algorithms (BOHB, HEBO, Optuna, BayesOpt)

Ray Tune allows you to replace the default random search with more advanced hyperparameter optimization (HPO) algorithms that adaptively select new trials based on previous results.

These algorithms are enabled by adding a search algorithm to tune.Tuner() via the argument search_alg=.

### Example: Adding a search algorithm

```
from ray import tune
from ray.tune.search.bohb import TuneBOHB
from ray.tune.search.optuna import OptunaSearch
from ray.tune.search.hebo import HEBOSearch
from ray.tune.search.bayesopt import BayesOptSearch

search_alg = OptunaSearch()  # <-- select one algo here

tuner = tune.Tuner(
    train_fn,
    param_space=config,
    tune_config=tune.TuneConfig(
        metric="loss",
        mode="min",
        num_samples=50,        # how many trials total
        search_alg=search_alg, # <-- your optimizer
        max_concurrent_trials=8,  # how many trials run in parallel (e.g., number of GPUs)
    ),
)
tuner.fit()
```


---



