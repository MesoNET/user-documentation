---
title: Le stockage
sidebar_position: 3
---

# L'espace disque sur Turpan

L’espace disque est constitué de trois parties :

- Le **home directory** : Cet espace, dédié à l'installation des logiciels et binaires, est localisé dans le répertoire `/users/${GROUPE}/${USER}` (raccourci : `${HOME}`)
- Le **work directory** : Cet espace, dédiés aux entrées et sorties, est localisé dans le répertoire `/work/${PROJET}/${USER}` (raccourci : `${WORK}`)
- **L’espace temporaire**  : Cet espace, dédié aux fichiers temporaires, est localisé dans le répertoire `/tmpdir/${USER}` (raccourci : `${SCRATCH}`). Il est mutualisé à tous les utilisateurs (200To) et est accéléré par un cache SSD de 8.5 To. **Dans l'espace tmpdir, les fichiers non accédés depuis plus de 100 jours sont automatiquement effacés.**

- **L’espace Local SSD temporaire** :L’espace temporaire est dédié aux fichiers créés et utilisés pendant l’exécution d’un job de taille (1.7To/noeud). Il est situé dans le répertoire: `/tmploc/${SLURM_JOB_USER}/${SLURM_JOB_ID}`. Cet espace est réservé exclusivement au job en cours d’exécution et offre les meilleures performances en lecture et en écriture. Cependant, il est strictement temporaire donc **il n’existe que pendant l’exécution du job**. Tous les fichiers dans cet espace sont automatiquement supprimés à la fin de job, par consonance Il est donc essentiel de copier ou de déplacer les données nécessaires vers l'un des espaces de stockage persistants décrits ci-dessus, à la fin de votre script.



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