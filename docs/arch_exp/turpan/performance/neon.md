---
title: NEON
sidebar_position: 5
---


## Compilateur GNU avec Neon pour Armv8-A
Options d'optimisation :

- -Ox avec x dans {0, 1, 2, 3, fast}
- La génération de code SIMD est activée par défaut au niveau d'optimisation -O2 et supérieur.
- Au niveau d'optimisation -O1, réduire la taille du code et le temps d'exécution.
- Au niveau d'optimisation -O0, aucune optimisation n'est effectuée. Réduisez le temps de compilation et faites en sorte que le débogage produise les résultats attendus. Il s'agit de la valeur par défaut.
- -fopt-info-optimized -fopt-info-missed -fopt-info-all -fopt-info-vec-optimized -fopt-info-vec-missed pour imprimer des informations sur les optimisations effectuées ou manquées.

Spécifiez la cible Neon :

- -mcpu=native|neovere-n1 pour cibler Arm Ampere Altra.

Plus d'informations ici :

- https://gcc.gnu.org/onlinedocs/gcc/Optimize-Options.html  


## Compilateur Arm avec Neon pour Armv8-A
Options d'optimisation :

- -Ox avec x dans {0, 1, 2, 3, fast}
- La vectorisation automatique est activée par défaut au niveau d'optimisation -O2 et supérieur L'option -fno-vectorize permet de désactiver la vectorisation automatique.
- Au niveau d'optimisation -O1, la vectorisation automatique est désactivée par défaut, l'option -fvectorize permet d'activer la vectorisation automatique.
- Au niveau d'optimisation -O0, la vectorisation automatique est toujours désactivée.Si vous spécifiez l'option -fvectorize, le compilateur l'ignore.
- La spécification des options de compilateur -Rpass=loop et -Rpass-analysis=loop affiche des informations de diagnostic et d'analyse utiles.

Spécifiez la cible Neon :

- L'option -mcpu=native est une combinaison de -march et -mtune, elle spécifie simultanément l'architecture cible et optimise pour une microarchitecture donnée.

Plus d'informations ici :

- https://developer.arm.com/documentation/101725/0300/Coding-for-Neon


## Compilateur NVHPC avec Neon pour Armv8-A
Options d'optimisation :

- -Ox avec x dans {0, 1, 2, 3, 4} et -fast
- La génération de code SIMD est activée par défaut au niveau d'optimisation -O2 et supérieur.
- Au niveau d'optimisation -O1, des optimisations locales sont effectuées (allocations de registre)
- Au niveau d'optimisation -O0, aucune optimisation n'est effectuée.
- La spécification des options du compilateur –Minfo affiche des informations de diagnostic et d'analyse utiles.

Spécifiez la cible Neon :

- -tp=native|neoverse-n1 est utilisé pour spécifier une cible CPU.

Plus d'informations ici :

- https://docs.nvidia.com/hpc-sdk/compilers/index.html  
