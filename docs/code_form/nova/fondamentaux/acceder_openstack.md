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

:::info 
L'avantage du fichier *clouds.yml* est qu'il peut contenir différents Clouds Openstack, différents projets, différents utilisateurs.
:::

### Récupérer les fichiers **RC** ou *clouds.yml* de votre projet

Pour cela, cliquez sur votre login en haut à droite de l'interface web.   
    
![fichierRC](/img/nova/Nova_fichierRC.png?classes=shadow)   