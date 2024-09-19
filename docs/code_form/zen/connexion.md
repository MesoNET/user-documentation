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

Si votre clé a été correctement associé à la machine, vous pouvez vous connecter à Zen par

```shell
ssh -X votre_nom_d_utilisateur@zen.univ-lille.fr
```

Bien sûr, il faut remplacer `votre_nom_d_utilisateur` par le nom d'utilisateur qui vous a été attribué sur Zen.


  </TabItem>
  <TabItem value="windows" label="Windows">

Sous Windows vous devez installer un client ssh.

Vous pouvez utiliser MobaXterm et suivre les [indications pour Turpan](arch_exp/turpan) en les adaptant à la machine Zen

  </TabItem>
</Tabs>

## Quel est mon nom d'utilisateur?

Vous avez un nom d'utilisateur pour chaque projet et pour chaque machine impliqué.

Il est possible d'avoir plusieurs identifiants
- ... sur la même machine (un par projet).
- ... par projet (un par machine).

Dans le [portail](https://acces.mesonet.fr) la liste "Vos projets" montre vos identifiants et la clé ssh associée.

![screenshot mesonet usernames](/img/mesonet-usernames.png)

Dans cet example, mon identifiant pour le projet M24072 sur Zen est `m24072-90`, la clé associé a été nommé `test-zen`.
