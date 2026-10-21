---
title: "Utilisation"
sidebar_position: 3
---


# Liste des commandes

La liste exhaustive des commandes utilisateur iRODS est fournie par la commande `ihelp`. 

## Naviguer dans le système de fichier

* `ipwd` : Affiche le répertoire courant.
* `icd /MesoNET/home/M26007` : Change le dossier de travail par M26007.

* `ils /MesoNET/home/M26007` : lister les fichiers présents dans la collection M26007
* `ils - l /MesoNET/home/M26007` : lister les fichiers présents dans la collection M26007 en affichant dans quelles ressources ils se trouvent

## Envoyer des données

* `iput file.txt /MesoNET/home/M26007` : déposer le fichier *file.txt* dans la collection M26007
* `iput -R Nantes file.txt /MesoNET/home/M26007` : déposer le fichier *file.txt* dans la collection M26007 en spécifiant la ressource

* `imkdir /MesoNET/home/M26007/demo_folder` : créer le dossier *demo_folder* dans la collection M26007

* `irsync -r mon_dossier_local i:mon_dossier_distant` : synchronise *mon_dossier_local* sur *mon_dossier_distant* -> envoie les données sur la fédération de stockage

## Récupérer les données 


* `iget /MesoNET/home/M26007/file.txt <dossier_local_destination>` : récupère le fichie *file.txt* 

* `irsync -r i:mon_dossier_distant mon_dossier_local` : synchronise *mon_dossier_distant* sur *mon_dossier_local*  -> récupère les données présentes sur la fédération de stockage.



## Suppresion

* `irm /MesoNET/home/M26007/file.txt` : supprimer le fichier *file.txt* de la collection M26007
* `irm -r /MesoNET/home/M26007/demo_folder` : supprimer le dossier *demo_folder* dans la collection M26007

## Metadonnées
Les métadonnées sont des informations aouter à propos des vos fichiers et collections.

Pour ajouter, suprimer, lister ou requêter les métadonnées, utilisez la commande `imeta`.

Une métadonnée est définie par le triplet d'information suivant : 

* Nom (AttName)
* Valeur (AttVal)
* Unité (AttUnits)

L'unité n'est pas obligatoire.



## Informations diverses

* `imeta -M ls  -lC /MesoNET/home/M26007` : afficher le quota de la collection M26007, le nombre de fichiers qui s'y trouvent ainsi que consommation courante en octets.


* `ilsresc` : lister les ressources de la zone

Pour avoir un affichage plus facile à lire vous pouvez taper la commande suivante : 

``` bash
$ ilsresc -l | grep -B 4 'type: random' | awk '/resource name:/ {print $NF}' | sort

Corse
Lille
Marseille
Meudon
Nantes
Orleans
Reims
Rennes
Rouen
Strasbourg
```



## Bonne pratiques 

La plupart des infrastructures de stockage, en particulier le stockage en nuage, ne gèrent pas très bien les grandes collections de petits fichiers et c’est notamment le cas d’iRODS. 

Chaque transaction de fichier (lecture, écriture, copie, déplacement) génère de nombreuses transactions de base de données associées dans iRODS, le surcoût sur l’opération de fichier proprement dite peut rapidement devenir très important et affecter négativement le temps de traitement de vos travaux de calcul.


> Il est donc préconniser de faire une archive de vos petits fichiers, avec un outil tel que tar ou zip, avant de les télécharger sur Irods. Vous pourrez ensuite décompresser le paquet sur le nœud de calcul après son téléchargement plutôt que de télécharger une grande collection de petits fichiers.


