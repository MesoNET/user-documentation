---
title: "Accéder à Openstack"
sidebar_position: 1
---

Tout ce qui est fait sur Openstack peut se faire : soit graphiquement via un navigateur Web, soit en ligne de commande via le client Python Openstack (dans ce cas voir [Installation du client](/code_form/nova/fondamentaux/installation_client)). Dans des cas plus avancés, on pourra utiliser l'API Openstack avec n'importe quel langage de programmation, ou utiliser *Terraform*.

## Connexion à l'interface Web

Rendez-vous sur l'interface [https://gricad-cloud.univ-grenoble-alpes.fr/](https://gricad-cloud.univ-grenoble-alpes.fr/), puis connectez-vous au dashboard d'OpenStack.
- Sélectionnez *Authenticate with Mesonet*
- Cliquez sur *Se connecter*

![connexion](/img/nova/Nova_Connexion.png?height=400px&classes=shadow)

Si vous souhaitez continuer de manière graphique via le navigateur, vous pouvez suivre le [Quickstart](/code_form/nova/fondamentaux/quickstart).

## Connexion en ligne de commande ou via les APIs

:::info
Vous trouverez tous les détails de la configuration du client pour s'authentifier à Openstack [ici](https://docs.openstack.org/python-openstackclient/latest/configuration/index.html#configuration-files)
:::

Pour vous connecter avec le CLI ou via les APIs, vous pouvez :
- Utilisez les variables d'environnement, un fichier RC est téléchargeable sur *Horizon*.
Il suffit ensuite de *sourcer* ce fichier, celui-ci contenant toutes les variables d'environnement relatives au projet dans lequel vous êtes authentifié.
- Plus moderne, vous pouvez utiliser le fichier *clouds.yml*. Ce fichier est aussi téléchargeable sur *Horizon*.
Ce fichier se place ensuite dans *~/.config/openstack/clouds.yaml*

La plateforme Openstack MesoNET utilise le protocole OIDC pour vous connecter via l'authentification de votre université. Il est nécessaire de faire quelques ajustements pour utiliser le fichier *clouds.yml*. 

:::info 
L'utilisation du fichier *clouds.yml* est fortement conseillé.    
De plus, l'avantage de ce fichier est qu'il peut contenir différents Clouds Openstack, différents projets, différents utilisateurs.
:::

### Récupérer les fichiers **RC** ou *clouds.yml* de votre projet

Vous pouvez récupérer un fichier d'authentification pré-rempli sur le Dashboard *Horizon*.
Pour cela, cliquez sur votre login en haut à droite de l'interface web.   
    
![fichierRC](/img/nova/Nova_fichierRC.png?classes=shadow)   

### Utiliser le fichier clouds.yml
Pour utiliser le ficher clouds.yml, il faudra d'abord créer un [*Application Credentials/Identifiants d'application*](https://docs.openstack.org/keystone/latest/user/application_credentials.html). Il faudra ensuite remplir le fichier *clouds.yml* avec l'identifiant créé sur l'interface Web.

#### Création de l'identifiant
* Naviguer dans *Identité > Identifiants d'application* 
* Cliquer sur *Créer un identifiant d'application*   
![ficherappcred](/img/nova/nova_creer_app_cred.png?classes=shadow)   
* Choisir un nom pour votre identifiant et choisir le rôle *member*, si vous choisissez le rôle *reader*, votre identifiant n'aura que les droits en lecture.
![ficherappcred2](/img/nova/nova_creer_app_cred2.png?classes=shadow)   
* Une fenêtre apparait, vous pouvez directement télécharger le fichier *clouds.yml* pré-rempli avec vos identifiants.
![ficherappcred2](/img/nova/nova_creer_app_cred3.png?classes=shadow)      

Il ne vous reste plus qu'à placer le fichier clouds.yml dans *~/.config/openstack/clouds.yaml*.   
Après avoir [installé le client](/code_form/nova/fondamentaux/installation_client), vous pouvez tester votre configuration en faisant, par exemple :
```bash
openstack server list
```