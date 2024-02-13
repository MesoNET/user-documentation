---
title: Lancer un calcul
sidebar_position: 4
---

Pour effectuer des calculs sur Zen il faut obligatoirement utiliser le gestionnaire de travaux `slurm`.

:::caution

Pour rappel, il est strictement interdit de lancer des calculs directement sur la frontale.

:::

Une introduction générale à `slurm` est disponible [ici](HOWTO/slurm.md).
Cette page se concentre sur les particularités du cluster Zen.

# Lancer un job sur Zen

Zen comporte une seule partition nommée `compute`. Il faut spécifier

```
#SBATCH --partition=compute
```

dans l'en-tête du script de soumission.
