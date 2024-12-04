# Slurm quickstart

Pour répartir les jobs des différents utilisateurs, Slurm est utilisé comme ordonnanceur. Voici un exemple de quelques commandes qui peuvent vous servir :

Pour vérifier mes jobs actuellement dans la queue :
```bash
squeue --me
```

Pour annuler un de mes jobs avec le job ID récupéré dans la commande `squeue`:
```bash
scancel JOBID
```

Pour vérifier à quelles QoS et quels Accounts j'ai accès :
```bash
sacctmgr show user user=$USER format="user%30,account%30,qos%60" withass
```

Exemple de script batch Slurm pour soumettre un job  :

```bash
#!/bin/bash

#SBATCH --job-name=myjob        # Name for your job
#SBATCH --comment="Run My Job"  # Comment for your job
#SBATCH --account="xxxxxx"      # The account to use

#SBATCH --output=%x_%j.out      # Output file
#SBATCH --error=%x_%j.err       # Error file

#SBATCH --time=0-00:05:00       # Time limit
#SBATCH --nodes=1               # How many nodes to run on
#SBATCH --ntasks=2              # How many tasks per node
#SBATCH --cpus-per-task=2       # Number of CPUs per task
#SBATCH --mem-per-cpu=10g       # Memory per CPU
#SBATCH --qos=short             # priority/quality of service

# Load specific module
module load gcc

# Command to run
hostname                        # Run the command hostname
```


Pour soumettre à Slurm le script batch :
```bash
sbatch myscript.slurm
```
