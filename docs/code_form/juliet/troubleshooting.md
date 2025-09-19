---
title: Troubleshooting
sidebar_position: 7
---

## Problèmes de connexion

### Je n'ai pas de compte créé sur Juliet

Vérifiez que vous avez [un compte MesoNET](https://www.mesonet.fr/documentation/user-documentation/acces/portail) et que vous êtes associé à un projet qui a demandé des heures de calcul sur Juliet.

Vérifiez également que vous avez bien [configuré votre clé SSH](https://www.mesonet.fr/documentation/user-documentation/acces/ssh).

### Je ne sais pas quel est mon identifiant sur Juliet

Vous pouvez retrouver votre identifiant dans l'onglet `Demandeur` du [portail MesoNET](https://acces.mesonet.fr/gramc-meso/) à la ligne de votre projet ayant des heures de calcul attribuées sur Juliet.

:::info

Cet identifiant est le même pour tous vos projet. Si vous avez un autre projet sur Juliet l'identifiant est inchangé.

:::

### Un mot de passe est demandé à la connexion mais je n'en ai jamais défini

Il est probable qu'il y ait un problème avec votre clé SSH. Vérifiez que votre clé SSH est bien à l'endroit indiqué dans votre fichier de configuration. Si vous avez créé votre clé SSH sur une autre machine, vous devez en générer une autre ou copier la clé sur votre nouvelle machine.

Si vous avez défini un chemin particulier pour votre clé ssh qui n'est pas un chemin par défaut (par exemple, .ssh/turpan) il vous faut spécifier le chemin de la clé

```
ssh nomUtilisateur@juliet.mesonet.fr -i cheminVersLaCle
```

## Problème de lancement de job

### Mon job reste bloqué sur "attribution des ressources" ou Pending

Il se peut que les ressources soient réservées ou saturées. Vous pouvez voir les dates de réservation de noeuds Juliet en tapant la commande 

```
sinfo -T
```

et l'état d'utilisation des machines avec la commande

```
squeue
``` 


