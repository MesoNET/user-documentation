---
title: "Se connecter à Arctic"
sidebar_position: 2
---

# Comment se connecter à Arctic

La connexion s'effectue en SSH vers la frontale de nom **arctic.criann.fr**

**Syntaxe en ligne de commande** : `ssh -l monlogin arctic.criann.fr` (en remplaçant `monlogin` par votre identifiant). Les environnements Linux et Mac intègrent nativement le protocole SSH via un terminal. Si vous êtes sous environnement Windows, nous vous recommandons d'utiliser le logiciel [MobaXTerm](https://mobaxterm.mobatek.net/) qui vous apportera un environnement de travail complet basé du protocole ssh (export d'écran, transfert de fichiers).

Les connexions se font par clé ssh ou par mot de passe initial à modifier à la première connexion (cas de comptes d'étudiants pour TP ou mini-projet de projet d'enseignement). Les administrateurs d'Arctic fournissent les informations nécessaires aux porteurs et utilisateurs de projet lors des demandes et créations de compte.

<!---
Lors de votre première connexion, le changement de mot de passe vous est imposé. Lisez soigneusement ce qui vous est demandé : `(current) Password` correspond au mot de passe actuel et non au nouveau mot de passe souhaité...

Les personnalisations (variables d'environnement, alias) se font avec un fichier `~/.bash_profile` (et non `~/.bashrc`) à créer.

L'utilisateur a un espace de travail personnel dans `/home/2500001/mesonet_project/username`.
--->

:::info
Si votre structure a un **firewall** limitant les flux en sortie de votre site, voici les ports à ouvrir :

- Connexions SSH (port 22) vers la frontale de nom `arctic.criann.fr`
  - IPv4 : `195.xxx.xx.xxx`
Concernant les sessions de visualisation à distance, pour connaître les IP et les ports à ouvrir, [merci de contacter le support par mail](mailto:support@criann.fr).
:::
