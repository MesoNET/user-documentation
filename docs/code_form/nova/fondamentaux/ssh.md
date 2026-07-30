---
title: "Gestion des clés SSH"
sidebar_position: 3
---

## Préparer l'accès ssh aux VMs
L'accès aux machines virtuelles que vous allez créer se fait par clé ssh.
Le principe est simple, la clé privée reste sur votre poste de travail et la clé publique associée est mise dans la liste des clés autorisées pour se connecter.
Si vous ne vous êtes jamais connecté en ssh, vous allez devoir générer une paire de clés.
Si vous avez déjà une paire de clés, vous pouvez l'utiliser.

Il est conseillé de générer une ou plusieurs paires de clés dédiées :
- à la plateforme Nova
- par projet
- par instance de machine virtuelle

#### Création d'une paire de clé
Le niveau minimum de sécurité est d'avoir une clé RSA de 4096 bits protégée par mot de passe et d'utiliser par la suite un agent ssh pour ne pas avoir à taper ce mot de passe à chaque commande.
``` bash
ssh-keygen -t rsa -b 4096
```

``` text
Generating public/private rsa key pair.
Enter file in which to save the key (/home/noemie/.ssh/id_rsa):
```

Entrez un nom pour la paire de clé, par exemple *id_rsa_nova*.

Ensuite, une passphrase (mot de passe) vous sera demandée deux fois pour protéger la clé privée.
``` bash
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in id_rsa_nova.
Your public key has been saved in id_rsa_nova.pub.
The key fingerprint is:
SHA256:q+zRYSQS1dBU0iEuy6Vs1IhqBwtiiNQeBKuZMV/+U4A noemie@noemie-HP-EliteBook-820-G3
The key's randomart image is:
+---[RSA 4096]----+
| o+...o=+oo.     |
|+ .o + +oo.      |
|Boo E * =        |
|+B B = O         |
|+ = o * S        |
| . . o + o       |
|      + o        |
|     . +         |
|     .+          |
+----[SHA256]-----+
```
Félicitations, vous venez de créer une paire de clé (*id_rsa_nova* , *id_rsa_nova.pub*).
Les clés sont générées dans le **dossier caché .ssh/** à la racine de votre répertoire personnel (~).
La clé privée, *id_rsa_nova*, sauvegarde l'identification et **ne doit être divulguée sous aucun prétexte**.
C'est la clé publique, *id_rsa_nova.pub*, qui sera utilisée lors de la création des machines virtuelles pour accéder en SSH au compte par défaut.

#### Agent ssh
Si on veut éviter de saisir la passphrase à chaque connexion à une instance on peut passer par le **ssh-agent**.
Il suffit de renseigner la passphrase au ssh-agent avec la commande *ssh-add*.

``` bash
ssh-add
```

```text
Enter passphrase for /home/<nom_utilisateur>/.ssh/id_rsa:
Identity added: /home/<nom_utilisateur>/.ssh/id_rsa (/home/<nom_utilisateur>/.ssh/id_rsa)
```
