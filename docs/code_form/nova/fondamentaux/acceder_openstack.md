---
title: "Accéder à Openstack"
sidebar_position: 1
---

Tout ce qui est fait sur Openstack peut se faire : soit graphiquement via un navigateur Web, soit en ligne de commande via le client Python Openstack (dans ce cas voir [Connexion avec le CLI](/code_form/nova/fondamentaux/connexion_cli)). Dans des cas plus avancés, on pourra utiliser l'API Openstack avec n'importe quel langage de programmation, ou utiliser *Terraform*.

## Connexion à l'interface Web

Rendez-vous sur l'interface [https://gricad-cloud.univ-grenoble-alpes.fr/](https://gricad-cloud.univ-grenoble-alpes.fr/), puis connectez-vous au dashboard d'OpenStack.
- Sélectionnez *Authenticate with Mesonet*
- Cliquez sur *Se connecter*

![connexion](/img/nova/Nova_Connexion.png?height=400px&classes=shadow)    

:::info
Il n'est pas nécessaire de renseigner le champ *Domaine*.
:::

### Sélection du projet

En haut à gauche, choisissez le projet dans lequel vous souhaitez vous positionner. Par défaut, vous avez un projet à votre nom, dans lequel vous ne pouvez pas créer de VM.

![selection_projet](/img/nova/nova_selection_projet.png?height=400px&classes=shadow)      

Si vous souhaitez continuer de manière graphique via le navigateur, vous pouvez suivre le [Quickstart](/code_form/nova/fondamentaux/quickstart).
