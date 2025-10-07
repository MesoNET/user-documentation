---
title: "Description"
sidebar_position: 1
---

# L'architecture d'Arctic

## Architecture globale
Le cluster hébergeant Arctic est une solution HPE :
- Réseau d'interconnexion SlingShot 11 a 200 Gbit/s (1 NIC par nœud de calcul fin (purement CPU), 1 NIC par nœud de calcul à GPU AMD, 3 ou 4 NIC par nœud de calcul à GPU NVIDIA)
- Systeme de fichiers parallèle Lustre
- Stockage : environ 2 Po d'espace disque (`/home`, `/dlocal`, `/soft`), dont :
  - environ 1 Po en technologie Flash
  - environ 1 Po en technologie disque mécanique 

## Sous-ensembles d'architecture de nœuds de calcul
- 124 nœuds de calcul bi-socket AMD EPYC 9654 (Genoa, 96-Core par socket à 2,4 GHz) dotés chacun de 768 (24x 32) Go de RAM DDR5 à 4800 MHz
- 11 nœuds de calcul bi-socket AMD Epyc 7543 (Milan, 32-Core par socket à 2,8 GHz, 512 Go de RAM DDR4 à 3200 MHz), dotés chacun de 8 cartes **GPU NVIDIA A100** (8 unités de traitement GPU interconnectés par NVLink, 80 Go de mémoire HBM2e embarquée par unité)
- 2 nœuds de calcul bi-sockets Intel Xeon 8558 (48-Core par socket à 2,1 GHz, 2 To de RAM DDR5 à 5600 MHz), dotés chacun de 8 cartes **GPU NVIDIA H200** (8 unités de traitement GPU interconnectés par NVLink, **141 Go de mémoire HBM3e** embarquée par unité)
- 2 nœuds de calcul mono-socket AMD Epyc 7543P (Milan, 32-Core à 2,8 GHz, 256 Go de RAM DDR4 à 3200 MHz), dotés chacun de 4 cartes **GPU AMD MI210** (64 Go de mémoire HBM2e embarquée oar unité
