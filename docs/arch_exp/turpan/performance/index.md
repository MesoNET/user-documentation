---
title: "Améliorer les performances"
sidebar_position: 7
---



## Déboguer

Avant d’optimiser, il faut avoir un code exempt de bogues : le débogueur [ddt](./ddt.md) peut vous aider à déboguer votre code

## Améliorer les performances

Mesurer : LWP, Linaro Forge et Nsight

- [LWP](./lwp.md) - Bull MPI Lightweight Profiler est un outil de Bull/Atos donne des informations synthétiques intégrées à la sortie standard.

- [MAP](./map.md) - Outil arm vous donnera l'évolution au cours du temps sur les E/S, les unités de calcul, l’utilisation de la mémoire, utilisation des GPUs.

- [Nsight](./nsight.md) Graphics est un outil de développement autonome avec prise en charge du lancer de rayons qui vous permet de déboguer, de profiler et d'exporter des images créées avec Direct3D, Vulkan, OpenGL, OpenVR et Oculus SDK.

Améliorer : [BLAS](../logiciels/blas.md), [LAPACK](../logiciels/lapack.md), [ScaLAPACK](../logiciels/scalapack.md)

Ils permettent souvent d’améliorer les performances.

## Vectoriser : [NEON](./neon.md) ARM Advanced SIMD

La vectorisation permet de tirer partie des processeurs ARM, en leur permettant d’exécuter un grand nombre d’opérations simultanément (additions et multiplications sur des vecteurs).
Espace utilisateurs/Doc Technique TURPAN

