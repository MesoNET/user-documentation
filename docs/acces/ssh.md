---
title: "Gérer ses clés SSH"
sidebar_position: 2
---

# Gérer ses clés SSH

## Qu'est-ce qu'une clé SSH ?

Une clé ssh est un ensemble de deux fichiers, permettant d'établir des clés de chiffrement. Ces deux fichiers constituent:

* La clé privée: **ce fichier ne doit être partagé avec personne, il est strictement privé**
* La clé publique: ce fichier peut être publiquement distribué à qui vous voulez

`ssh` va chiffrer la communication en utilisant votre clé privée, le supercalculateur va le déchiffrer en utilisant votre clé publique. S'il arrive à déchiffrer on peut être sûr que c'est vous qui êtes connecté-e, puisque vous seul-e possédez la clé privée ! Il est donc possible de vous authentifier grâce à ce système de paires de clés publiques/privées.

En conséquence, la clé privée doit être protégée le mieux possible, et en particulier vous devrez la protéger par un mot de passe (en fait une "passphrase"), afin que si vous vous la faites voler elle ne soit pas utilisable par quelqu'un d'autre que vous.

## Générer sa clé SSH  {#gen-sshkey}

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="linux" label="GNU Linux" default>

La commande pour générer une clé SSH :

```Shell
$ ssh-keygen -t ed25519 -f .ssh/id_ed25519
Generating public/private ed25519 key pair.
Enter passphrase (empty for no passphrase): unsuper!#§m0t{[{[DEpaSsSe345
Enter same passphrase again: unsuper!#§m0t{[{[DEpaSsSe345
Your identification has been saved in .ssh/id_ed25519
Your public key has been saved in .ssh/id_ed25519.pub
The key fingerprint is:
SHA256:wB4qeovtHVtN63JRDrQMvkdHbr2OUdCj3/Rrb52zY40 manu1@delman
The key's randomart image is:
+--[ED25519 256]--+
|           .     |
|     .. . o o    |
|     .++ + + .   |
|     o.o= * o .  |
|  . . .oS* o + . |
| . .  .oo.o o . .|
|. . . ..o. +   .=|
| + o +... . . EB+|
|..+ o  o.     oo*|
+----[SHA256]-----+
$ ls -l .ssh
total 8
-rw------- 1 manu1 manu1 444 déc.  13 12:05 .ssh/id_ed25519
-rw-r--r-- 1 manu1 manu1  94 déc.  13 12:05 .ssh/id_ed25519.pub
```

La commande a permis de créer deux fichiers:
* `id_ed25519` qui contient la clé privée
* `id_ed25519.pub` qui contient la clé publique.

Une variante avec RSA si la commande ne fonctionne pas (attention la taille doit être 3072 minimum) :

```
ssh-keygen -t rsa -b 3072 -f .ssh/id_rsa
```
  </TabItem>
  <TabItem value="windows" label="Windows">
Sous Windows vous devez installer un client ssh. CALMIP recommande l'usage de MobaXterm (Home Edition).

Téléchargez la version portable sur ce site : https://mobaxterm.mobatek.net puis il vous suffit d'extraire les fichiers contenus dans l'archive .zip à l'emplacement de votre choix. Lancez ensuite l'application en double-cliquant sur le fichier MobaXterm_Personal_22.x.zip.

Pour générer votre paire de clé ssh (privée/publique) il faut utiliser l'outil MobaKeyGen :

![Capture d'écran de MobaXTerm](/img/Moba_sshkeygen.png)

Dans la fenêtre qui s'affiche, sélectionnez le paramètre EdDSA (Ed25519) :

![Capture d'écran de génération de clé](/img/Moba_sshkgeddsa.png)

Puis cliquez sur 'Generate' et déplacez votre souris dans le cadre jusqu'à ce que la barre verte soit remplie. Une fois le couple de clés générées vous pouvez modifier le champ 'Key comment' pour mettre un nom plus parlant (Exemple : Turpan) et ajouter une passphrase pour protéger vos clés. Ensuite, vous devez sauver la clé privée en cliquant sur le bouton 'Save private key' et conserver le fichier créé, vous en aurez besoin pour vous connecter à Turpan. Enfin vous devez sauver la clé publique en cliquant sur le bouton 'Save public key'

Laissez la fenêtre ouverte pour copier/coller le contenu du cadre :

![Capture d'écran pour copier/ocller la clé publique](/img/Moba_sshkgpaste.png)

Vous pourrez ainsi l'ajouter à votre trousseau de clés à l'étape suivante.
  </TabItem>
  <TabItem value="macosx" label="Mac OS X">
La commande pour générer une clé SSH :

```Shell
$ ssh-keygen -t ed25519 -f .ssh/id_ed25519
Generating public/private ed25519 key pair.
Enter passphrase (empty for no passphrase): unsuper!#§m0t{[{[DEpaSsSe345
Enter same passphrase again: unsuper!#§m0t{[{[DEpaSsSe345
Your identification has been saved in .ssh/id_ed25519
Your public key has been saved in .ssh/id_ed25519.pub
The key fingerprint is:
SHA256:wB4qeovtHVtN63JRDrQMvkdHbr2OUdCj3/Rrb52zY40 manu1@delman
The key's randomart image is:
+--[ED25519 256]--+
|           .     |
|     .. . o o    |
|     .++ + + .   |
|     o.o= * o .  |
|  . . .oS* o + . |
| . .  .oo.o o . .|
|. . . ..o. +   .=|
| + o +... . . EB+|
|..+ o  o.     oo*|
+----[SHA256]-----+
$ ls -l .ssh
total 8
-rw------- 1 manu1 manu1 444 déc.  13 12:05 id_ed25519
-rw-r--r-- 1 manu1 manu1  94 déc.  13 12:05 id_ed25519.pub
```

La commande a permis de créer deux fichiers:
* turpan qui contient la clé privée
* turpan.pub qui contient la clé publique.
Une variante avec RSA si la commande ne fonctionne pas (attention la taille doit être 3072 minimum) :

```
ssh-keygen -t rsa -b 3072 -f .ssh/id_rsa
```
  </TabItem>
</Tabs>



## Déposer sa clé ssh sur le portail
Pour déposer votre clé ssh, il faut se connecter, sur le portail MesoNET : https://acces.mesonet.fr. Cliquez sur le bouton **Connexion** et identifiez vous de la même façon que lors de la création de votre compte, typiquement via eduGAIN.

Une fois authentifié, cliquez sur l'icône 'Utilisateur' en haut à droite, puis sur 'Clés ssh'.
Cela ouvre la page de gestion des clés SSH.

![Capture d'écran du formulaire de gestion des clés SSH](/img/portail-cles-ssh.png)

Pour ajouter une clé, cliquer sur le bouton "Ajouter une clé" puis renseignez les champs suivants :

![Capture d'écran du formulaire de gestion des clés SSH](/img/portail-ajouter-cle.png)

* **Nom de la clé**: une chaine de caractère permettant d'identifier la clé de manière unique
* **Votre clé publique ssh**: La chaine de caractère correspondant à votre clé ssh publique (qui est le contenu du fichier .pub créé lors de la [génération de la clé ssh](#gen-sshkey))

Cliquez enfin sur le bouton "ajouter" pour finaliser l'ajout de la clé dans votre trousseau.

## Associer sa clé ssh à un compte dans un projet

Une fois la clé ssh ajoutée dans le trousseau, vous pouvez l'associer à un compte en revenant sur la [liste des projets](https://acces.mesonet.fr/gramc-meso/projet/accueil). Sur cette page, vous pouvez voir la liste des projets sur lesquels vous avez des comptes sur les machines.







Pour associer une clé ssh de votre trousseau à un compte, il faut cliquer sur "Ajouter une clé SSH".

![Liste des projets et comptes](/img/portail-associer-cle.png)

Si votre projet inclut plusieurs machines, vous verrez une ligne par machine :

![Liste des projets et comptes](/img/portail-associer-cle-multi.png)



Cela ouvre l'écran permettant d'associer une clé ssh de son trousseau à ce compte.

![Liste des projets et comptes](/img/portail-accept-cgu.png)

Pour associer la clé, il faut lire et accepter les conditions générales d'utilisation de la machine (CGU), sélectionner la clé à associer puis cliquer sur le bouton "Modifier".


:::info

Les clés en attente de déploiement sont signalées par un pictogramme : ⚠️

Lorsque la clé est déployée, le pictogramme ⚠️ disparaît. Le délai de synchronisation dépend de la machine cible.
Si le temps d'attente vous semble excessif, merci d'envoyer un mail précisant votre nom, le projet et la machine à [support@mesonet.fr](mailto:support@mesonet.fr)

:::
