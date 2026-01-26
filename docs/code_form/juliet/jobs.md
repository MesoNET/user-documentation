---
title: Lancer un calcul
sidebar_position: 4
---

# Lancer un job sur Juliet

Une seule partition nommée `mesonet`



# Documentation Utilisateur pour Slurm

## 1. Introduction à Slurm

Slurm (Simple Linux Utility for Resource Management) est un puissant système de gestion de ressources conçu pour planifier, surveiller et exécuter des travaux sur des grappes de calcul. Voici quelques concepts de base :

- **Travail (Job)** : Une unité de travail soumise à Slurm pour exécution.
- **Partition** : Un groupe de nœuds de calcul avec des propriétés similaires.
- **Nœud** : Une machine individuelle au sein de la grappe.
- **Tâche (Task)** : Une unité d'exécution d'un travail, qui peut être un processus ou un thread.
- **Sbatch** : Utilitaire pour soumettre des travaux non interactifs.
- **Srun** : Utilitaire pour exécuter des tâches interactives ou non interactives.


## 2. Soumission de travaux

### Paramètres requis

Certains paramètres doivent être fournis afin de permettre le lancement de votre job. Ils peuvent être fournis dans le script ou en paramètre de sbatch.

- **Temps d'allocation**, le paramètre `--time=HH:MM:SS` vous permet d'avoir des ressources allouées pendant HH heures MM minutes et SS secondes.

:::info

La limite de temps pour un calcul sur Juliet est de 10 jours.

:::

- **Projet**, le paramètre `--account=m2xxxx` vous permet de renseigner de quel projet les heures doivent être décomptées
    Pour savoir les projets auxquels vous êtes associé, vous pouvez utiliser la commande

```
sacctmgr --noheader --parsable2 show association where user=$USER format=account
```

:::caution

Il n'est pas possible de lancer un job avec le projet *default*

:::


### Paramètres optionnels

- **Nombre de noeuds demandés** : Le paramètre `--nodes=n` vous permettra de réserver N noeuds pour le job entier (par défaut 1)
- **Nombre de cpu par noeud**: Le paramètre `--cpu_per_task=n` vous permettra de réserver n CPUs par tâche (par défaut 1)
- **Nombre de GPU par noeud**: Le paramètre `--gpus=n` vous permettra de réserver n GPUs pour le job entier (par défaut 0)
- **Quantité de mémoire demandée** Le paramètre `--mem=kG` vous permettra d'allouer k Go de RAM pour le job entier (par défaut n\_cpu Go avec n\_cpu le nombre de cpu alloués pour le job entier)
- **Réservation demandée** Le paramètre `--reservation=xxx` vous permettra d'utiliser les noeuds alloués à la réservation xxx.


### Exemple 1 : Soumettre un script simple

    sbatch mon_script.sh

Cette commande soumet le script `mon_script.sh` pour exécution. Assurez-vous que `mon_script.sh` contient les directives Slurm appropriées en haut du script pour spécifier les ressources nécessaires.

### Exemple 2 : Soumettre avec allocation de ressources

    sbatch --partition=mesonet --nodes=2 --ntasks-per-node=4 mon_script.sh

Cette commande alloue le travail à la partition "mesonet" sur 2 nœuds, avec 4 tâches par nœud. Assurez-vous d'ajuster les valeurs selon vos besoins. 

### Exemples de scripts sbatch
Exemple de script shell utilisant un nœud complet : 

```Shell
#!/bin/bash
#SBATCH -p mesonet 
#SBATCH -N 1
#SBATCH -c 224
#SBATCH --gres=gpu:8 
#SBATCH --time=1:00:00
#SBATCH --mem=0
#SBATCH --account=m2xxxx

~/miniconda3/envs/h2ogpt/bin/python generate.py --share=False --gradio_offline_level=1 --base_model=h2oai/h2ogpt-4096-llama2-70b-chat --use_gpu_id=False
```

Exemple de script shell utilisant un seul GPU : 

```Shell
#!/bin/bash
#SBATCH -p mesonet 
#SBATCH -N 1
#SBATCH -c 28
#SBATCH --gres=gpu:1 
#SBATCH --time=1:00:00
#SBATCH --mem=256G
#SBATCH --account=m2xxxx

~/miniconda3/envs/h2ogpt/bin/python generate.py --share=False --gradio_offline_level=1 --base_model=h2oai/h2ogpt-4096-llama2-70b-chat
```

## 3. Vérification de l'état des travaux

### Exemple 3 : Vérifier l'état de vos travaux

    squeue -u votre_nom_utilisateur

Cette commande affiche la liste des travaux en cours pour l'utilisateur spécifié. Vous pouvez voir des informations telles que l'ID du travail, l'état, le nœud, le temps, etc. 

### Exemple 4 : Vérifier les travaux de tous les utilisateurs

    squeue

Cette commande affiche la liste de tous les travaux en cours. Utilisez des options supplémentaires pour filtrer les résultats, par exemple, `squeue --partition=mesonet` pour afficher les travaux dans la partition "mesonet".


## 4. Gestion des travaux

### Exemple 5 : Annuler un travail

    scancel ID_du_travail

Cette commande annule le travail avec l'ID spécifié. Vous pouvez obtenir l'ID du travail à partir de la commande `squeue`.

### Exemple 6 : Modifier la priorité d'un travail

    scontrol update JobID ID_du_travail Priority=50

Cette commande modifie la priorité du travail avec l'ID spécifié. La priorité affecte l'ordre d'exécution des travaux.

## 5. Gestion des ressources

### Exemple 7 : Spécifier les ressources avec sbatch

    sbatch --partition=mesonet --nodes=1 --cpus-per-task=8 --mem=16G mon_script.sh --time=HH:MM:SS --account=m2xxxx

Cette commande spécifie les ressources pour le travail, y compris la partition, le nombre de nœuds, le nombre de tâches par nœud et le nombre de CPU par tâche.

### Exemple 8 : Exécuter des tâches interactives avec srun

    srun --time=HH:MM:SS --account=m2xxxx --pty -c 4 --gres=gpu:1 /bin/bash

Cette commande lance un shell interactif avec 4 CPU alloués. Utile pour les tâches interactives ou les tests.

## 6. Paramètres avancés

### Exemple 9 : Utiliser une réservation de nœuds

    srun --reservation=ma_reservation --nodes=2 mon_script.sh --time=HH:MM:SS --account=m2xxxx

Cette commande exécute le travail sur une réservation de 2 nœuds spécifiée avec l'option `--reservation`.

### Exemple 10 : Utiliser une partition spécifique avec srun

    srun --partition=visu --nodes=1 --time=HH:MM:SS --account=m2xxxx mon_script.sh 

Cette commande exécute le travail sur la partition "visu" avec 1 nœud. 


## 7. Informations sur les noeuds de calcul

    sinfo

Cette commande affiche des informations détaillées sur les nœuds disponibles, telles que leur nom, partition, état, nombre de tâches, mémoire, ressources, charge CPU, temps d'activité et utilisation GPU 


## 8. Ressources supplémentaires

https://slurm.schedmd.com/documentation.html

