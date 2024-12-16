---
title: Maqao
sidebar_position: 6
---
MAQAO (Modular Assembly Quality Analyzer and Optimizer) est un outil d'analyse et d'optimisation des performances. Contrairement aux profileurs traditionnels qui se concentrent uniquement sur la surveillance des performances, MAQAO fournit des informations détaillées sur la manière dont le code interagit avec le matériel et suggère des optimisations exploitables. Il fournit des rapports détaillés pour améliorer l'efficacité, telles que l'optimisation de l'utilisation de la mémoire, la vectorisation et le parallélisme, aidant ainsi les développeurs à maximiser les performances des applications.

Pour profiler votre code avec maqao sur Turpan, vous devez travailler en deux temps :

1. Exécuter le code en lançant les instructions de profilage, Cette opération générera un fichier de données. 
2. Utilisez l’outil de visualisation pour lire les données acquises à l’étape 1

Il est recommandé de compiler son code avec le switch `-g` pour corréler les différentes phases du profil observé avec le code. Mais à l’inverse de ce qui est recommandé pour la phase de débogage ([voir ici](./ddt.md)), il est utile de garder *les options d’optimisation* pour avoir un profil correct.

## Profiler son code avec MAQAO

Dans le cadre de l'exécution de MAQAO pour le profilage, il est recommandé de définir explicitement le nombre de threads de chaque processus. Cela permet à MAQAO de prendre en compte cette configuration lors du profilage de l'exécution. Sans cette spécification, il est possible de rencontrer des problèmes lors de l'exécution du profilage ou d'obtenir des résultats erronés, en particulier lorsqu'un grand nombre de processus est utilisé.

>```
module load maqao/2.19.0
OMP_NUM_THREADS=1 maqao oneview -R1 --mpi-command="mpirun --mca mpi_cuda_support 0 -hostfile ./hostfile_${SLURM_JOBID} -np ${SLURM_NTASKS}  \
-map-by ppr:${SLURM_NTASKS_PER_NODE}" -- ./mon_projet 
>```

Vous pouvez également configurer la variable d'environnement directement dans votre script.  
>```
export OMP_NUM_THREADS=1 # une application mono-thread
maqao oneview -R1 .... 
>```

## Voir les résultats

Dans le répertoire d'exécution, maqao crée un répertoire 

Si votre script produit une sortie standard (via des instructions comme print), celle-ci sera sauvegardée dans un fichier au chemin suivant :
>```
>.../maqao_timestamp/logs/run_0/log.txt
>```

Exemple de répertoire contenant les sorties de maqao :

Les résultats d’analyse de performance sont disponibles sous forme de rapports HTML, accessibles dans le répertoire suivant :
>```
>.../maqao_timestamp/RESULTS/mon_project_html/index.html
>```

Pour visualiser les sorties, Vous disposez de deux options principales :
1. Si vous utilisez Visual Studio Code sur votre machine locale et êtes connecté à turpan via SSH ([voir ici](../connexion/#se-connecter-en-utilisant-vscode)), vous pouvez visualiser le fichier `index.html` en utilisant l'extension **Live Server** (à installer dans VScode). Cette méthode vous permet d’afficher directement les rapports dans votre navigateur, sans avoir besoin de copier les fichiers localement.

2. Copiez le dossier généré par MAQAO vers votre machine locale ([voir ici](../connexion/transfert.md)), puis ouvrez le fichier HTML des résultats avec un navigateur web. Par exemple :
  ```bash
  firefox .../maqao_timestamp/RESULTS/mon_project_html/index.html 
  ```

![Capture d'écran des résultats Maqao ](/img/turpan/maqao_output.png)

L'image montre les résultats de profilage des performances MAQAO avec plusieurs onglets. Global fournit un aperçu des indicateurs de performances clés et des opportunités d'accélération potentielles. Fonctions se concentre sur les données de performances au niveau de la fonction, aidant à identifier les inefficacités. Boucles met en évidence les performances au niveau de la boucle, montrant où des optimisations peuvent être effectuées.

D'autres onglets comme Application, Topologie et autres fournissent des détails supplémentaires sur la configuration du système, la configuration matérielle et les paramètres d'expérimentation. Ces fonctionnalités aident ensemble à comprendre les performances globales et à identifier les domaines d'optimisation.

:::tip Note
MAQAO ne prend pas en charge, pour le moment, le profilage sur GPU.
:::

## Pour aller plus loin :

* Les tutoriaux (1) et (2) MAQAO lors du 43rd VI-HPS sur Turpan (29 Janvier-1er Février 2024)
  * [MAQAO performance analysis tools](https://www.vi-hps.org/cms/upload/material/tw43/MAQAO.pdf) (Cédric Valensi, Hugo Bolloré & Emmanuel Oseret, UVSQ)
  * [MAQAO hands-on exercises](https://www.vi-hps.org/cms/upload/material/tw43/MAQAO_Handson.pdf) ([MAQAO quick reference](https://www.vi-hps.org/cms/upload/material/tw43/MAQAO_QuickReferenceSheet.pdf))

* [La documentation officielle sur MAQAO](http://www.maqao.org/documentation.html)