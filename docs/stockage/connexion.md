---
title: "Se connecter"
sidebar_position: 2
---

# Connexion

## Prérequis logiciels

Les paquets `irods-icommands` et `irods-auth-plugin-pam-interactive-client` sont nécessaires pour pouvoir utiliser iRODS sur une machine cliente. Ces paquets sont disponibles sur le dépôt suivant : [packages.irods.org](https://packages.irods.org/).

## Configuration de l'environnement utilisateur

Chaque utilisateur doit disposer d'un fichier de configuration propre afin de pouvoir utiliser la fédération de stockage iRODS de MesoNET.

<!-- TODO: un utilisateur sait-il ce qu'est IAM ? -->

S'il n'existe pas déjà, il est nécessaire de créer le fichier `~/.irods/irods_environment.json` et de le remplir comme suit, en remplaçant **PREFERRED_USERNAME_IAM** par son nom d'utilisateur IAM et **IRODS_DEFAULT_RESOURCE** par une ressource de son choix (Rouen, Nantes, Strasbourg, etc) :

Configuration utilisateur pour le client version 5.X.X

```
{
    "irods_user_name": "PREFERRED_USERNAME_IAM",
    "irods_default_resource": "IRODS_DEFAULT_RESOURCE",
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

Configuration utilisateur pour le client version 4.X.X
```
{
    "irods_user_name": "PREFERRED_USERNAME_IAM",
    "irods_default_resource": "IRODS_DEFAULT_RESOURCE",
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

> Cette configuration est également visible avec la commande `ienv`.

Il est possible de préciser le "home" (dossier utilisateur) et le "cwd" (dossier de travail), avec les variables optionnelles suivantes :
```
{
    "irods_cwd": "/MesoNET/home/PROJECT_NAME",
    "irods_home": "/MesoNET/home/PREFERRED_USERNAME_IAM",
}
```
Dans ce cas, si vous appartenez à plusieurs projets différents, faites bien attention à changer de dossier pour chaque projet. 

> **ATTENTION** : Par défaut vous ne pourrez mettre des fichiers uniquement dans le dossier de votre projet (ex: /MesoNET/home/PROJECT_NUMBER), vous n'avez pas la possibilité de déposer des fichier sur votre dossier utilisateur (ex: /MesoNET/home/USERNAME)

## Connextion

Pour débuter une session iRODS, l'utilisateur doit lancer la commande `iinit`, puis suivre les instructions.

Si sa configuration est correcte, la commande `init` devrait alors renvoyer une URL lui permettant de s'authentifier avec ses identifiants IAM.


## Déconnexion

Pour vous déconnecter vous pouvez utiliszer la commande ` iexit`.


> Chaque session a une durée de 6h ; passé ce délai, l'utilisateur doit se connecter à nouveau.
