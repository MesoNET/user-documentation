# Gérer ses clés SSH

## Qu'est-ce qu'une clé SSH

Une clé ssh est un ensemble de deux fichiers, permettant d'établir des clés de chiffrement. Ces deux fichiers constituent:

* La clé privée: **ce fichier ne doit être partagé avec personne, il est strictement privé**
* La clé publique: Ce fichier peut être publiquement distribué à qui vous voulez

`ssh` va crypter la communication en utilisant votre clé privée, le supercalculateur va le décrypter en utilisant votre clé publique. S'il arrive à décrypter on peut être sûr que c'est vous qui êtes connecté-e, puisque vous seul-e possédez la clé privée ! Il est donc possible de vous authentifier grâce à ce système de paires de clés publiques/privées.

En conséquence, la clé privée doit être protégée le mieux possible, et en particulier vous devrez la protéger par un mot de passe (en fait une "passphrase"), afin que si vous vous la faites voler elle ne soit pas utilisable par quelqu'un d'autre que vous.

## Générer sa clé SSH

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="linux" label="GNU Linux" default>

La commande pour générer une clé SSH : 

```Shell
$ ssh-keygen -t ed25519 -f .ssh/turpan
Generating public/private ed25519 key pair.
Enter passphrase (empty for no passphrase): unsuper!#§m0t{[{[DEpaSsSe345
Enter same passphrase again: unsuper!#§m0t{[{[DEpaSsSe345
Your identification has been saved in .ssh/turpan
Your public key has been saved in .ssh/turpan.pub
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
-rw------- 1 manu1 manu1 444 déc.  13 12:05 turpan
-rw-r--r-- 1 manu1 manu1  94 déc.  13 12:05 turpan.pub
```

La commande a permis de créer deux fichiers:
* turpan qui contient la clé privée
* turpan.pub qui contient la clé publique.
Une variante avec RSA si la commande ne fonctionne pas (attention la taille doit être 3072 minimum) :

```
ssh-keygen -t rsa -b 3072 -f .ssh/turpan
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
$ ssh-keygen -t ed25519 -f .ssh/turpan
Generating public/private ed25519 key pair.
Enter passphrase (empty for no passphrase): unsuper!#§m0t{[{[DEpaSsSe345
Enter same passphrase again: unsuper!#§m0t{[{[DEpaSsSe345
Your identification has been saved in .ssh/turpan
Your public key has been saved in .ssh/turpan.pub
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
-rw------- 1 manu1 manu1 444 déc.  13 12:05 turpan
-rw-r--r-- 1 manu1 manu1  94 déc.  13 12:05 turpan.pub
```

La commande a permis de créer deux fichiers:
* turpan qui contient la clé privée
* turpan.pub qui contient la clé publique.
Une variante avec RSA si la commande ne fonctionne pas (attention la taille doit être 3072 minimum) :

```
ssh-keygen -t rsa -b 3072 -f .ssh/turpan
```
  </TabItem>
</Tabs>