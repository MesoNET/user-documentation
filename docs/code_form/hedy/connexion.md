---
title: "Se connecter à Hedy"
sidebar_position: 2
---

# Se connecter à Hedy

Vous avez besoin d'un compte MesoNET valide. Vous pouvez trouver les étapes pour obtenir un compte [ici](https://www.mesonet.fr/documentation/user-documentation/acces/portail).

Vous devez également participer à un projet MesoNET ayant demandé l'utilisation de la machine Hedy. Le dépôt de projet se fait [ici](https://www.mesonet.fr/documentation/user-documentation/acces/projets/).

La connexion s’effectue obligatoirement par clés ssh. Elles doivent avoir été créés sur votre poste client et la clé publique doit être déposée sur le portail MesoNET ([Gérer ses clés SSH)](https://www.mesonet.fr/documentation/user-documentation/acces/ssh/). 

Depuis un terminal, la commande pour se connecter est :  
```
ssh user@hedy.mesocentre.univ-amu.fr -p portnumber
```

Il est recommandé de créer un fichier indiquant les informations de connexion ssh. Ce fichier nommé config est à placer sur le poste de travail, dans le répertoire `/home/user/.ssh` sur un système Unix ou `C:\Users\username\.ssh` sous Windows. 

Le contenu minimal est :
```
Host hedy
    Hostname hedy.mesocentre.univ-amu.fr
    User user
    Port portnumber
    IdentityFile ~/.ssh/nom-de-ma-clé-privée
    IdentitiesOnly=yes
```
**user** est votre identifiant utilisateur sur MesoNET. Vous pouvez avoir plusieurs identifiants MesoNET, un par machine et un par projet, il faut veiller à renseigner l'identifiant correspondant.

**portnumber** est le numéro de port qui vous a été communiqué dans le message électronique de bienvenue. 
Comme ce n’est pas le port standard, il se peut qu’une autorisation soit nécessaire sur le firewall de votre ordinateur ou sur celui du site depuis lequel vous vous connectez.

**~/.ssh/nom-de-ma-clé-privée** il s'agit de la clé privée correspondant à la clé publique déposée sur le portail MesoNET (par ex: `~/.ssh/id_ed25519`)

Une fois le fichier config correctement créé, il est possible de se connecter à la machine Hedy simplement avec la commande :
```
ssh hedy
```
N'oubliez pas de remplacer le mot `user` par votre propre identifiant utilisateur.
