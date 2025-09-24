---
title: Notebook jupyter
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Afin de donner des formations ou de mettre au point des scripts Python, l'outil Jupyter Notebook peut être intéressant.

Vous pouvez l'utiliser sur Vesta, avec quelques conditions :
* la durée de connexion ne peut pas excéder 8 heures ;
* la réservation est sur limitée à 1 GPU ;
* pour un travail plus intensif, il vaut mieux préférer le lancement non interactif par sbatch qui permet de réserver des ressources adaptées.

## Comment demander une session interactive de notebook jupyter
Lorsque vous êtes connecté sur une frontale de Vesta, vous devez tout d'abord charger le module jupyterlab :
```bash
module load jupyterlab
```

Vous devez ensuite exécuter la commande :
```bash
launch_jupyterlab
```

Laissez le script démarrer (cela prend quelques secondes, soyez patient...), puis vous devriez voir un affichage de ce style :

>```
>Starting Jupyter…
>Still waiting…
>Gathering connexion information…
>Jupyter server running on node hpc-mn101
>Your temporary authentication token is: azerertyuiop123456789
>To access your Jupyter session in your web browser:
>        1. On a terminal on your computer: ssh -N -J login@hpc-vestax.u-strasbg.fr login@hpc-mn123 -L 1234:localhost:1234
>        2. On your web browser : localhost:8888/?token=azertyuiop123456789
>
>Your session will expire in 8 hours
>
>Press CTRL-C to quit
>```

Sur **un second terminal** sur **votre poste de travail**, exécutez la commande ssh donnée par le script :
```bash
ssh -N -J login@hpc-vestax.u-strasbg.fr login@hpc-mn123 -L 1234:localhost:1234
```

:::info
Si cette commande fonctionne, elle n'affiche pas de texte et ne redonne pas la main dans le terminal.  
Pour couper le tunnel, vous pouvez par exemple fermer le terminal, ou utiliser la combinaison CTRL-C de votre clavier.
:::

:::warning NE PAS FERMEZ LES TERMINAUX
Ne fermez pas la fenêtre de demande de session interactive sur Vesta, ni celle du tunnel ssh sur votre poste de travail.
:::

Enfin, vous pouvez utiliser votre notebook jupyter en utilisant **le navigateur de votre poste de travail** et copier/coller l'URL fournie par le script "http://localhost:8888/?token=..."

## Si ça ne fonctionne pas
Avant de contacter le support, vous pouvez essayer les actions suivantes :
* Vérifier que le terminal contenant la session est toujours actif
* Vérifier que le terminal contenant le tunnel SSH est toujours actif
* Vérifier que vous n'avez pas de session de notebook jupyter en local sur votre poste de travail qui utilise déjà le port 8888
* Tuer toutes vos connexions ssh à destination de Vesta et recommencer une session interactive
