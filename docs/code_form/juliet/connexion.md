---
title: "Se connecter à Juliet"
sidebar_position: 2
---

:::caution

L'intégration au portail Gramc ainsi que la mise en place de l'outil de ticketing MesoNET sont en cours. Sauf indication contraire, merci d'utiliser la [documentation officielle](https://www.mesonet.fr/documentation/user-documentation/acces/portail)

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

:::caution

L'intégration au portail Gramc est terminée. Pour les utilisateurs académiques suivez [la procédure normale de connexion](https://www.mesonet.fr/documentation/user-documentation/acces/portail)

La mise en place de l'outil de ticketing MesoNET est en cours.
:::

# Prérequis

Vous avez besoin d'un compte MesoNET valide. Vous pouvez trouver les étapes pour obtenir un compte [ici](https://www.mesonet.fr/documentation/user-documentation/acces/portail). 
Les personnels non-académiques peuvent prendre contact avec Florence Draux (florence.draux@univ-reims.fr)





