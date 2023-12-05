---
title: Le stockage
sidebar_position: 3
---

# Les espaces de travail sur Juliet

L’espace disque est constitué de trois parties :

- Le **home directory** : Cet espace, dédié aux fichiers et installations par utilisateur est localisé dans le répertoire `/home/${USER}` (raccourci : `${HOME}`)
- Le **work directory** : Cet espace, dédié aux fichiers et installations par projet est localisé dans le répertoire `/project/${PROJET}`
- **L’espace temporaire**  : Cet espace, dédié aux fichiers temporaires, est localisé dans le répertoire. `/scratch_l/${USER}`. Ce répertoire est séparé pour chaque nœud de calcul

:::caution

** L'intégrité des données stockées n'est pas garantie sur Juliet. Pensez à stocker vos données importantes sur un stockage pérenne.**

:::

