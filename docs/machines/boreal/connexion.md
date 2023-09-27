---
title: "Se connecter à Boréale"
sidebar_position: 2
---

# Comment se connecter à Boréale

La connexion s'effectue en SSH vers les frontales regroupées sous le nom boreale.criann.fr.

**Syntaxe en ligne de commande** : `ssh -l monlogin boreale.criann.fr` (en remplaçant `monlogin` par votre identifiant). Les environnements Linux et Mac intègrent nativement le protocole SSH via un terminal. Si vous êtes sous environnement Windows, nous vous recommandons d'utiliser le logiciel [MobaXTerm](https://mobaxterm.mobatek.net/) qui vous apportera un environnement de travail complet basé du protocole ssh (export d'écran, transfert de fichiers).

Lors de votre première connexion, le changement de mot de passe vous est imposé. Lisez soigneusement ce qui vous est demandé : `(current) Password` correspond au mot de passe actuel et non au nouveau mot de passe souhaité...

Les personnalisations (variables d'environnement, alias) se font avec un fichier `~/.bash_profile` (et non `~/.bashrc`) à créer.

L'utilisateur a un espace de travail personnel dans `/home/project_name/username`.


:::info
Si votre structure a un **firewall** limitant les flux en sortie de votre site, voici les ports à ouvrir :

- Connexions SSH (port 22) vers les 2 frontales derrière le nom `boreale.criann.fr`
  - IPv4 : `195.221.27.114` (`boreale-front1.criann.fr`) à `195.221.27.115` (`boreale-front2.criann.fr`)
Concernant les sessions de visualisation à distance, pour connaître les IP et les ports à ouvrir, [merci de contacter le support par mail](mailto:support-boreale@criann.fr).
:::