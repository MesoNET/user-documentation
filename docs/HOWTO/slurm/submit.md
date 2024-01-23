---
title: "Soumettre un job"
sidebar_position: 1
---
# Soumission de travaux avec [sbatch](https://slurm.schedmd.com/sbatch.html)

:::info

Les exemples donnés ici doivent éventuellement être adaptés au spécificités de chaque machine, par exemple en spécifiant l'option `--partition` etc.
:::

La soumission d'un job se fait avec la commande

```shell
 sbatch job.slurm
```

où `job.slurm` est un script de soumission slurm.
Il s'agit d'un script bash qui contient des instructions pour le gestionnaire de travaux ainsi que pour le lancement de votre programme.
Les instructions pour slurm (c'est-à-dire les options de la commande `sbatch`) sont typiquement inclus dans l'en-tête du script, précédé de `#SBATCH`.

Par exemple, le script de soumission suivant

```shell
#!/bin/bash
#SBATCH --nodes=1
#SBATCH --ntasks-per-node=1
#SBATCH --cpus-per-task=1
#SBATCH --time=00:10:00

hostname
sleep 60
```

décrit un job qui exécutera la commande `hostname` suivi de la commande `sleep 60`.
Ce job *single node* (`--nodes=1`) consiste en une seule tâche (`--ntasks-per-node=1`) mono-cœur (`--cpus-per-task=1`) avec un temps d'exécution d'au plus 10 minutes.

La commande `sbatch job.slurm` rejoute le job à la file d'attente et retourne un numéro de job (SLURM_JOB_ID), qui permet notamment de suivre l'état du job.

En fonction des ressources demandées et l'état du cluster, slurm lance le job et redirige la sortie standard (ici le nom du nœud alloué) vers un fichier `slurm-%j.out` (où `%j` est le SLURM_JOB_ID) localisé dans le dossier de lancement. Le job se termine soit quand la fin du script est atteint, soit quand le temps maximal (ici 10 minutes) est atteint.

Les arguments de sbatch peuvent également être passés directement en ligne de commande. Par exemple,

```shell
sbatch --output=out.txt job.slurm
```

soumet le script précédent mais rajoute l'option `--output` pour utiliser un fichier `out.txt` à la place de `slurm-%j.out`.

La documentation complète de `sbatch` est disponible [ici](https://slurm.schedmd.com/sbatch.html) ou en consultant `man sbatch`.

Nous nous limitons ici aux options les plus importantes.

## [`-t`, `--time`](https://slurm.schedmd.com/sbatch.html#OPT_time)

Le temps demandé sous la forme "min", "min:sec", "h:min:sec", "jours-h", "jours-h:min" ou "jours-h:min:sec".
La valeur par default et le maximum autorisé varient selon la configuration de chaque machine.

## [`-N`, `--nodes`](https://slurm.schedmd.com/sbatch.html#OPT_nodes)

Le nombre de nœuds demandés.

## [`-n`, `--ntasks`](https://slurm.schedmd.com/sbatch.html#OPT_ntasks)

Le nombre de tâches demandés. La notion de *task* dans slurm est assez proche d'un *process* MPI.

Par défaut ce nombre est égale au nombre de nœuds.


## [`-ntasks-per-node`](https://slurm.schedmd.com/sbatch.html#OPT_ntasks-per-node)

Utilisé avec `--nodes`.


## [`-p`, `--partition`](https://slurm.schedmd.com/sbatch.html#OPT_partition)


## [`--reservation`](https://slurm.schedmd.com/sbatch.html#OPT_reservation)



## [`--mem`](https://slurm.schedmd.com/sbatch.html#OPT_mem)


## [`-g`, `--gpus=[type:]<number>`](https://slurm.schedmd.com/sbatch.html#OPT_gpus)

voir aussi `--gpus-per-node`
et `--gres`

## Job name [-J, --job-name](https://slurm.schedmd.com/sbatch.html#OPT_job-name)



## E-mail notifications

--mail-type and --mail-user

https://slurm.schedmd.com/sbatch.html#OPT_mail-type
https://slurm.schedmd.com/sbatch.html#OPT_mail-user

## Output files
[`-e` `--error`](https://slurm.schedmd.com/sbatch.html#OPT_error)
[`-o` `--output`](https://slurm.schedmd.com/sbatch.html#OPT_output)

## **--exclusive** (https://slurm.schedmd.com/sbatch.html#OPT_exclusive)

## **--export**





## Job chaining **[`-d` `--dependency=<dependency_list>](https://slurm.schedmd.com/sbatch.html#OPT_dependency)**

## Job arrays **[`-a`, `--array=<indices>`](https://slurm.schedmd.com/sbatch.html#OPT_array)**

## Working directory **[`-D`, `--chdir=`]**


## Environnement variables

Les variables utilitaires suivantes (liste non exhaustive) peuvent être exploitées dans les commandes utilisateurs (Shell) d'un script de soumission.

Action	Commande
SLURM_JOB_ID	Identification du travail (exemple : 64549)
SLURM_JOB_NAME	Nom du travail (spécifié par #SBATCH -J)
SLURM_SUBMIT_DIR	Nom du répertoire initial (dans lequel la commande sbatch a été lancée)
SLURM_NTASKS	Nombre de processus MPI du travail
LOCAL_WORK_DIR	Nom du répertoire de scratch temporaire fondé sur le numéro du calcul : /dlocal/run/$SLURM_JOB_ID. Cette arborescence est supprimée 45 jours après la fin du calcul.


sbatch propagates environment variables



# Jobs interactifs

Les jobs interactifs permettent de reserver des ressources et de s'y connecter, sans nécessairement effectuer des calculs.
Par conséquent les règles concernant les jobs interactifs peuvent varier entre les différentes machines MesoNET.

## srun
La commande `srun` est similaire à `sbatch` et les options, en particulier pour spécifier les ressources sont presque identiques.

Contrairement à `sbatch` la commande `srun` est *bloquante* et *interactive* (les résultats s'affichent directement dans le terminal qui reste bloqué jusqu'à la fin de la commande).

L'utilisation principale pour `srun` est d'obteir une shell interactive sur un noeud de calcul.

Reserver ressources par défaut, s'y connecter et ouvrir une session bash

srun --pty bash -l

La session démarrera quand les ressources sont alloués.


srun --pty -c 4 /bin/bash
￼
Cette commande lance un shell interactif avec 4 CPU alloués. Utile pour les tâches interactives ou les tests.



## salloc
reserver ressources sans y lancer un script. il faut s'y connecter ultérieurement


## scancel







## 

#
