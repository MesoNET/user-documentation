---
title: DDT
sidebar_position: 1
---


# Le débogueur ddt sur Turpan

NOTE - L'éditeur de ce débogueur s'appelle arm, auparavant c'était allinea

ATTENTION - Si le code utilise MPI il faut le compiler avec une version openmpi supérieur ou égal à 4.

ddt permet de déboguer des codes fortran, C, C++, et ce quelque soit le compilateur utilisé (intel, gnu ou pgi) Il s'agit d'un outil graphique, vous devrez donc ouvrir une session X11 :

- Connectez-vous avec ssh -X
- Si le débit réseau est insuffisant, ssh -XC permet d'améliorer la fluidité de l'affichage
- Si cela ne suffit pas, utilisez une session graphique


Pour déboguer votre code, vous devez travailler en deux temps :

1. Compilez votre code avec le switch -g et supprimez toutes les options d'optimisation (au minimum, voir autres flags compilateurs).
2. Lancer l'outil ddt. Nous préconisons d'utiliser le mode 'connect', très simple d'utilisation, et qui permet de faire tourner le code sur les nœuds tout en lançant l'interface graphique sur la frontale :

## Déboguer son code avec ddt en mode connect
### Lancer ddt depuis la frontale ou une session graphique (visu)
```
module load arm-forge/22.1.2 
ddt &
```
![Capture d'écran du formulaire d'engistrement dans le SSO MesoNET](/img/turpan/ddt_1.png)

### Modifier votre script batch:
Ajouter ddt --connect avant la commande mpirun:
```
module load arm-forge/22.1.2
ddt --connect mpirun ...
```

### Démarrage de ddt:
Depuis la fenêtre graphique ddt lancée à l'étape 1, une boite de dialogue va s'ouvrir (attendre quelques secondes).

![Capture d'écran du formulaire d'engistrement dans le SSO MesoNET](/img/turpan/ddt_2.png)

### Configuration:
Une nouvelle fenêtre vous demandant de préciser les caractéristiques de votre code s'ouvre alors. Vous voudrez probablement déboguer la mémoire : dans ce cas cochez la case et pressez sur le bouton indiqué ci-dessous.

![Capture d'écran du formulaire d'engistrement dans le SSO MesoNET](/img/turpan/ddt_3.png)

### Recommandation
Nous vous recommandons de positionner le "Heap Debugging" sur Fast, et de préciser à ddt si le programme est en C, C++ ou fortran, multithreadé ou pas.

![Capture d'écran du formulaire d'engistrement dans le SSO MesoNET](/img/turpan/ddt_4.png)

Vous êtes maintenant prêt à déboguer !










