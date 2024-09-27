---
title: Lancer un calcul
sidebar_position: 5
---

Pour effectuer des calculs sur Zen il faut obligatoirement utiliser le gestionnaire de travaux `slurm`.

:::caution

Pour rappel, il est strictement interdit de lancer des calculs directement sur la frontale.

:::

Cette documentation vous propose une [introduction générale à `slurm`](/HOWTO/slurm).
Cette page se concentre sur les particularités du cluster Zen.

# Lancer un job sur Zen

Zen comporte une seule partition nommée `compute`. Il faut spécifier

```
#SBATCH --partition=compute
```

dans l'en-tête du script de soumission.

# Démarrage des nœuds

A des fins d'économie d'énergie, les nœuds de calcul de Zen s'arrêtent complètement au bout de 3 heures d'inactivité.

Si les seuls nœuds pour satisfaire votre requête sont éteints, alors votre job se lancera seulement après environ 5 minutes, le temps nécessaire au serveur pour démarrer.
