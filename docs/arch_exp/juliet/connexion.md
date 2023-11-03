---
title: "Se connecter à Juliet (temporaire)"
sidebar_position: 2
---

# Comment se connecter à Juliet

La connexion s'effectue en SSH vers juliet.mesonet.fr.

` ssh nomUtilisateur@juliet.mesonet.fr `


:::caution

L'intégration au portail Gramc est en cours. En l'état actuel, pour obtenir un accès à la machine, vous pouvez utiliser la procédure ci-dessous.
 Cette procédure étant encore en développement, soyez vigilants, la documentation n'étant pas toujours claire et les erreurs pouvant être difficiles à rattraper

:::

# Prérequis

Vous avez besoin d'un compte valide sur MesoNET. Vous pouvez trouver les étapes pour obtenir un compte [ici](https://www.mesonet.fr/documentation/user-documentation/acces/portail).

Vous avez entré un Login dans votre [profil sur votre MesoNET](https://www.mesonet.fr/portal/profile).

Vous avez besoin d'une clé SSH valide. Vous pouvez générer une clé en ligne de commande avec la commande :

```sh 
ssh-keygen 
```

:::caution

En attendant l'intégration au portail Gramc, les clés SSH entrées dans Gramc ne sont pas visibles de Juliet et vice-versa. 
Il faudra donc les entrer à nouveau en suivant les instructions ci-dessous.

:::

# Demande d'accès

Le centre de tickets MesoNET est actuellement en cours de construction. Dans l'attente, vous pouvez demander accès au pod IA Juliet via le [centre de tickets ROMEO](https://romeo.univ-reims.fr/ticket/open.php)

Pour demander un accès :

- Sélectionnez `Juliet account creation` sous `Help Topic`
- Fournissez un adresse e-mail pour contacter l'utilisateur du compte
- Fournissez le nom d'utilisateur dans les détails du ticket.
- Attendez la fermeture du ticket avant de passer à la suite

# Ajouter une clé SSH

Cette étape peut être effectuée avant ou après la précédente.
Allez sur votre liste de clés avec le lien ou en cliquant sur l'icône en haut à droite -> Mes clés.

L'icône en haut à droite.

En bas de la liste, cliquez sur `New key`.
Entrez un `Label` pour votre clé afin d'identifier-la.

:::info

Les labels ne sont pas uniques et sont utilisés uniquement pour l'information.

:::

Entrez le type et la valeur de votre clé publique sur le champ Clé.

:::note
Exemples des formats attendus :

`ssh-ed25519 ThATiSthEB0DY0FAKeY`

`ssh-rsa ThisTypeOfKeyIsMuchLongerThanThatButYouGetTheIdea`
:::

Cochez la case `Valid Key` pour valider votre clé. Vous pouvez avoir autant de clés valides que vous voulez.

:::caution

⚠ Dans l'état actuel, le portail n'a pas de système de sécurité pour détecter des clés SSH non valides ou des doublons. ⚠

⚠ Veuillez vérifier que votre clé est valide avant d'ajouter-la. ⚠

En fonction des outils utilisés, certains caractères de saut de ligne peuvent avoir été introduits dans le texte et doivent être supprimés.

:::
# Activer une clé SSH

Une fois que vous avez été accordé accès à un serveur, il devrait apparaître sur le [Dashboard](https://www.mesonet.fr/portal/dashboard)

En cliquant sur un architecture de calcul, vous pouvez sélectionner les clés SSH activées ou désactivées pour cette architecture.

Pour activer une clé SSH sur juliet, cliquez sur le bouton gris en dessous du libellé de la clé. Le bouton va devenir vert. La clé sera utilisable sur juliet une fois la liste mise à jour.

Pour désactiver une clé SSH, cliquez sur le même bouton. Il va changer de couleur de vert à gris.

:::info
Sur juliet, la liste des clés SSH est mise à jour toutes les 3 heures.
:::

# Désactiver une clé SSH

Pour désactiver une clé SSH, allez sur votre liste de clés avec le lien
ou en cliquant sur l'icône en haut à droite -> `My keys`.

Cliquez sur le libellé de la clé. Enfin, sous `Validity`, cocher `Invalid key`.

:::caution

Cette action va désactiver la clé pour tous les serveurs MesoNET.

⚠ Dans l'état actuel, le portail n'a pas de système de sécurité pour détecter les doublons.

⚠ Si vous désactivez une clé, cela désactivera également ses doublons.

:::

:::tip

Les clés SSH entrées ne peuvent pas être modifiées ou supprimées. Si vous souhaitez modifier une clé, vous aurez besoin de la révoquer et de créer une nouvelle.

:::




