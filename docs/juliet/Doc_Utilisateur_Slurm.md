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

### Exemple 1 : Soumettre un script simple

    sbatch mon_script.sh

Cette commande soumet le script `mon_script.sh` pour exécution. Assurez-vous que `mon_script.sh` contient les directives Slurm appropriées en haut du script pour spécifier les ressources nécessaires.

### Exemple 2 : Soumettre avec allocation de ressources

    sbatch --partition=mesonet --nodes=2 --ntasks-per-node=4 mon_script.sh

Cette commande alloue le travail à la partition "mesonet" sur 2 nœuds, avec 4 tâches par nœud. Assurez-vous d'ajuster les valeurs selon vos besoins. 

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

    sbatch --partition=compute --nodes=1 --cpus-per-task=8 --mem=16G mon_script.sh

Cette commande spécifie les ressources pour le travail, y compris la partition, le nombre de nœuds, le nombre de tâches par nœud et le nombre de CPU par tâche.

### Exemple 8 : Exécuter des tâches interactives avec srun

    srun --pty -c 4 /bin/bash

Cette commande lance un shell interactif avec 4 CPU alloués. Utile pour les tâches interactives ou les tests.

## 6. Paramètres avancés

### Exemple 9 : Utiliser une réservation de nœuds

    srun --reservation=ma_reservation --nodes=2 mon_script.sh

Cette commande exécute le travail sur une réservation de 2 nœuds spécifiée avec l'option `--reservation`.

### Exemple 10 : Utiliser une partition spécifique avec srun

    srun --partition=visu --nodes=1 mon_script.sh

Cette commande exécute le travail sur la partition "visu" avec 1 nœud. 


## 7. Informations sur les noeuds de calcul

    sinfo

Cette commande affiche des informations détaillées sur les nœuds disponibles, telles que leur nom, partition, état, nombre de tâches, mémoire, ressources, charge CPU, temps d'activité et utilisation GPU 


## 8. Ressources supplémentaires

https://slurm.schedmd.com/documentation.html
