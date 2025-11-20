---
title: "Accéder à Openstack"
sidebar_position: 1
---

Tout ce qui est fait sur Openstack peut se faire : soit graphiquement via un navigateur Web, soit en ligne de commande via le client Python Openstack (dans ce cas voir [Installation du client](/code_form/nova/fondamentaux/installation_client)). Dans des cas plus avancés, on pourra utiliser l'API Openstack avec n'importe quel langage de programmation, ou utiliser *Terraform*.

## Connexion à l'interface Web

Rendez-vous sur l'interface [https://gricad-cloud.univ-grenoble-alpes.fr/](https://gricad-cloud.univ-grenoble-alpes.fr/), puis connectez-vous au dashboard d'OpenStack.
- _Domaine_ :  **Perseus**
- "_login_" et "_mot de passe_" de PERSEUS

![connexion](/img/nova/Nova_Connexion.png?height=400px&classes=shadow)

Si vous souhaitez continuer de manière graphique via le navigateur, vous pouvez suivre le [Quickstart]({{< relref "../basics/quickstart" >}}).

## Connexion en ligne de commande ou via les APIs

{{% notice info %}}
Vous aurez besoin du **fichier RC** de description de votre projet.
Pour récupérer votre fichier RC il faut se connecter sur l'interface web.
**Attention** : chaque projet a son propre fichier.
{{% /notice %}}

#### Récupérer le fichier **RC** de votre projet

Pour cela, cliquez sur votre login en haut à droite de l'interface web.
![fichierRCv3_1](/img/nova/Nova_fichierRCv3_1.png?classes=shadow)
Puis selectionnez le fichier **OpenStack RC** dans le menu déroulant.
![fichierRC](/img/nova/Nova_fichierRC.png?classes=shadow)
Vous obtenez un fichier du nom de **projectName-openrc.sh** : enregistrez-le.


#### Utilisation du fichier RC dans le terminal

Le fichier RC vous servira pour utiliser la ligne de commande **openstack**, un script python, ou tout outil se connectant aux APIs openstack.

Exécutez le fichier, en ligne de commande, à l'endroit où vous l'avez enregistré. Il vous demandera votre mot de passe et positionnera correctement les variables d'environnement qui assureront l'authentification de chaque commande.
``` bash
$ source projectName-openrc.sh
```

#### Alternative avec des fichiers de configuration multi-cloud

[Documentation de clouds.yaml](https://docs.openstack.org/python-openstackclient/latest/configuration/index.html#configuration-files). Attention aux mots de passe en clair dans ces fichiers.
