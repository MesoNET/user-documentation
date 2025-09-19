---
title: Lancer un calcul
sidebar_position: 4
---
# Lancer un calcul 

:::caution
Les calculs ne doivent jamais être exécutés sur les frontales de login mais sur les nœuds de calcul.
:::

Il n’y a pas d'espace scratch global sur la machine Hedy. Le disque local des nœuds, de technologie NVMe offre de bonnes performances en lecture/écriture et fait office de scratch. L’usage recommandé est de copier au début du job les données d’entrée sur le répertoire /tmp (si elles ne sont pas trop volumineuses) et, à l'issue de l'exécution du programme, de déplacer les résultats depuis /tmp vers le home. Cette étape est essentielle car toutes les données seront supprimées du nœud à la fin du job.

Hedy utilise l’ordonnanceur [Slurm]( https://slurm.schedmd.com/overview.html) qui assure l’ordonnancement et la planification des travaux de calcul. La soumission à Slurm des travaux de calcul se fait à partir d'un script shell ou en ligne de commande. 

## Soumission par script

Il faut écrire un script shell comportant les directives Slurm (#SBATCH) et les commandes appropriées. 

Exemple de script shell qui sollicite la réservation pour 24 heures de 2 GPUs GH100 et exécute le programme mon_programme.sh : 
```
#!/bin/bash
#SBATCH --job-name=mon_job_gpu
#SBATCH --account=b1001
#SBATCH --partition=gpu
#SBATCH --nodes=1
#SBATCH --gres=gpu:GH100:2 
#SBATCH --time=24:00:00 

# copie des données d’entrée sur le nœud alloué
mkdir /tmp/input
cp /home/user/.../* /tmp/input/.

# lancement du programme
~/soft/.../mon_progamme

# déplacement des résultats sur le home
mv /tmp/output/* /home/user/…/.
```
:::info
L'allocation des ressources est basée sur l'utilisation du GPU, on vous demande donc de NE PAS indiquer le nombre de cœurs CPU et la mémoire requise dans un Job car ces ressources seront allouées automatiquement, aussi efficacement que possible, en fonction du nombre de GPU (```CPU = nombre_de_GPUs * 16 cœurs``` , ```RAM = nombre_de_GPUs * 120000 MB```).
:::
Il suffit ensuite d'envoyer le script à Slurm par la commande sbatch qui le mettra en file d'attente.
```
sbatch mon_programme.sh
```

## Soumission en ligne de commande 

Il est possible d'utiliser directement sbatch en ligne de commande avec pour arguments les directives Slurm et le nom du programme. 
```
srun --job-name=mon_job_gpu --account=b1001 --partition=gpu --nodes=1 --gres=gpu:GH100:2 --time=24:00:00 mon_script.sh
```

## Ouverture d’une session interactive
Il est également possible d'accéder à une session interactive en précisant les ressources souhaitées. 

Par exemple : 
```
srun --job-name=mon_job_gpu --account=b1001 --partition=gpu --nodes=1 --gres=gpu:GH100:2 --time=24:00:00 --pty bash -i
```
Vous serez alors connecté sur un nœud et pourrez utiliser les commandes unix et lancer vos directement en ligne de commande.

## Pour aller plus loin
Quelques tutoriels sur Slurm sont disponibles [ici](../../HOWTO/slurm/slurm.md), la liste complète des directives Slum est disponible [ici]( https://slurm.schedmd.com/archive/slurm-24.05.5/sbatch.html#lbAG) et la documentation complète [ici]( https://slurm.schedmd.com/archive/slurm-24.05.5/).
