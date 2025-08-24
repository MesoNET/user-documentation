---
title: "Comptabilité et quotas"
sidebar_position: 3
---
# Comptabilité et quotas

L'utilisation de la machine est comptabilisée sur la base du nombre de GPU utilisés (1 heure GPU correspond à l'utilisation d'une carte H100 pendant une heure). Le cluster est composé de 8 nœuds, chacun avec 4 GPU H100. Le nombre d'heures GPU attribuées à chaque projet doit être spécifié lors de la création de celui-ci, avec une limite maximale de 10000 heures GPU pouvant être demandée.


## Stockage

Une fois le projet validé, un dossier est créé pour chaque membre du projet dans le `/home/` de la machine (`/home/<username>/`), ainsi qu'un dossier partagé pour tous les membres du projet où ils peuvent partager librement des fichiers (`/home/projects/<project_id>/`). Le dossier `/home/` est accessible depuis tous les nœuds du cluster et les quotas de stockage sont attribués par défaut de la manière suivante :

|                   | Limite d'espace      | Limite de fichiers    |
| ----------------- | :------------------: | :-------------------: |
| **Utilisateur**   | 500 Go               | 5000000              |
| **Projet**        | 1000 Go              | 10000000               |


## Limites de calcul

Par ailleurs, certaines limites de calcul sont définies par défaut dans Slurm afin de garantir une utilisation équilibrée et équitable du cluster pour tous les utilisateurs. Le nombre maximal de GPU qu'un utilisateur peut occuper simultanément est de 4 H100, ce qui équivaut aux ressources d'un nœud complet.  De même, le nombre maximal de jobs qu'un utilisateur peut lancer, y compris les jobs en attente d'exécution, est de 10.

Il est important que tous les utilisateurs respectent ces règles afin de garantir une utilisation raisonnable des ressources du cluster. Si une modification de ces limites et quotas s'avère nécessaire, une demande spéciale et dûment justifiée devra être remplie afin de faire l'objet d'une évaluation avant d'être validée en fonction des disponibilités.

## Informations utiles

La commande `hedy_info` peut être lancée depuis les frontales de login pour obtenir des informations pertinentes sur le projet, telles que le nombre d'heures attribuées, la consommation actuelle, l'utilisation du disque dur et les jobs récents. L'option `-e` peut être utilisée pour obtenir ces mêmes informations en anglais.

```
[user2@m-login01 ~]$ hedy_info 

UTILISATEUR: user2

-------------------------------------------------------------------------------------------
COMPTE: m20000
ATTRIBUTION: 5002.00 heures GPU
UTILISÉ: 20.47 heures GPU (0.41%)
ÉNERGIE CONSOMMÉE: 0.09 kWh (0.32 MJ)
DÉTAILS DE LA CONSOMMATION:
           Utilisateur     | Utilisé (h)     | %          | Énergie (kWh)
           user1           | 13.18           | 0.26       | 0.04
           user2           | 7.28            | 0.15       | 0.04
QUOTA DISQUE:
                          ||                     ESPACE                     ||                    FICHIERS      
                          || Utilisé      | Limite Faible  | Limite Dur     || Utilisé      | Limite Faible  | Limite Dur    
           m20000         || 0K           | 900G           | 1000G          || 1            | 9000k          | 10000k        
           user1          || Informations confidentielles de l'utilisateur  || Informations confidentielles de l'utilisateur 
           user2          || 48K          | 450G           | 500G           || 13           | 4500k          | 5000k         
DERNIERS JOBS:
           JobID    | JobName              | User         | État               | Début                | Écoulé     | AllocTRES
           5095     | sleep_job            | user2        | COMPLETED          | 2025-08-13T14:32:20  | 00:10:02   | billing=16,cpu=64,energy=546910,gres/gpu:gh100=4,gres/gpu=4,mem=480000M,node=1
           5101     | test_job             | user1        | COMPLETED          | 2025-08-16T15:30:11  | 00:10:01   | billing=8,cpu=32,energy=266730,gres/gpu:gh100=2,gres/gpu=2,mem=240000M,node=1
           5126     | sleep_job2           | user2        | FAILED             | None                 | 00:00:00   | 
           5127     | test_job2            | user1        | COMPLETED          | 2025-08-19T15:31:36  | 00:10:01   | billing=16,cpu=64,energy=535860,gres/gpu:gh100=4,gres/gpu=4,mem=480000M,node=1
```