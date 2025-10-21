---
title: "Description"
sidebar_position: 1
---

# Boreale, la machine vectorielle de MesoNET

:::info
Pour toute demande d'assistance concernant Boréale, merci d'envoyer un mail [à cette adresse.](mailto:support-boreale@criann.fr).
:::

## Architecture globale

Cette machine cible des applications vectorisées et idéalement de profil lié à la mémoire, puisque la bande passante mémoire d'une carte NEC SX-Aurora TSUBASA 20B (ou `VE`, `Vector Engine`) a une valeur élevée de 1,53 TB/s, alors que sa puissance crête en double précision a une valeur de 2,45 TFlop/s, modérée relativement à d'autres types d'accélérateurs. Toutefois à titre de comparaison, la puissance CPU d'un nœud de calcul de Boréale (ou `VH`, `Vector Host`), hôte de 8 VE 20B, est de 2,97 TFlop/s.

Un VE possédant 8 cœurs, une parallélisation d'application par OpenMP et/ou MPI est nécessaire pour un usage complet de ce processeur. Chacun de ces cœurs possède 64 vecteurs longs (registres), chacun d'une taille de 256 éléments de double précision (16384 bits). La vectorisation des boucles internes de code est alors cruciale.

Trois modes d'utilisation de cette machine sont possibles :

- Usage des VE en mode natif ou offloading automatique
  - La programmation ne s'appuie que sur les langages standard (FORTRAN, C, C++), OpenMP et/ou MPI. L'application est compilée par le compilateur de NEC et le système déporte automatiquement et totalement l'exécution sur VE
- Usage des VE et VH en mode hybride
  - Si des parties d'algorithme ou des appels à entrées-sorties ne sont pas vectorisables, le mode natif risque de ne pas être efficace en performance. L'environnement de programmation de NEC permet une programmation hybride pour CPU et VE avec plusieurs API : programme principal sur VE et déport de noyaux sur VH (mode reverse offload, API VHcall), ou programme principal sur VH et déport de noyaux sur VE (mode accélérateur, API VEO, AVEO et VEDA). Se référer au document de formation à la prise en main de Boréale, et aux pages suivantes :
  - https://github.com/sx-aurora/veda
  - https://sxauroratsubasa.sakura.ne.jp/documents/veos/en/veda/index.html
  - https://www.nec.com/en/global/solutions/hpc/articles/tech26.html
- Usage des VH
  - L'utilité d'exécution de versions CPU de code est naturellement pour la comparaison de résultats numériques et de performance, avec des versions VE en développement

## Architecture matérielle

Le cluster Boréale est composé, au niveau matériel, de :

- 1 frontale d'accès NEC, ayant:
  - 2x Intel Xeon Ice Lake 6338 32 cœurs CPU @ 2.0 GHz
  - 512 Go (16x 32 Go) de RAM DDR4-3200 ECC
  - 1x carte NEC SX-Aurora TSUBASA 20B Vector Engine (8 cœurs @ 1.6 GHz - 48 Go HBM2)
- 1 frontale d'accès NEC, ayant:
  - 2x Intel Xeon Cascade Lake 6226 12 cœurs CPU @ 2.7 GHz
  - 192 Go (12x 16 Go) de RAM DDR4-2933
  - ConnectX-6 EDR IB/HDR100
  - 2x cartes NEC SX-Aurora TSUBASA 10BE Vector Engine (8 cœurs @ 1.4 GHz - 48 Go HBM2)
- 1 frontale de visualisation
  - 2x Intel Xeon Ice Lake 6338 32 cœurs CPU @ 2.0 GHz
  - 512 Go (16x 32 Go) de RAM DDR4-3200 ECC
  - 1x carte Nvidia Quadro RTX A5000 24 Go GDDR6 (8192 cœurs CUDA)
- 9 serveurs NEC SX-Aurora TSUBASA composés de chacun de :
  - 2x Intel Xeon Ice Lake 6326 16 cœurs @ 2.9 Ghz
  - 256 Go (16x 16 Go) de RAM DDR4-3200 ECC
  - 8x cartes vectorielles [NEC SX-Aurora TSUBASA 20B](https://fr.nec.com/fr_FR/global/solutions/hpc/sx/) (chacune de 8 cœurs @ 1.6 GHz - 48 Go HBM2)
    - les communications directes entre cartes vectorielles se font soit en DMA (intra-nœud) soit via Infiniband en utilisant les bibliothèque NEC MPI ayant un support complet MPI 3.1.
- un stockage partagé de type IBM Spectrum Scale (GPFS) pour environ 500 To utile et une bande passante de 3.5 Go/s
- un réseau rapide faible-latence Nvidia Mellanox Infiniband HDR 200 Gbps

Le cluster utilise le logiciel de soumission Slurm pour la gestion de jobs utilisateurs et le système d'exploitation Rocky Linux.

Les environnements logiciels sont également adaptés au type des machines :

- L'environnement de développement vectoriel NEC
- L'environnement de développement scalaire Intel OneAPI
