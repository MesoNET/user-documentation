---
title: Le stockage
sidebar_position: 3
---

# L'espace disque sur Turpan

L’espace disque est constitué de trois parties :

- Le **home directory** : Cet espace, dédié à l'installation des logiciels et binaires, est localisé dans le répertoire `/users/${GROUPE}/${USER}` (raccourci : `${HOME}`)
- Le **work directory** : Cet espace, dédiés aux entrées et sorties, est localisé dans le répertoire `/work/${PROJET}/${USER}` (raccourci : `${WORK}`)
- **L’espace temporaire**  : Cet espace, dédié aux fichiers temporaires, est localisé dans le répertoire `/tmpdir/${USER}` (raccourci : `${SCRATCH}`). Il est mutualisé à tous les utilisateurs (200To) et est accéléré par un cache SSD de 8.5 To. **Dans l'espace tmpdir, les fichiers non accédés depuis plus de 100 jours sont automatiquement effacés.**

:::caution

**Les différents espaces de stockage de turpan ne sont pas sauvegardés.**

:::

:::info

Un espace de stockage fédéré est en cours de contruction et permettra de faciliter la mobilité des données entres les machines du projets MesoNET . [Plus d'information ici](https://www.mesonet.fr/8_federation-de-stockage.html).

:::

## Les quotas

Sur les différents espaces, des quotas sont mis en place afin que chacun puissent bénéificer du stockage de façon équitable : 

| quota | groupe | user | file group | file user |
|---|---|---|---|---|
| home |   | 10Go |   | 100K |
| work | 1To |   | 5M |   |
| tmpdir |   |   |   | 5M |