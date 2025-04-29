---
title: "Se connecter à Zen"
sidebar_position: 3
---

# Comment se connecter à Zen

:::caution Attention

La connexion au cluster Zen se fait **obligatoirement par clé SSH**.

La génération de clés SSH et leur déploiement sur les machines MesoNET est [expliqué en détail sur cette page](/acces/ssh).

Cette étape est indispensable.

:::caution


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<Tabs>
  <TabItem value="linux" label="GNU Linux/MacOS" default>

La création des comptes sur le cluster se fait automatiquement **toutes les 10 minutes** (une fois la procédure d'accès a été complétée).

Si votre clé a été correctement associé à la machine, vous pouvez vous connecter à Zen par

```shell
ssh -X votre_nom_d_utilisateur@zen.univ-lille.fr -i votre_cle_privee
```

Bien sûr, il faut
- remplacer `votre_nom_d_utilisateur` par le nom d'utilisateur qui vous a été attribué sur Zen.
- remplacer `votre_cle_privee` par votre clé privée (le nom du fichier qui correspond à la clé publique associé à votre projet dans le portail). Par exemple `~/.ssh/id_ed25519` ou `~/.ssh/zen`.

Vous pouvez omettre l'option `-i` si votre clé a un nom standard (par ex. `id_rsa`,`id_ed25519`,...).

Nous vous conseillons de créer un fichier `~/.ssh/config` (ou de le compléter s'il existe déjà) et d'y rajouter les lignes suivantes (il faut les adapter à votre cas!):

```shell
Host zenlogin
    Hostname zen.univ-lille.fr
    User m2NNNN-NN
    IdentityFile ~/.ssh/nom-de-ma-clé-privée
```

Dès lors, vous pouvez simplement vous connecter sur Zen par

```shell
ssh zenlogin
```


  </TabItem>
  <TabItem value="windows" label="Windows">

Sous Windows vous devez installer un client ssh.

Vous pouvez utiliser MobaXterm et suivre les [indications pour Turpan](arch_exp/turpan) en les adaptant à la machine Zen.

  </TabItem>
</Tabs>


## Pourquoi je n'arrive pas à me connecter ?

Un mécanisme de sécurité bloque votre adresse IP pendant 1h au bout de 5 tentatives infructueuses.
Si votre connexion échoue la première fois, attendez 10 minutes avant d'essayer de nouveau de vous connecter.

Si malgré tout la connexion échoue, envoyez un mail à [support@mesonet.fr](mailto:support@mesonet.fr) en indiquant votre nom, projet, adresse IP (https://www.mon-ip.com/) et la sortie de `ssh -vvv -X votre_nom_d_utilisateur@zen.univ-lille.fr`.





## Quel est mon nom d'utilisateur ?

Vous avez un nom d'utilisateur pour chaque projet et pour chaque machine impliqué.

Il est possible d'avoir plusieurs identifiants
- ... sur la même machine (un par projet).
- ... par projet (un par machine).

Dans le [portail](https://acces.mesonet.fr) la liste des projets montre vos identifiants ("Login") et la clé ssh associée.

<!-- ![screenshot mesonet usernames](/img/mesonet-usernames.png) -->

Sur Zen, ils sont de la forme m2XXXX-YY où m2XXXX est le numéro de votre projet et YY votre numéro d'utilisateur unique.
