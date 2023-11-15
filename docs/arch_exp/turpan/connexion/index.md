---
title: "Se connecter à Turpan"
sidebar_position: 2
---

# Comment se connecter à Turpan

:::caution
La connexion sur la machine de prototypage Turpan se fait obligatoirement par clé SSH.**
:::caution

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="linux" label="GNU Linux/MacOS" default>
Ce qui suit suppose que vous avez généré et déployé une clé ssh sur votre compte Turpan, [comme il est indiqué ici](../../../acces/ssh.md). 

Écrivez un fichier appelé .ssh/config (ou complétez-le s'il existe déjà !) de la manière suivante:

```Shell
Host turpanlogin
   Hostname turpanlogin.calmip.univ-toulouse.fr
   IdentityFile ~/.ssh/votre_cle_ssh_privee
   IdentitiesOnly=yes
   User votre_nom_d_utilisateur

Host turpanlogin1
   Hostname turpanlogin1.calmip.univ-toulouse.fr
   IdentityFile ~/.ssh/votre_cle_ssh_privee
   IdentitiesOnly=yes
   User votre_nom_d_utilisateur

Host turpanlogin2
   Hostname turpanlogin2.calmip.univ-toulouse.fr
   IdentityFile ~/.ssh/votre_cle_ssh_privee
   IdentitiesOnly=yes
   User votre_nom_d_utilisateur
```

Bien sûr vous devrez remplacer `votre_nom_d_utilisateur` par le nom d'utilisateur qui vous a été donné sur Turpan.

Et vous devrez remplacer `votre_cle_ssh_privee` par le nom de fichier que vous avez choisi lors de la création de votre clé ssh.

Dès lors, à partir des réseaux locaux autorisés, vous pouvez vous connecter sur Turpan par:

```
ssh -XY turpanlogin
```
Une fois connecté vous êtes sur une des frontales de connexion de Turpan.
  </TabItem>
  <TabItem value="windows" label="Windows">
Sous Windows vous devez installer un client ssh. CALMIP recommande l'usage de MobaXterm (Home Edition). 

Téléchargez la version portable sur ce site : https://mobaxterm.mobatek.net puis il vous suffit d'extraire les fichiers contenus dans l'archive .zip à l'emplacement de votre choix. Lancez ensuite l'application en double-cliquant sur le fichier MobaXterm_Personal_22.x.zip.

Cliquez sur le bouton 'Session' puis sur le bouton SSH. Remplissez les informations de la connexion ssh :

Remote Host : turpanlogin.calmip.univ-toulouse.fr

Specify Username : monloginturpan (à remplacer par votre propre nom d'utilisateur)

Cliquez sur l'onglet 'Advanced SSH settings' et cochez la case 'Use private key'. Sélectionnez alors le fichier .ppk que [vous avez sauvegardé lors de la création de votre clé ssh.](../../../acces/ssh.md)

![Capture d'écran de MobaXTerm](/img/Moba_session.png)

Cliquez sur OK.

Vous pouvez désormais lancer une session SSH sur Turpan en double-cliquant sur le Bookmark ainsi créé :

![Capture d'écran de génération de clé](/img/Moba_bookmark.png)
  </TabItem>
</Tabs>

## À partir d'une adresse non autorisée

Si votre adresse IP n’est pas autorisée, **vous ne pouvez pas vous connecter**. Normalement vous dépendez d'un laboratoire de recherche : si vous êtes dans votre laboratoire l'adresse IP de celui-ci est probablement autorisée, si ce n'est pas le cas veuillez nous contacter.

Si vous êtes à l'extérieur, connectez-vous au vpn de votre laboratoire, votre adresse IP sera dès lors autorisée.

## Se connecter aux équipements graphiques

Vous pouvez visualiser vos données ou résultats de calculs sans devoir les déplacer de la machine Turpan à l'aide de [cette documentation](./visu.md).

## Transférer des fichiers entre Turpan et votre poste de travail

La procédure pour envoyer des fichiers sur Turpan, ou récupérer sur votre poste de travail les fichiers déposés sur Turpan [est ici](./transfert.md) (la procédure est la même que pour le calculateur Olympe Du CALMIP).

## Changer son mot de passe
On ne peut pas se connecter sur Turpan avec un mot de passe, il faut utiliser une [clé ssh](../../../acces/ssh.md)

