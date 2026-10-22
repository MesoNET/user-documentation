---
title: "Connexion"
sidebar_position: 2
---


# Connexion


## Prérequis logiciels

Les paquets `irods-icommands` et `irods-auth-plugin-pam-interactive-client` sont nécessaires pour pouvoir utiliser iRODS sur une machine cliente. Ces paquets sont disponibles sur le dépôt suivant : [packages.irods.org](https://packages.irods.org/).


## Configuration de l'environnement utilisateur


### Fichier de configuration

Avant de vous connecter, vous devez disposer d'un fichier de configuration.

<!-- TODO: un utilisateur sait-il ce qu'est IAM ? -->

S'il n'existe pas déjà, il est nécessaire de créer le fichier `~/.irods/irods_environment.json` et de le remplir comme suit, en remplaçant :
* **USERNAME** par votre nom d'utilisateur IAM.
* **IRODS_DEFAULT_RESOURCE** par une ressource de votre choix, voir la section suivante.
* **PROJECT_NAME** par votre numéro de projet, exemple : M26007.

Configuration utilisateur pour le client version 5.X.X :

``` bash
{
    "irods_user_name": "USERNAME",
    "irods_default_resource": "IRODS_DEFAULT_RESOURCE",
    "irods_cwd": "/MesoNET/home/PROJECT_NAME",
    "irods_authentication_scheme": "pam_interactive",
    "irods_client_server_policy": "CS_NEG_REQUIRE",
    "irods_encryption_algorithm": "AES-256-CBC",
    "irods_encryption_key_size": 32,
    "irods_encryption_num_hash_rounds": 16,
    "irods_encryption_salt_size": 8,
    "irods_connection_pool_refresh_time_in_seconds": 300,
    "irods_host": "icat.irods.mesonet.fr",
    "irods_port": 1247,
    "irods_ssl_verify_server": "cert",
    "irods_zone_name": "MesoNET"
}
```

<!-- Est-ce vraiment utile de mettre la version 4.X.X ? -->

Configuration utilisateur pour le client version 4.X.X :
``` bash
{
    "irods_user_name": "USERNAME",
    "irods_default_resource": "IRODS_DEFAULT_RESOURCE",
    "irods_cwd": "/MesoNET/home/ds",
    "irods_authentication_scheme": "pam_interactive",
    "irods_client_server_negotiation": "request_server_negotiation",
    "irods_encryption_algorithm": "AES-256-CBC",
    "irods_encryption_key_size": 32,
    "irods_encryption_num_hash_rounds": 16,
    "irods_encryption_salt_size": 8,
    "irods_host": "icat.irods.mesonet.fr",
    "irods_port": 1247,
    "irods_zone_name": "MesoNET"
}
```
La version de votre client irods peut être obtenue grâce à la commande suivante : 

``` bash
ihelp | grep Version 
```

> Cette configuration est également visible avec la commande `ienv`.

### Liste des ressources

* Corse
* Lille
* Lyon
* Marseille
* Meudon
* Nantes
* Orleans
* Reims
* Rennes
* Rouen
* Strasbourg

<!-- TODO : Rajouter une carte -->

### Points de vigilance

> Pour la ressource, en théorie vous pouvez mettre celle que vous voulez, ne pratique nous recommendons de mettre une ressource non loins du mésocentre qui traiteras vos données pour optimiser vos temps de transfère. Exemple : vous utiliser la plateforme Nova qui est à Grenoble, définissez votre ressource à Lyon.

> Si vous appartenez à plusieurs projets différents, faites bien attention à changer de dossier pour chaque projet. Voir la commande `icd`. 

> **ATTENTION** : Vous ne pouvez mettre des fichiers uniquement dans le dossier de votre projet (exemple : */MesoNET/home/PROJECT_NAME*), vous n'avez pas la possibilité de déposer des fichiers sur votre dossier utilisateur (exemple : */MesoNET/home/USERNAME*).


## Se connecter

Pour débuter une session iRODS, l'utilisateur doit lancer la commande `iinit`, puis suivre les instructions.

Si votre configuration est correcte, la commande `init` devrait alors renvoyer une URL vous permettant de vous authentifier avec vos identifiants IAM.


## Se déconnecter

Pour vous déconnecter vous pouvez utiliser la commande `iexit`.

> Chaque session a une durée de 6h, passé ce délai, vous devez vous connecter à nouveau.
