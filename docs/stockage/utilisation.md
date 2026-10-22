---
title: "Utilisation"
sidebar_position: 3
---


# Liste des commandes

La liste exhaustive des commandes utilisateur iRODS est fournie par la commande `ihelp`. 

Dans les exemples de commande suivante nous considérons que : 
* **fichier.txt** est un fichier existant **sur votre machine cliente**.
* **/MesoNET/home/M26007** est le dossier associé à votre projet qui se trouve **sur la fédération de stockage**.


## Naviguer dans le système de fichier

* `ipwd` : Affiche le répertoire courant.
* `icd /MesoNET/home/M26007` : Change le dossier de travail par *M26007*.

* `ils /MesoNET/home/M26007` : Liste les fichiers présents dans le dossier *M26007*.
* `ils -l /MesoNET/home/M26007` : Liste les fichiers présents dans le dossier *M26007* en affichant dans quelles ressources ils se trouvent.


## Envoyer des données

* `iput fichier.txt /MesoNET/home/M26007` : Dépose le fichier *fichier.txt* dans le dossier *M26007*.
* `iput -R Nantes fichier.txt /MesoNET/home/M26007` : Dépose le fichier *fichier.txt* dans le dossier *M26007* en spécifiant la ressource.

* `imkdir /MesoNET/home/M26007/dossier_demo` : Crée le dossier *dossier_demo* dans la collection *M26007*.

* `irsync -r dossier_local i:dossier_distant` : Synchronise *dossier_local* sur *dossier_distant* -> Envoie les données sur la fédération de stockage. **Ne pas oublier le i: devant le dossier distant.**


## Récupérer les données 

* `iget /MesoNET/home/M26007/fichier.txt <dossier_local_destination>` : Récupère le fichier *fichier.txt* pour le mettre dans *<dossier_local_destination*.

* `irsync -r i:dossier_distant mon_dossier_local` : Synchronise *dossier_distant* sur *dossier_local*  -> Récupère les données présentes sur la fédération de stockage. **Ne pas oublier le i: devant le dossier distant.**


## Suppresion

* `irm /MesoNET/home/M26007/file.txt` : Supprime le fichier *fichier.txt* du dossier *M26007*.
* `irm -r /MesoNET/home/M26007/dossier_demo` : Supprime le dossier *dossier_demo* dans la collection *M26007*.

## Metadonnées
Les métadonnées sont des informations ajouter à propos de vos fichiers et collections.

Pour ajouter, suprimer, lister ou requêter les métadonnées, utilisez la commande `imeta`.

Une métadonnée est définie par le triplet d'information suivant : 

* Nom (AttName)
* Valeur (AttVal)
* Unité (AttUnits)

> L'unité n'est pas obligatoire.


## Informations diverses

* `imeta -M ls  -lC /MesoNET/home/M26007` : afficher le quota de la collection M26007, le nombre de fichiers qui s'y trouvent ainsi que consommation courante en octets.


* `ilsresc` : lister les ressources de la zone

Pour avoir un affichage plus facile à lire vous pouvez taper la commande suivante : 

``` bash
ilsresc -l | grep -B 4 'type: random' | awk '/resource name:/ {print $NF}' | sort
```


## Bonne pratiques 

La plupart des infrastructures de stockage, en particulier le stockage en nuage, ne gèrent pas très bien les grandes collections de petits fichiers et c’est notamment le cas d’iRODS. 

Chaque transaction de fichier (lecture, écriture, copie, déplacement) génère de nombreuses transactions de base de données associées dans iRODS, le surcoût sur l’opération de fichier proprement dite peut rapidement devenir très important et affecter négativement le temps de traitement de vos travaux de calcul.


> Il est donc préconnisé de **faire une archive** de vos petits fichiers, avec un outil tel que tar ou zip, **avant de les télécharger sur Irods**. Vous pourrez ensuite décompresser le paquet sur le nœud de calcul après son téléchargement plutôt que de télécharger une grande collection de petits fichiers.
