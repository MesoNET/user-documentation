---
title: "Description"
sidebar_position: 1
---

# Turpan, la machine ARM de MEsoNET

Le supercalculateur Turpan dispose de 15 nœuds de calcul. Dans un nœud, L’architecture détaillée est la suivante : autour du CPU, on a 512Go RAM répartis en 8 barrettes de 64Go sur des canaux indépendants, deux cartes GPU Nvidia A100-80, connectées en PCI express x16, 2 cartes réseaux infiniband 200 Gb/s chacune, également connectées en PCI express x16, 6To de stockage local, et de la connectique standard (USB, Ethernet etc).

Dans un nœud de Turpan, le processeur est un Ampere Altra Q80-30, qui comporte 80 cœurs à 3GHz, qui implémente une architecture ARM version 8.2, la vitesse de transfert des données est de 3200 MT/s. La puissance de calcul est de 1,9 TF/s par socket. Par ailleurs Turpan possède 2 accélérateurs GPU Nvidia A100-80, chaque GPU propose 6912 Streaming Multiprocessors (SM). La performance peak d'un GPU est de 19,5 Tflops. Au total, en charge maximale, quand on utilise 80 coeurs CPU et 2 accélérateurs GPU, la performance peak est de 40,9 Tflops. En théorie, avec 15 nœuds, Turpan dispose d’une puissance de 613,5 Tflops.

Concernant le stockage, la machine Turpan dispose de 343 To sur des disques mécaniques pour le stockage scratch et projet. Et 17 To de SSD qui serve de cache pour accélérer les entres sorties. Physiquement on a 60 disques mécaniques de 8To, 11 disques SSD de 3,8To.

## Faire appel au support  

Si quelque chose ne fonctionne pas et que vous n'arrivez pas à vous en sortir, vouis pouvez envoyer un courriel à [cette adresse](mailto:support.calmip@univ-toulouse.fr), en précisant : 
- Chemin du répertoire d’appel
- Chemin du script d’appel
- Numéro du job concerné