---
title: "Se connecter à Juliet"
sidebar_position: 2
---


# Prérequis

Vous avez besoin d'un compte MesoNET valide. Vous pouvez trouver les étapes pour obtenir un compte [ici](https://www.mesonet.fr/documentation/user-documentation/acces/portail). 
Les personnels non-académiques peuvent prendre contact avec Florence Draux (florence.draux@univ-reims.fr)

:::caution

Si vous obtenez l'accès à un second, troisième, etc... projet Juliet, votre nom d'utilisateur sera le même que le premier. Du fait de soucis technique, cela peut ne pas s'afficher dans l'onglet `Demandeur` du portail. 

:::


# Comment se connecter à Juliet

La connexion s'effectue en SSH vers juliet.mesonet.fr.

` ssh nomUtilisateur@juliet.mesonet.fr `

Si vous utilisez un fichier de configuration vous devez indiquer l'endroit où se trouve votre clé SSH. Cette clef SSH doit avoir été renseignée sur le portail MesoNET (voir [Gérer ses clefs SSH](http://localhost:3000/documentation/user-documentation/acces/ssh))

```
Host juliet
  Hostname juliet.mesonet.fr
  IdentityFile [CheminVersLeFichierDeClefSSH]
  IdentitiesOnly=yes
  User [UserName]
```

# Support pour les utilisateurs non-académiques

Pour obtenir de l'assistance en cas de problème, vous pouvez ouvrit un ticket avec [l'outil de ticketing de ROMEO](https://romeo-ticket.univ-reims.fr/open.php) en sélectionnant la rubrique d'aide `MesoNET`.

Pour les utilisateurs académiques, l'outil de ticketing reste [https://tickets.mesonet.fr/](https://tickets.mesonet.fr/)






