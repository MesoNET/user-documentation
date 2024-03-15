---
title: Tensorboard
sidebar_position: 8
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Il est possible d'utiliser Tensorboard pour visualiser ses données sur Turpan.

## Comment demander une session interactive de Tensorboard
Lorsque vous êtes connecté sur une frontale de Turpan, exécutez le script :
```bash
runTensorboardSession.sh --logdir /path/to/my/dataset
```
:::info
Le répertoire par défaut pour les datasets, si vous ne le précisez pas est "${HOME}/.tensorboard/logs"
:::

Laissez le script démarrer (cela prend quelques secondes, soyez patient...), puis vous devriez voir un affichage de ce style :

>```
>[  4/150] Queuing and waiting for Tensorboard session resources initialization (18531) ...
>
>tensorboard session ...
>
>#===========================================================================
>|
>| Your tensorboard session is now available. 
>|  
>| You must now open a TERMINAL on YOUR laptop and execute the command : 
>|
>|     ssh -L 6006:/users/mxxxxx/uyyyyy/.tensorboard/tensorboard-WW.XX.YY.ZZ-JJJJJ.sock -n uyyyyy@WW.XX.YY.ZZ 'si-init.sh'
>| 
>| Then from your browser, visit the following url :
>|     
>|     http://localhost:6006
>|
>#===========================================================================
>| CAUTION : DO NOT CLOSE this slurm job or this terminal !
>#===========================================================================
>
>+---------------------------------------------------------------------------
>| CONNECTION INFO :
>|   * Job ID                 : JJJJJ
>|   * Client                 : WWW.XXX.YYY.ZZZ (FROM THE MOON)
>|   * Target                 : WW.XX.YY.ZZ (turpancompY)
>|   * Tensorboard URL        : http://localhost:6006
>|   * SSH tunnel socket path : /users/mxxxxx/uyyyyy/.tensorboard/tensorboard-WW.XX.YY.ZZ-JJJJJ.sock
>+---------------------------------------------------------------------------
>
>[/] - Press CTRL-C to quit
>```

Sur **un second terminal** sur **votre poste de travail**, exécuter la commande ssh donnée par le script :
```bash
ssh -L 6006:/users/mxxxxx/uyyyyy/.tensorboard/tensorboard-WW.XX.YY.ZZ-JJJJJ.sock -n uyyyyy@WW.XX.YY.ZZ 'si-init.sh'
```

Patientez là encore quelques secondes et vous devriez obtenir le message suivant :
>```
>#===========================================================================
>|
>| ssh tunnel established.
>|
>#===========================================================================
>| CAUTION : DO NOT CLOSE this terminal !
>#===========================================================================
>```

:::warning DO NOT CLOSE TERMINALS
Comme les 2 messages l'indiquent, ne fermez pas la fenêtre de demande de session interactive sur Turpan, ni celle du tunnel ssh sur votre poste de travail.
:::

Enfin, vous pouvez utiliser Tensorboard en utilisant **le navigateur de votre poste de travail** et copier/coller l'URL fournie par le script "http://localhost:6006".

## Pour tester
Vous pouvez générer des données en suivant le tutoriel "[Premiers pas avec TensorBoard](https://www.tensorflow.org/tensorboard/get_started)", dans [une session interractive de notebook jupyter](./jupyterlab.md) par exemple, puis visualiser les données en utilisant la commande suivant pour pointer vers le dataset généré :

```bash
runTensorboardSession.sh --logdir ${HOME}/logs/fit
```

## Comment arrêter une session interactive Tensorboard
Vous pouvez arrêter la session interactive Tensorboard en allant sur le terminal dans lequel vous avez lancé runJupyterSession.sh, et en tapant :
    ```bash
    CTRL-C
    ```

## Si ça ne fonctionne pas
Avant de contacter le support, vous pouvez essayer les actions suivantes :
* Vérifier que le terminal contenant la session est toujours actif
* Vérifier que le terminal contenant le tunnel SSH est toujours actif
* Vérifier que vous n'avez pas de session de notebook jupyter en local sur votre poste de travail qui utilise déjà le port 8888
* Tuer toutes vos connexions ssh à destination de Turpan et recommencer une session interactive
* Si vous êtes sous windows, relancer votre session mobaxterm