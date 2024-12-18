---
title: MAP
sidebar_position: 3
---

# Profiler votre code avec map sur Turpan
Pour profiler votre code, vous devez travailler en deux temps :

1. Exécuter le code en lançant les instructions de profilage. Cette opération générera un fichier de données.
2. Utilisez l'outil de visualisation pour lire les données acquises à l'étape 1

Il est recommandé de compiler son code avec le switch -g pour corréler les différentes phases du profil observé avec le code. Mais à l'inverse de ce qui est recommandé pour la phase de débogage (voir ici [ddt](./ddt.md) , il est utile de garder les options d'optimisation pour avoir un profil correct.

:::caution
MAP acceptera le profilage MPI jusqu'à **32 processus**. Il n'est pas autorisé de dépasser ce nombre de processus.
:::
MAP peut être utilisé pour profiler du code exécuté sur le **CPU**, sur le **GPU**, ainsi que sur des architectures hybrides.
### Profiler son code avec map
Dans le fichier de soumission sbatch, il vous suffit de modifier l’appel mpirun par :
```
module load arm-forge/22.1.4
map --profile mpirun mon_appli...
```

### Voir les résultats avec map
La commande ci-dessus produira un fichier dont le nom ressemblera à : mon_appli.map.

Il est fortement recommandé d'ouvrir les résultats avec la commande indiquée ci-dessous en utilisant la visualisation à distance ([voir ici](../connexion/visu.md)).

Une autre méthode, moins recommandée, consiste à visualiser ce fichier en ouvrant le visualiseur avec :
- Vous connecter avec ssh -X (une session X11)
- Si le débit réseau est insuffisant, ssh -XC permet d’améliorer la fluidité de l'affichage
- Si cela ne suffit pas, utilisez une session graphique
- Accédez au chemin où se trouve le fichier mon_appli.map :
- Avant de lancer l'outil de visualisation map, rechargez le module map dans la session ssh -X :

```
module load arm-forge/22.1.4
map mon_appli.map
```

La partie supérieure de l'écran ressemblera à la figure ci-dessous. Si vous avez compilé votre code avec le switch -g, et si map est capable de trouver les sources de votre programme, vous pourrez alors établir une corrélation entre le profil affiché en haut de l'écran et le code (qui sera affiché en bas de l’écran).

![Capture d'écran du formulaire d'engistrement dans le SSO MesoNET](/img/turpan/map.png)

Le menu Metrics permet de choisir ce qu'on regarde : les entrées-sorties, les appels mpi, etc.
