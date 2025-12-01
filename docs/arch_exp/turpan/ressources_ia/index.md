---
title: Ressources pour l'IA
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Écosystème Python pour l’IA sur CALMIP

Ce document présente les outils, conteneurs recommandés et ressources pour les usages en intelligence artificielle (IA) sur l’infrastructure CALMIP.

---

## Outils interactifs et de visualisation

- [**JupyterLab**](../logiciels/envpython/jupyterlab.md)
- [**TensorBoard**](../logiciels/envpython/tensorboard.md)

---

## Conteneurs IA disponibles

[Ici vous avez l'information sur comment utiliser les conteneurs sur Turpan](../logiciels/container/index.md) :

[Ici vous trouvez la liste des conteneures pour l'IA](../logiciels/container/list_containers.md)

---

## Ressources utiles

- [Guide « Débuter avec l’IA sur Turpan »](../logiciels/envpython/)
- Liste complète des conteneurs dans `/work/conteneurs`

---

## Examples of models ready to be trained on Turpan

Effort has been made to adapt the original training codes so that users can run these workflows easily on Turpan. The provided setups include ready-to-use execution scripts and configurations specifically prepared for multi-node, multi-GPU training.
These adaptations allow users to launch distributed training jobs without needing to modify low-level settings, ensuring a efficient training experience.

Examples:

[- Flow matching](./flow_matching.md) 
[- Ray tuning](./ray_tune.md) 

---

*Document destiné aux utilisateurs IA du centre CALMIP.*