---
title: Troubleshooting
sidebar_position: 6
---

## Problèmes de connexion

### Je n'ai pas de compte créé sur Juliet

Vérifiez que vous avez [un compte MesoNET](https://www.mesonet.fr/documentation/user-documentation/acces/portail) et que vous êtes associé à un projet qui a demandé des heures de calcul sur Juliet.

Vérifiez également que vous avez bien [configuré votre clé SSH](https://www.mesonet.fr/documentation/user-documentation/acces/ssh).

### Je ne sais pas quel est mon identifiant sur Juliet

Vous pouvez retrouver votre identifiant dans l'onglet `Demandeur` du [portail MesoNET](https://acces.mesonet.fr/gramc-meso/) à la ligne de votre projet ayant des heures de calcul attribuées sur Juliet.

### Un mot de passe est demandé à la connexion mais je n'en ai jamais défini

Il est probable qu'il y ait un problème avec votre clé SSH. Vérifiez que votre clé SSH est bien à l'endroit indiqué dans votre fichier de configuration. Si vous avez créé votre clé SSH sur une autre machine, vous devez en générer une autre.

## Problème de lancement de job

### Mon job reste bloqué sur "attribution des ressources"

Il se peut que les ressources soient réservées ou saturées. Vous pouvez voir les dates de réservation de noeuds Juliet en tapant la commande 

```
sinfo -T
```

et l'état d'utilisation des machines avec la commande

```
squeue
``` 


