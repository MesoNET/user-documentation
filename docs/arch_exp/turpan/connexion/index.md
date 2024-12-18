---
title: "Se connecter à Turpan"
sidebar_position: 2
---

# Comment se connecter à Turpan

:::caution
**La connexion sur la machine de prototypage Turpan se fait obligatoirement par clé SSH.**
:::caution

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="linux" label="GNU Linux/MacOS" default>

Ce qui suit suppose que vous avez généré et déployé une clé ssh sur votre compte Turpan. La génération est expliqué en détail sur [la page dédiée à l'utilisation du portail](../../../acces/ssh.md).

Écrivez un fichier appelé `.ssh/config` (ou complétez-le s'il existe déjà !) de la manière suivante:

>```shell
># La configuration suivante est indispensable pour utiliser les outils
># runVisuSession, runJupyterSession, runTensorboardSession sur turpan
>Host turpan turpanlogin turpanlogin.calmip.univ-toulouse.fr
>   Hostname turpanlogin.calmip.univ-toulouse.fr
>   IdentityFile ~/.ssh/votre_cle_ssh_privee
>   IdentitiesOnly=yes
>   User votre_nom_d_utilisateur
>
># Configuration par frontale
>Host turpanlogin1
>   Hostname turpanlogin1.calmip.univ-toulouse.fr
>   IdentityFile ~/.ssh/votre_cle_ssh_privee
>   IdentitiesOnly=yes
>   User votre_nom_d_utilisateur
>
>Host turpanlogin2
>   Hostname turpanlogin2.calmip.univ-toulouse.fr
>   IdentityFile ~/.ssh/votre_cle_ssh_privee
>   IdentitiesOnly=yes
>   User votre_nom_d_utilisateur
>```

Bien sûr vous devrez remplacer `votre_nom_d_utilisateur` par le nom d'utilisateur qui vous a été donné sur Turpan.

Et vous devrez remplacer `votre_cle_ssh_privee` par le nom de fichier que vous avez choisi lors de la création de votre clé ssh.

Dès lors, à partir des réseaux locaux autorisés, vous pouvez vous connecter sur Turpan par:

```shell
ssh -XY turpanlogin
```

Une fois connecté vous êtes sur une des frontales de connexion de Turpan.

  </TabItem>
  <TabItem value="windows" label="Windows">

Sous Windows vous devez installer un client ssh. CALMIP recommande l'usage de MobaXterm (Home Edition). 

Téléchargez la version portable sur ce site : https://mobaxterm.mobatek.net puis il vous suffit d'extraire les fichiers contenus dans l'archive .zip à l'emplacement de votre choix. Lancez ensuite l'application en double-cliquant sur le fichier MobaXterm_Personal_22.x.zip.

:::tip

En téléchargement sur http://mobaxterm.mobatek.net/downlo.... Une version portable est disponible, il n’est pas nécessaire d’être administrateur de son poste de travail pour l’installer. On peut aussi utiliser putty associé à Xwin32

:::

Cliquez sur le bouton 'Session' puis sur le bouton SSH. Remplissez les informations de la connexion ssh :

>```
>Remote Host : turpanlogin.calmip.univ-toulouse.fr
>```

Specify Username : monloginturpan (à remplacer par votre propre nom d'utilisateur)

Cliquez sur l'onglet 'Advanced SSH settings' et cochez la case 'Use private key'. Sélectionnez alors le fichier .ppk que [vous avez sauvegardé lors de la création de votre clé ssh.](../../../acces/ssh.md)

![Capture d'écran de MobaXTerm](/img/turpan/Moba_session.png)

Cliquez sur OK.

Vous pouvez désormais lancer une session SSH sur Turpan en double-cliquant sur le Bookmark ainsi créé :

![Capture d'écran de génération de clé](/img//turpan/Moba_bookmark.png)

  </TabItem>
</Tabs>

## À partir d'une adresse non autorisée

Si votre adresse IP n’est pas autorisée, **vous ne pouvez pas vous connecter**. Normalement vous dépendez d'un laboratoire de recherche : si vous êtes dans votre laboratoire l'adresse IP de celui-ci est probablement autorisée, si ce n'est pas le cas veuillez nous contacter.

Si vous êtes à l'extérieur, connectez-vous au vpn de votre laboratoire, votre adresse IP sera dès lors autorisée.


## Se connecter en utilisant Vscode 
Utiliser Visual Studio Code Remote - SSH avec Turpan simplifie votre flux de travail en permettant l'édition directe de code avec toutes les fonctionnalités de VS Code, telles qu’IntelliSense, le débogage et les extensions. Le terminal intégré vous permet d'exécuter des scripts SLURM et de gérer les fichiers directement sur Turpan sans changer d’outil.

Cette configuration élimine les transferts de fichiers fréquents, car vous pouvez éditer et tester les fichiers directement sur turpan. Cette approche améliore la productivité et simplifie la gestion des fichiers.

Visual Studio Code doit être installé sur votre machine locale. Après avoir transféré votre projet une première fois, comme décrit précédemment, vous pouvez ensuite effectuer des modifications continues en utilisant:
```bash
code --remote ssh-remote+turpanlogin /path/on/turpan/mon_projet
```

Vous pouvez également ouvrir VS Code et accéder facilement à toutes les machines auxquelles vous vous êtes connecté ainsi qu'à tous vos projets, avec le même environnement sauvegardé. Pour cela, utilisez l'onglet Remote Explorer situé à droite ([Tutoriel pour en savoir plus](https://code.visualstudio.com/docs/remote/ssh)).

## Se connecter aux équipements graphiques

Vous pouvez visualiser vos données ou résultats de calculs sans devoir les déplacer de la machine Turpan à l'aide de [cette documentation](./visu.md).

## Transférer des fichiers entre Turpan et votre poste de travail

La procédure pour envoyer des fichiers sur Turpan, ou récupérer sur votre poste de travail les fichiers déposés sur Turpan [est ici](./transfert.md) (la procédure est la même que pour le calculateur Olympe Du CALMIP).

## Changer son mot de passe
On ne peut pas se connecter sur Turpan avec un mot de passe, il faut utiliser une [clé ssh](../../../acces/ssh.md)