---
title: "Soumettre et gérer ses travaux"
sidebar_position: 1
---
# Soumettre et gérer ses travaux avec slurm

:::info

Les exemples donnés ici doivent éventuellement être adaptés au spécificités de chaque machine, par exemple en spécifiant l'option `--partition` etc.
:::

## Soumission de scripts avec [sbatch](https://slurm.schedmd.com/sbatch.html)

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

### [`--time`, `-t`](https://slurm.schedmd.com/sbatch.html#OPT_time)

Exemples:

- `#SBATCH --time 4:00:00` pour demander 4 heures de temps.
- `#SBATCH --time 2-12` pour 2 jours et demi
- `#SBATCH --time 30` pour 30 minutes
- `#SBATCH --time 30:00` pour 30 minutes aussi


La valeur par default et le maximum autorisé varient selon la configuration de chaque machine et dépendent souvent de la partition ou le jobs est soumis.

Si le temps demandé dépasse la limite autorisée le job restera en attente indéfiniment.

### [`--partition`, `-p`](https://slurm.schedmd.com/sbatch.html#OPT_partition)

La partition où les ressources seront alloués. Éventuellement une partition défaut a été configuré sur votre machine.

- `SBATCH --partition compute` demande une allocation sur la partition 'compute'.
- `#SBATCH --partition shared,small` demande une allocation sur la partition 'shared' ou 'small', là où le job pourra démarrer en premier.

### [`--nodes`, `-N`](https://slurm.schedmd.com/sbatch.html#OPT_nodes)

Le nombre de nœuds demandés.

- `#SBATCH --nodes 4` (ou `#SBATCH -N 4`) signifie qu'au moins 4 nœuds seront alloués au job - mais d'autres option peuvent augmenter ce nombre.

- `#SBATCH --nodes 2-4` signifie qu'au moins 2 et au plus 4 nœuds seront alloués au job.

### [`--ntasks`, `-n`](https://slurm.schedmd.com/sbatch.html#OPT_ntasks)

Indique que le job comporte `--ntasks` tâches, slurm déterminera alors les ressources à demander. La notion de *task* dans slurm est assez proche d'un *process* MPI.

- sur un cluster équipé de nœuds 80-cœurs l'option `#SBATCH -n 160` demandera 2 nœuds et 160 CPUs.


### [`-ntasks-per-node`](https://slurm.schedmd.com/sbatch.html#OPT_ntasks-per-node)

A utiliser avec l'option `--nodes`.


### [`-cpus-per-task`](https://slurm.schedmd.com/sbatch.html#OPT_cpus-per-task)

Souvent utilisé pour des jobs hybrides MPI/OpenMP. Par exemple

```
#SBATCH --nodes 2
#SBATCH --ntasks-per-node 2
#SBATCH --cpus-per-task 16
```

demande 2 nœuds et 32 cœurs par nœud (pour 2 tâches par nœud utilisant 16 CPUs par tâche).


### [`--mem`](https://slurm.schedmd.com/sbatch.html#OPT_mem)

La mémoire *par nœud* nécessaire. Exemples:

- `SBATCH --mem=2000` : 2000 Mo
- `SBATCH --mem=2000M` : 2000 Mo
- `SBATCH --mem=2G` : 2 Go
- `SBATCH --mem=1T` : 1 To


### [`--reservation`](https://slurm.schedmd.com/sbatch.html#OPT_reservation)

`#SBATCH --reservation=toto` alloue des ressources dans la reservation 'toto' si elle existe.

Typiquement les admins d'une machine peuvent créer des reservations en avance pour des travaux pratiques.


### [`--gpus=[type:]<number>`, `-g`](https://slurm.schedmd.com/sbatch.html#OPT_gpus)

voir aussi `--gpus-per-node` et et `--gres`

### [--job-name, -J](https://slurm.schedmd.com/sbatch.html#OPT_job-name)


`SBATCH --job-name=toto` fera apparaitre le nom 'toto' dans les requêtes slurm. Par defaut, le nom du job sera celui du script de soumission.

### e-mail notifications

- [`--mail-type`](https://slurm.schedmd.com/sbatch.html#OPT_mail-type) et [`--mail-user`](https://slurm.schedmd.com/sbatch.html#OPT_mail-user) permettent de reçevoir des mails de notification

### Output files

- [`--output`, `-o` ](https://slurm.schedmd.com/sbatch.html#OPT_output) et [`--error`,`-e`](https://slurm.schedmd.com/sbatch.html#OPT_error) permettent de spécifier le nom des fichiers sortie.

<!-- ### **--exclusive** (https://slurm.schedmd.com/sbatch.html#OPT_exclusive)


### Working directory **[`-D`, `--chdir=`]** -->


<!-- ## Jobs interactifs

Les jobs interactifs permettent de reserver des ressources et de s'y connecter, sans nécessairement effectuer des calculs.
Par conséquent les règles concernant les jobs interactifs peuvent varier entre les différentes machines MesoNET.

### srun
La commande `srun` est similaire à `sbatch` et les options, en particulier pour spécifier les ressources sont presque identiques.

Contrairement à `sbatch` la commande `srun` est *bloquante* et *interactive* (les résultats s'affichent directement dans le terminal qui reste bloqué jusqu'à la fin de la commande).

L'utilisation principale pour `srun` est d'obteir une shell interactive sur un noeud de calcul.

Reserver ressources par défaut, s'y connecter et ouvrir une session bash

srun --pty bash -l

La session démarrera quand les ressources sont alloués.


srun --pty -c 4 /bin/bash
￼
Cette commande lance un shell interactif avec 4 CPU alloués. Utile pour les tâches interactives ou les tests. -->


<!--
### salloc
reserver ressources sans y lancer un script. il faut s'y connecter ultérieurement
 -->

## Annulation d'un job avec scancel

`scancel JOBID` permet d'annuler le job JOBID
