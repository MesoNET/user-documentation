---
title: "Se connecter à Juliet"
sidebar_position: 2
---

# Comment se connecter à Juliet

La connexion s'effectue en SSH vers juliet.mesonet.fr.

` ssh nomUtilisateur@juliet.mesonet.fr `


:::caution

L'intégration au portail Gramc ainsi que la mise en place de l'outil de ticketing MesoNET sont en cours. En l'état actuel, pour obtenir un accès à la machine, vous pouvez utiliser la procédure ci-dessous.
 Cette procédure étant encore en développement, soyez vigilants, la documentation n'étant pas toujours claire et les erreurs pouvant être difficiles à rattraper

:::

# Prérequis

Vous avez besoin d'un compte MesoNET valide. Vous pouvez trouver les étapes pour obtenir un compte [ici](https://www.mesonet.fr/documentation/user-documentation/acces/portail).

# Connexion au portail
Connectez-vous au [portail MesoNET](https://www.mesonet.fr/portal/) puis rendez-vous dans votre [profil du portail MesoNET](https://www.mesonet.fr/portal/profile) pour y renseigner votre **login** de préférence.

# Demande d'accès

Vous pouvez ensuite demander accès au pod IA Juliet via le [centre de tickets ROMEO](https://romeo.univ-reims.fr/ticket/open.php)

Pour demander un accès :

- Sélectionnez `Juliet account creation` sous `Help Topic`
- Renseigner votre adresse e-mail
- Ainsi que votre **login** (nom d'utilisateur) dans les détails du ticket.
- Attendez la fermeture du ticket avant de passer à l'étape suivante

# Gestion des clés SSH

Vous avez besoin d'une clé SSH valide. Vous pouvez la générer avec la ligne de commande suivante :

```sh 
ssh-keygen 
```
:::caution

En attendant l'intégration au portail Gramc, les clés SSH entrées dans Gramc ne sont pas visibles de Juliet et vice-versa. 

:::

Allez sur votre liste de clés avec le lien ou en cliquant sur l'icône en haut à droite -> My Keys.

En bas de la liste, cliquez sur `New key`.

Entrez un `Label` pour votre clé afin de l'identifier.

:::info

Les labels ne sont pas uniques et sont utilisés uniquement pour l'information.

:::

Entrez le type et la valeur de votre clé publique sur le champ Clé.

:::note
Exemples des formats attendus :

`ssh-ed25519 ThATiSthEB0DY0FAKeY`

`ssh-rsa ThisTypeOfKeyIsMuchLongerThanThatButYouGetTheIdea`
:::

Vous pouvez activer une clé SSH ou la désactiver en cas de compromission par exemple.

:::caution

⚠ Attention au format des clés, dans l'état actuel, le portail n'est pas en capacité de vérifier leur format (sauts de ligne introduits par un copier/coller) ainsi que les doublons. ⚠



:::
# Activer une clé SSH sur un serveur

Une fois d'un accès vous est accordé sur un serveur, il devrait apparaître sur le [Dashboard, dans My Servers](https://www.mesonet.fr/portal/dashboard)

En cliquant sur l'un des serveurs, vous pouvez associer des clés SSH à ce serveur, en l'activant (selecteur de couleur verte).

:::info
Les clés SSH sont propagées sur juliet toutes les 3 heures.
:::



:::tip

Les clés SSH entrées ne peuvent pas être modifiées ou supprimées. Si vous souhaitez modifier une clé, vous aurez besoin de la révoquer et de créer une nouvelle.

:::




