---
title: "Connexion avec le CLI"
sidebar_position: 3
---


Pour utiliser OpenStack en ligne de commande il faut installer le client **openstack** sur votre machine, qui est un programme Python.

# Environnement virtuel

:::note
L'installation dans un environnement virtuel spécifique est facultative mais recommandée par les bonnes pratiques.
:::

Le module *venv* est habituellement installé dans les versions récentes de Python. Créez votre environnement virtuel, par exemple gricad-nova-env.
``` bash
python -m venv gricad-nova-env
```

Enfin, activez cet environnement virtuel.
```bash
source gricad-nova-env/bin/activate
```
   

# CLI Openstack

## Installation du client

Installez le client openstack, [documentation du module](https://pypi.org/project/python-openstackclient/).
``` bash
pip install python-openstackclient
```

Vous pouvez vérifier que le client est fonctionnel .

``` bash
openstack --version
```

## Authentification

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

Vous pouvez tester votre configuration en faisant, par exemple :
```bash
openstack server list
```

#### Mise à jour de modules
Il faudra de temps en temps mettre à jour les modules de votre environnement car ils ne sont pas gérés par la distribution.
``` bash
pip install -U MODULE_NAME
```
