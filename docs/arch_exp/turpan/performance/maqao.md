---
title: Maqao
sidebar_position: 6
---

Pour profiler votre code avec maqao sur Turpan, vous devez travailler en deux temps :

1. Exécuter le code en lançant les instructions de profilage, Cette opération générera un fichier de données. 
2. Utilisez l’outil de visualisation pour lire les données acquises à l’étape 1

Il est recommandé de compiler son code avec le switch `-g` pour corréler les différentes phases du profil observé avec le code. Mais à l’inverse de ce qui est recommandé pour la phase de débogage ([voir ici](./ddt.md)), il est utile de garder *les options d’optimisation* pour avoir un profil correct.

## Profiler son code avec MAQAO

Dans le fichier de soumission sbatch (launcher : mpirun  ; exécutable : poisson_cartesian):

>```
#[...]
module load maqao/2.19.0
#[...]
maqao oneview -R1 --number-processes=64 \
--mpi-command="mpirun --mca mpi_cuda_support 0 -hostfile ./hostfile_${SLURM_JOBID} -np 64" \
--number-processes-per-node=64 -- ./poisson_cartesian > poisson_cartesian.log
#[...]
>```

## Voir les résultats avec un navigateur

Dans le répertoire d'exécution, maqao crée un répertoire (les développeurs préconisent de [récupérer la sortie(../connexion/transfert.md)] sur votre machine personnelle ou faire un montage sshfs):

Exemple de répertoire contenant les sorties de maqao :

>```
>.../maqao_2024-02-01_11-21-39/RESULTS/poisson_cartesian_one_html
>```

Pour visualiser les sorties sur votre poste local :

```bash
firefox .../maqao_2024-02-01_11-21-39/RESULTS/poisson_cartesian_one_html/index.html 
```

## Pour aller plus loin :

* Les tutoriaux (1) et (2) MAQAO lors du 43rd VI-HPS sur Turpan (29 Janvier-1er Février 2024)
  * [MAQAO performance analysis tools](https://www.vi-hps.org/cms/upload/material/tw43/MAQAO.pdf) (Cédric Valensi, Hugo Bolloré & Emmanuel Oseret, UVSQ)
  * [MAQAO hands-on exercises](https://www.vi-hps.org/cms/upload/material/tw43/MAQAO_Handson.pdf) ([MAQAO quick reference](https://www.vi-hps.org/cms/upload/material/tw43/MAQAO_QuickReferenceSheet.pdf))

* [La documentation officielle sur MAQAO](http://www.maqao.org/documentation.html)