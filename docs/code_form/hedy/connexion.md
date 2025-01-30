---
title: "Se connecter à Hedy"
sidebar_position: 2
---

#Se connecter à Hedy

Vous avez besoin d'un compte MesoNET valide. Vous pouvez trouver les étapes pour obtenir un compte [ici](https://www.mesonet.fr/documentation/user-documentation/acces/portail).

Vous devez également participer à un projet MesoNET ayant demandé l'utilisation de la machien Hedy

Pour se connecter, il faut au prélable disposer d’un compte MesoNET et avoir déposé un projet demandant l’utilisation de la machine Hedy. 

La connexion s’effectue obligatoirement en ssh. Des clés ssh doivent avoir été créés sur votre poste client et la clé publique doit être déposée sur le portail MesoNET (voir Gérer ses clés SSH). 

La commande de connexion est :  
            ssh user@hedy.mesocentre.univ-amu.fr -p portnumber

Il est possible de créer un fichier de configuration ssh pour renseigner les informations de connexion. Ce fichier nommé config est à placer sur le poste de travail, dans le répertoire /home/user/.ssh sur un système Unix ou C:\Users\username\.ssh sous Windows. 
Le contenu minimal est :
```
Host hedy
    Hostname hedy.mesocentre.univ-amu.fr
    User **user**
    Port **portnumber**
    IdentityFile **~/.ssh/nom-de-ma-clé-privée**
    IdentitiesOnly=yes
```shell
**user** est votre identifiant d’utilisateur sur MesoNET. Vous pouvez avoir plusieurs identifiant MesoNET
**portnumber** est le numéro de port qui vous a été communiqué dans le message électronique de bienvenue. Comme ce n’est pas le port standard, il se peut qu’une autorisation soit nécessaire sur le firewall de votre ordinateur ou sur celui du site depuis lequel vous vous connectez.
**~/.ssh/nom-de-ma-clé-privée** il s'agit de la clé privée correspondant à la clé publique déposée sur le portail mesoent (par ex: ssh ~/.ssh/id_ed25519)

