---
title: Lancer un calcul
sidebar_position: 3
---
# Lancer un calcul 

**Les calculs ne doivent jamais être exécutés sur les frontales de loggin mais sur les nœuds de calcul.**

Il n’y a pas d'espace scratch sur la machine Hedy. C'est le disque local des nœuds, de technologie NVMe offrant de bonnes performances en lecture/écriture qui fait office de scratch. L’usage recommandé est donc de copier les données d’entrée sur le répertoire /tmp au début du job (si elles ne sont pas trop volumineuses) et, à l'issue de l'exécution du programme, de déplacer les résultats depuis /tmp vers le home. Cette étape est essentielle car toutes les données seront supprimées du nœud à la fin du job.

Hedy utilise l’ordonnanceur [slurm]( https://slurm.schedmd.com/overview.html) qui assure l’ordonnancement et la planification des travaux. La soumission des jobs à Slurm se fait à partir d'un script shell ou en ligne de commande. 

# Soumission par script

Il faut écrire un script shell comportant les directives Slurm (#SBATCH) et les commandes appropriées. 

Exemple de script shell qui sollicite la réservation pour 24 heures de 2 GPUs GH100, 16 CPUs et exécute le programme mon_programme : 
```
#!/bin/bash
#SBATCH --job-name=mon_job_gpu
#SBATCH --account=b1001
#SBATCH --partition=gpu
#SBATCH --nodes=1
#SBATCH --gres=gpu:GH100:2 
#SBATCH --cpus-per-gpu=8
#SBATCH --time=24:00:00 

# copie des données d’entrée sur le nœud alloué
mkdir /tmp/input
cp /home/user/.../* /tmp/input/.

# lancement du programme
~/soft/.../mon_progamme

# déplacement des résultats sur le home
mv /tmp/output/* /home/user/…/.
```
Il suffit ensuite d'envoyer le script à Slurm par la commande qui le mettra en file d'attente.
```
sbatch mon_programme.sh
```

# Soumission par ligne de commande 



# Ouverture d’une session interactive
Il est également possible d'accéder à une session La commande pour ouvrir une session en mode interactif :
```
srun  --pty bash -i
```
Vous serez alors connecté sur un nœud en utilisant les critères de connexion par défaut. Il est recommandé de préciser les options à appliquer à la session, par exemple le numéro de projet (--account), la durée de session --time), le nombre de ressources GPU (--gres), le nombre de cœurs (--ntasks-per-node).

La liste complète des directives Slum est disponible [ici]( https://slurm.schedmd.com/archive/slurm-24.05.5/sbatch.html#lbAG).
La documentation de SLURM est [ici]( https://slurm.schedmd.com/archive/slurm-24.05.5/)



# Prise en main rapide de SLURM

Le principe d'un gestionnaire de ressources est de vous réserver des cœurs de calcul en fonction de vos besoins. **SLURM** est le gestionnaire installée sur **Vesta**.

Vous interagissez avec le gestionnaire de ressources par les commandes suivantes :

* **sbatch** : soumission d'un job dans une file d'attente (appelées partitions dans Slurm) ;
* **scancel** : suppression d'un job ;
* **squeue** : interrogation des jobs ;
* **scontrol** : interrogation détaillée d'un job ou d'une partition ;
* **sinfo** : interrogation des files d'attente ;
* **srun** : exécution immédiate d'une commande ;
* **salloc** : batch interactif, obtention d'un shell, permettant d'enchaîner plusieurs commandes sur les mêmes ressources ;
* **sprio** : priorités relatives entre les jobs en attente.

Une documentation des commandes de base est disponible ici : [http://slurm.schedmd.com/man_index.html](http://slurm.schedmd.com/man_index.html)

## Les partitions

Les différents nœuds de calcul sont regroupés en fonction de différents critères dans des partitions.  
 Lors de la soumission d'un job, il faut choisir une partition.  
Le cluster Vesta ne possède pour le moment qu'une parition nommé **mesonet** qui sera utilisée par défaut pour tous les jobs. Cette parition possède une limite de temps de **24 heures** par job. Cette limite est amenée à évoluer au cours du temps.

## Lancement d'un job

Pour lancer un job, il faut créer un script dans lequel il faut demander des ressources puis appeler son programme (voir les exemples plus loin).

Ce script est ensuite soumi au gestionnaire de file d'attente avec la commande **sbatch**. Par exemple :

```console
sbatch mon_script
```

On obtient alors un numéro de job, qui peut être manipulé avec les commandes scancel, squeue ou scontrol.

Le script peut être écrit dans le langage de son choix (bash, zsh, tcsh, python, perl...). Il peut être exécuté directement, sans être appelé par sbatch, et dans ce cas, les directives d'allocations de ressources seront ignorées, et il s'exécutera dans le shell local.

Par défaut, la sortie standard du job (ce qui doit normalement s'afficher sur l'écran lorsque vous exécutez votre programme) sera écrit dans le fichier **slurm-jobid.out**, avec jobid égal au numéro de job.

Voici un exemple d'un script de soumission demandant 2 nœuds de calcul avec chacun 10 GPUs :

```console
#! /bin/bash

#SBATCH -p mesonet      # Partition public avec des GPU
#SBATCH -A account      # Cet account vous sera fourni à la création de votre projet
#SBATCH -N 2-2          # 2 nœud
#SBATCH --gres=gpu:10   # 10 GPU par nœud

./mon_code_gpu
```

# Pour aller plus loin
## Demande de ressources

Vos besoins en terme de ressources sont décrits dans l'en-tête d'un fichier via des directives Slurm. Par exemple :

```console
#SBATCH -N 2
```

demandera une allocation de 2 nœuds.

D'autres critères peuvent être spécifié via ces directives, comme la taille mémoire souhaitée ou la durée pendant laquelle les ressources seront attribuées.

En règle générale, plus on sera **parcimonieux dans la demande d'allocation**, plus on aura de chance de voir rapidement son job passer de l'état en attente à l'état en exécution.

Par exemple, s'il est possible d'estimer précisément la durée nécessaire à une exécution, il peut être profitable de réduire au minimum la durée demandée pour la réservation. Ainsi une exécution se faisant en 3h30 pourra se faire au sein d'un job demandant 4h00 (marge de 30mn par précaution), avec la directive suivante :

```console
#SBATCH -t 04:00:00
```

Attention toutefois à prendre une marge suffisante, car au-delà du temps demandé, l'exécution est stoppée automatiquement par Slurm.

Attention : toutes les partitions sont configurées avec une limite de temps d'exécution par défaut, qui s'applique à tout job ne précisant pas combien de temps doit lui être alloué. Pour connaître cette limite, utiliser la commande suivante :

```
sinfo -l
```

Remarque : tous les arguments de la directive #SBATCH peuvent également être utilisés en arguments des commandes srun, salloc et sbatch. Voir les exemples plus loin.

## Quelques directives utiles

* **-p** : partition à utiliser pour le job
* **-A** : compte Slurm à utiliser (il vous est fourni pour chaque projet)
* **-N** : nombre de nœuds (min - max)
* **-n** : nombre de tâches (1 par nœud par défaut)
* **--cpus-per-task** : nombre de cœurs par tâche
* **--tasks-per-node=** : nombre de tâches par nœud
* **-t J-HH:MM:SS** : temps alloué du job, avant qu'il ne soit stoppé (par défaut, celui de la partition; voir sinfo -l)
* **--gres=gpu:N** : nombre de GPU par nœud (N de 1 à 10)
* **--mail-type=END** : envoyer un mail à la fin du job (BEGIN pour en recevoir un au lancement. ALL pour en recevoir un à chaque étape)
* **--mail-user=mon@adresse** : adresse mail à utiliser
* **--mem=0000M** : mémoire par nœud en Mo (pour le dire en Go, remplacer M par G)
* **-o fichier_sortie** : le fichier de sortie du job

Vous trouverez une liste exhaustive sur le site de Slurm : [https://slurm.schedmd.com/sbatch.html](https://slurm.schedmd.com/sbatch.html)

## Suivre l'état d'un job

Il est possible d'obtenir le détail de l'état d'un job, qu'il soit en attente ou en exécution, avec les commandes **scontrol** ou **squeue**.

**Liste de tous les jobs en cours :**

```console
squeue
```

**Liste des jobs en cours d'un compte particulier :**
```console
squeue -u <login>
```

**Détail de l'état d'un job :**

```console
scontrol show job <jobid>
```

**Mon job est en attente. Quand va-t-il démarrer ?**

Pour les jobs en attente, Slurm calcul périodiquement un temps probable de démarrage.  
2 possibilités pour l'obtenir:

```console
scontrol show job <jobid> | grep StartTime=
```
```console
squeue -o "%S" -j <jobid>
```

## Autorisations / Account

Pour utiliser une partition, il faut disposer d'un compte Slurm (indépendant du login Unix). Ce compte Slurm est configuré notamment en fonction du **quota d'heures** attribué dans le cadre d'un projet MESONET.

Pour utiliser la partition associée aux projets, vous aurez accès à un compte Slurm spécifique, configuré avec un quota d'heures suite à une allocation du comité scientifique :

```console
#SBATCH -p mesonet
#SBATCH -A projet
```

## Suivre sa consommation

Vous pouvez avoir une indication de votre consommation en heures CPU par la commande

```console
sreport cluster AccountUtilizationByUser  start=2023-09-01 accounts=votre_account -t hours
```

Notez que **votre_account** correspond au nom du groupe Unix auquel vous appartenez ou alors au numéro du grant que vous avez obtenu lors d'une demande d'attributions d'heures par le comité scientifique.

## Espace disque temporaire

À la soumission d’un job et sur le disque dur de chacun des nœuds qui vous sont alloués, Slurm crée un répertoire temporaire de nom **/scratch/job.$SLURM_JOB_ID**

Vous pouvez utiliser ce répertoire pour y stocker les fichiers temporaires de vos applications en cours d’exécution. Pensez à les recopier sur votre compte à la fin du script. En effet, le répertoire /scratch/job.$SLURM_JOB_ID est automatiquement effacé en fin de job.

## Variables d'environnement

Dans certains cas, votre programme a besoin de connaître plus précisément les ressources que Slurm a mis à sa disposition. Pour cela, Slurm fourni un certain nombre de variables d'environnement, qui sont utilisables dans le script qui appelle le programme. En voici une liste non exhaustive :

* **SLURM_NPROCS** : nombre de cœurs alloués ;
* **SLURM_NNODES** : nombre de nœuds alloués ;
* **SLURM_CPUS_ON_NODE** : nombre de cœurs alloués par nœud ;
* **SLURM_JOB_ID** : job id ;
* **SLURM_JOB_NODELIST** : liste des nœuds alloués, sous une forme synthétique. Pour obtenir une liste détaillée, on peut utiliser la commande "**scontrol show hostname**".

Liste détaillée : vor chapitre "OUTPUT ENVIRONMENT VARIABLES" sous [https://slurm.schedmd.com/sbatch.html](https://slurm.schedmd.com/sbatch.html)

## Priorités

Quand plusieurs jobs sont en même temps en attente dans une file, Slurm calcule une priorité entre ces jobs. Le job ayant la priorité la plus élevée sera le prochain à passer en exécution.

La priorité des jobs peut être vue avec la commande :

```console
sprio -l
```

La priorité dépend de plusieurs facteurs :

* le temps d'attente déjà écoulé (AGE) ;
* la taille du job en nombre de cœurs : les gros jobs sont favorisés (JOBSIZE) ;
* la consommation en heures cpu sur le passé récent : plus la consommation a été faible, plus la priorité augmentera (FAIRSHARE).
