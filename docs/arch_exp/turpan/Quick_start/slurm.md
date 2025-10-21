---
title: SLURM
sidebar_position: 10
---

Slurm (Simple Linux Utility for Resource Management) est un ordonnanceur de tâches (job scheduler) utilisé dans les supercalculateurs pour gérer efficacement l’utilisation des ressources partagées entre plusieurs utilisateurs.

Il y a deux manières de lancer un job Slurm selon ses besoins : en mode batch (script) ou en mode interactif.
## **Mode batch - Script Directives**
C’est la méthode la plus courante pour soumettre un job. L’utilisateur écrit un script SLURM contenant les instructions et les ressources demandées, puis le soumet avec sbatch.

Créez votre script `script.slurm`. Incluez ces directives au début de votre script SLURM (script.slurm). Elles définiront les ressources vont être allouées, notamment le nombre de cœurs, de nœuds et le temps d'exécution. SLURM utilisera ces informations pour gérer les resource pour votre job.

Dans les commentaires (-J,N,n,t,p) , c'est une manière courte d'écrire quelques directives.
```
#!/bin/bash                         # Shebang obligatoire

# =========================== 
# Directives essentielles de SLURM
# 4 tâches par nœud pour 2 nœuds
# 4 * 2 = 8 tâches au total
# ===========================

#SBATCH --job-name=mon_projet       # Nom du job            (-J JobName)
#SBATCH --nodes=2                   # Nombre de nœuds       (-N 2)
#SBATCH --ntasks=8                  # Nombre de tâches      (-n 1)
#SBATCH --ntasks-per-node=4         # Tâches par nœude 
#SBATCH --cpus-per-task=1           # Nombre de cœurs CPU par tâche, threads
#SBATCH --time=01:00:00             # Limite de temps h:m:s (-t 01:00:00) 
#SBATCH --partition=small           # Nom de la partition   (-p small)
#SBATCH --gres=gpu:1                # Demander 1 GPU
#SBATCH --mem=4G                    # Mémoire par nœud


# ================================= 
# Directives optionnelles de SLURM 
# ================================= 

#SBATCH --mail-user=your_email@domain.com  # Où envoyer les mails en fonction des événements
#SBATCH --mail-type=END,FAIL        # Événements de mail (NONE, BEGIN, END, FAIL, ALL)
#SBATCH --output=output_%j.txt      # Sortie standard (%j se remplace par l’ID du job)
#SBATCH --error=error_%j.txt        # Error log
#SBATCH --nodelist=node01,node02    # Nœud spécifique, node01 (nom du nœud)
#SBATCH --exclude=nodename          # Exclure un nœud


# ================================= 
# Commandes d'exécution du job
# ================================= 
# Modules d'environnement : Charger les modules nécessaires avant d'exécuter votre application

module load gcc/9.3.0 
module load openmpi/4.0.3


# Exécuter votre programme
mpirun -np ${SLURM_NTASKS} ./mon_projet > results_job_${SLURM_JOBID}

```

### **Variables d'environnement SLURM courantes**

SLURM fournit plusieurs variables d'environnement qui peuvent être utilisées tout au long du script. Ces variables sont définies au début du script, ce qui permet de les modifier facilement sans avoir à mettre à jour plusieurs valeurs manuellement. Par exemple, la variable `SLURM_NTASKS` contient la valeur spécifiée dans `#SBATCH --ntasks`. Au lieu d'ajuster cette valeur manuellement dans tout le script, il suffit de la modifier en haut du fichier, et `SLURM_NTASKS` sera mis à jour partout.
- **`$SLURM_JOBID`**: ID du job
- **`$SLURM_JOB_NAME`**: Nom du job
- **`$SLURM_JOB_NODELIST`**: Liste des nœuds alloués
- **`$SLURM_NTASKS`**: Nombre total de tâches
- **`$SLURM_NTASKS_PER_NODE`** : Nombre de tâches par nœud
- **`$SLURM_CPUS_PER_TASK`**: Nombre de CPU par tâche (autrement dit, nombre de threads)
- **`$SLURM_JOB_NODELIST`** :  Liste des nœuds
```
mpirun -np 8 ./mon_projet  > results_job
=> mpirun -np ${SLURM_NTASKS} ./mon_projet > results_job_${SLURM_JOBID}
```


### **Commandes de base SLURM **

- **Soumettre un job**: `sbatch script.slurm`, cela lancera le travail et imprimera l'ID
- **Vérifier l'état d'un job**:`squeue --me`
- **Annuler un job**: `scancel <job_id>`
- **Voir les détails d'un job**: `scontrol show job <job_id>`
- **Consulter les informations des nœuds**: `sinfo`


## **Mode interactifs**
Pour les séances interactives :
```
`srun --ntasks=1 --cpus-per-task=4 --mem=8G --time=02:00:00 --partition=shared --pty /bin/bash`
```



## **Soumettre des jobs avec des dépendances**
Pour chaque job suivant, soumettez-le avec une dépendance à l'ID du job précédent. Cela garantit que chaque job ne démarre qu'une fois le précédent terminé avec succès.
```
#!/bin/bash

# Soumettre le premier job et capturer son ID
jobid1=$(sbatch --parsable job_script1.slurm)

# Soumettre le deuxième job avec une dépendance au premier job
jobid2=$(sbatch --parsable --dependency=afterok:$jobid1 job_script2.slurm)

# Soumettre le troisième job avec une dépendance au deuxième job
jobid3=$(sbatch --parsable --dependency=afterok:$jobid2 job_script3.slurm)

# Continuer ce schéma pour les jobs supplémentaires selon les besoins
```
### **Automatiser le processus pour plusieurs jobs**
```
#!/bin/bash

# Array des scripts de jobs à soumettre en séquence
job_scripts=("job_script1.slurm" "job_script2.slurm" "job_script3.slurm" "job_script4.slurm")

# Initialiser la variable d'ID du job précédent
prev_jobid=""

# Boucler à travers chaque script de job
for script in "${job_scripts[@]}"; do
    if [ -z "$prev_jobid" ]; then
        # Soumettre le premier job sans dépendance
        prev_jobid=$(sbatch --parsable "$script")
    else
        # Soumettre les jobs suivants avec une dépendance au job précédent
        prev_jobid=$(sbatch --parsable --dependency=afterok:$prev_jobid "$script")
    fi
done

```


