---
title: Ma consommation
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Visualiser ma consommation sur turpan

Pour afficher les informations sur votre consommation, 4 commandes sont à votre disposition :

* **maconso** : Affiche la consommation de son projet
* **maconso_detail** : Affiche la consommation des membres de son projet
* **maconso_job** : Affiche la consommation de ses 5 derniers jobs
* **maconso_jobid** jobid [...] : Affiche la consommation des jobs listés s’ils appartiennent à son projet

:::info

Toutes les commandes présentées dans ce document affichent les informations relatives à la consommation de votre projet jusqu’à la date de la veille au soir à 23H59

:::

## Le détail des commandes

<Tabs>
<TabItem label="maconso" value="maconso" default>

Cette commande affiche la consommation de votre projet en date de la veille à 23H59:

Un exemple pris le 26 Septembre 2023:

```shell
maconso
```

>```
>Consommation de votre groupe jusqu'au 25-09-2023 23H59 :
>
>+--------+------------+-------------------------------+--------------+
>|  Nom   | Soumission | Consommation en cours (HH:MM) | Consommation |
>| groupe |   de job   +---------------+---------------+   maximum    |
>|        |            |      cpu      |      gpu      |   (HH:MM)    |
>+========+============+===============+===============+==============+
>| m23007 |    Oui     |   1000:00     |   900:00      |   50000:00   |
>+--------+------------+---------------+---------------+              +
>|    Normalisation    |   1000:00     |     0:00      |              |
>+=====================+===============+===============+==============+
>          |   Total    |          1000:00              |               
>          +------------+-------------------------------+
>```

Légende :

* **Consommation maximum** : Heures de calcul allouées au projet
* **Consommation en cours (HH:MM)** : Heures de calcul brutes consommées par le projet (par ressource)
* **Normalisation** : Heures de calcul normalisées, consommées par le projet (par ressource). La normalisation consiste à multiplier les heures gpu par 33
* **Total** : Total des heures de calcul normalisées consommées par le projet

:::info

Si votre projet a dépassé le nombre d’heures de calcul allouées au projet, alors vous ne pourrez plus soumettre de nouveaux jobs. Dans ce cas, le texte suivant apparaîtra en dessous des informations de consommation :

>```
>Consommation de ressources trop importante.
>La consommation de votre groupe a depasse la limite autorisee.
>Vous ne pourrez plus soumettre de requete.
>```

:::

</TabItem>
<TabItem label="maconso_detail" value="maconso-detail">

Cette commande affiche la consommation pour chaque utilisateur de son projet en date de la veille à 23H59.

Un exemple pris le 26 Septembre 2023:

```shell
maconso_detail
```

>```
>Consommation de votre groupe jusqu'au 25-09-2023 23H59 :
>
>+-------------+--------------+-------------------------------------+--------------------+
>|             |     Nom      |    Consommation en cours (HH:MM)    | Total consommation |
>| Identifiant | Utitlisateur +------------------+------------------|  en cours (HH:MM)  |
>|             |              | cpu (Normalisee) | gpu (Normalisee) |                    |
>+=============+==============+==================+==================+====================+
>| m23007stnl  |  m23007stnl  | 500:00 (500:00)  |  400:00 (0:00)   |      500:00        |
>+-------------+--------------+------------------+------------------+--------------------+
>| m23007xyzt  |  m23007xyzt  | 500:00 (500:00)  |  500:00 (0:00)   |      500:00        |
>+=============+==============+==================+==================+====================+
>                                                                    |     1000:00        |
>                                                                    +--------------------+
>```

Légende :

* **Consommation en cours (HH:MM)** : Heures de calcul brutes consommées par l’utilisateur (par ressource) avec entre parenthèse la consommation normalisée
* **Total consommation en cours (HH:MM)** : Total des heures de calcul normalisées, consommées par l’ensemble des utilisateurs du projet

</TabItem>
<TabItem label="maconso_job" value="maconso-job">

Cette commande affiche la consommation des derniers jobs (5 par défaut) en date de la veille à 23H59:

```shell
maconso_job
```

>```
>+-------------+-------------+--------+-------------------------------------+--------------------+
>|             |             |        |          Consommation               |                    |
>| Identifiant | Date de fin | Job ID |           en cours (HH:MM)          | Total consommation |
>|             |             |        +------------------+------------------|  en cours (HH:MM)  |
>|             |             |        | cpu (Normalisee) | gpu (Normalisee) |                    |
>+=============+=============+========+==================+==================+====================+
>| m23007stnl  | 2023-09-23  | 36130  |  100:00 (100:00) |  90:00 (0:00)    |      100:00        |
>+             +             +--------+------------------+------------------+--------------------+
>|             |             | 36129  |  150:00 (150:00) | 100:00 (0:00)    |      150:00        |
>+             +-------------+--------+------------------+------------------+--------------------+
>|             | 2023-09-22  | 30827  |  250:00 (250:00) |  50:00 (0:00)    |      250:00        |
>+             +             +--------+------------------+------------------+--------------------+
>|             |             | 30826  |  350:00 (350:00) | 200:00 (0:00)    |      350:00        |
>+             +             +--------+------------------+------------------+--------------------+
>|             |             | 30824  |   50:00 (50:00)  |  70:00 (0:00)    |       50:00        |
>+=============+=============+========+==================+==================+====================+
>                                                                            |      900:00        |
>                                                                            +--------------------+
>```

Légende :

* **Consommation en cours (HH:MM)** : Heures de calcul brutes, consommées par le job (par ressource) avec entre parenthèse la consommation normalisée
* **Total consommation en cours (HH:MM)** : Total des heures de calcul normalisées consommées par l’ensemble des jobs affichées

Pour afficher la consommation des 10 derniers jobs:

```shell
maconso_job 10
```

Pour afficher la consommation des jobs listés en date de la veille à 23H59 s’ils appartiennent à votre projet

```shell
maconso_job 36130 36129
```

>```
>+-------------+-------------+--------+-------------------------------------+--------------------+
>|             |             |        |          Consommation               |                    |
>| Identifiant | Date de fin | Job ID |           en cours (HH:MM)          | Total consommation |
>|             |             |        +------------------+------------------|  en cours (HH:MM)  |
>|             |             |        | cpu (Normalisee) | gpu (Normalisee) |                    |
>+=============+=============+========+==================+==================+====================+
>| m23007stnl  | 2023-09-23  | 36130  |  100:00 (100:00) |   90:00 (0:00)   |       100:00       |
>+             +             +--------+------------------+------------------+--------------------+
>|             |             | 36129  |  150:00 (150:00) |    100:00 (0:00) |       150:00       |
>+=============+=============+========+==================+==================+====================+
>                                                                            |       250:00       |
>                                                                            +--------------------+
>```

Légende :

* **Consommation en cours (HH:MM)** : Heures de calcul brutes, consommées par le job (par ressource) avec entre parenthèse la consommation normalisée
* **Total consommation en cours (HH:MM)** : Total des heures de calcul normalisées consommées par l’ensemble des jobs affichés

</TabItem>
</Tabs>