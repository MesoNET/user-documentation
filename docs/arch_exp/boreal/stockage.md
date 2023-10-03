---
title: Le stockage
sidebar_position: 3
---

# Les espaces de travail sur Boréale

L'utilisateur a un espace de travail personnel dans `/home/project_name/username`.

Par défaut un quota disque utilisateur est positionné à 50 Go dans `/home` ; la commande `mmlsquota gpfs2:home` fournit le quota et la place que l'utilisateur occupe dans la partition `/home`.

Nous vous encourageons à calculer dans les dossiers de scratch temporaires (`/dlocal/run/<jobid>` disponible via la variable d'environnement `LOCAL_WORK_DIR`) créés par l'outil de batch Slurm pour chaque calcul. Un quota de 10 millions de fichiers est appliqué sur l'arborescence `/dlocal` ; la commande `mmlsquota gpfs1:dlocal` fournit le quota et le nombre de fichiers vous appartenant dans l'arborescence `/dlocal/run`.

Si vous estimez que ces limites (quotas) sont trop contraignantes pour vous, n'hésitez pas à ouvrir un ticket auprès du support. Celles-ci peuvent être augmentées sur demande justifiée.

## Gestion des données sur la baie de disques

Les données du calculateur Boréale sont stockées sur une baie de disques accessible sur l'ensemble du cluster en GPFS. Les performances mesurées lors de la livraison sont de 3,5 Go/s pour la partition `/dlocal`. Ces partitions sont optimisées pour la lecture/écriture sur des gros fichiers.

Si vos travaux mettent en jeu une multitude de petits fichiers, prendre contact avec le support afin de mettre en place un accès à une partition plus adaptée à ce type de traitements (voir la suite de la documentation pour les explications).

### Quelques commandes pratiques

**Combien ai-je de fichiers dans /dlocal ?**

```
mmlsquota

```
lire la ligne gpfs1 dlocal, colonne "files"

**Combien d'espace disque est-ce que je consomme ?**

```
mmlsquota
```
En ajoutant --block-size auto à la fin de la commande, vous obtiendrez un affichage au format "humain" (avec l'unité de valeur la plus adaptée pour un humain)

Pour un affichage au format humain des quotas sur les espaces home et dlocal uniquement :

```
mmlsquota --block-size auto | awk 'NR<3;($2=="home"||$2=="dlocal")'
```
**Comment connaître la liste des dossiers temporaires de calcul de l'utilisateur nom_login ?**

```
find /dlocal/run -type d -mindepth 0 -maxdepth 1 -user nom_login
```
**Comment connaître la liste des calculs soumis dans la partition compute entre le 1/11/2022 et le 15/11/2022 pour faire du ménage ?**

```
sacct -r compute -S 2022-11-01 -E 2022-11-15
```
Vous pouvez rajouter l'option -l pour afficher plus d'informations.

**Comment connaître le nombre de fichiers d'un dossier chemin_dossier ?**

```
find chemin_dossier -type f | wc -l
```

**J'ai besoin de faire diminuer mon nombre de fichiers, mais je ne peux rien supprimer. Comment faire ?**

Archivez certaines arborescences avec la commande tar : une archive = 1 **fichier**

### Quelques conseils

#### Dans les scripts de soumission...

Le rapatriement des données s'effectue avec une commande mv. Ne la remplacer surtout pas par un cp, qui duplique les données et qui peut être très longue à s'exécuter.

#### Si vous développez...

Privilégiez les fichiers volumineux avec des formats de type HDF5 plutôt qu'une multitude de petits fichiers. Vous gagnerez en performances sur les clusters de calcul avec des tailles de blocs importantes.

#### Si vous générez beaucoup de fichiers...

Surveillez votre quota. Affichez-le automatiquement lors de la connexion (via ajout approprié dans votre fichier `~/.bash_profile`).

### Quelques informations complémentaires

***Les partitions et leurs usages***

La baie de disques est séparée en 2 parties (systèmes de fichiers) contenant chacun des sous parties (filesets).

La première partie est la plus volumineuse et la plus performante : elle accueille `/dlocal`.

La deuxième partie est plus petite mais sur disques SSD pour compenser la perte de performances de la petite taille de blocs : elle accueille `/soft` et `/home`.

- `/home` contient les dossiers d'accueil des utilisateurs.
- `/dlocal` contient les dossiers temporaires des calculs (/dlocal/run) et certains dossiers de calcul permanents (`/dlocal/home`) quand le besoin est qualifié.
- `/soft` contient les logiciels mis à disposition par le CRIANN

:::caution
Aucune sauvegarde n'est effectuée sur les données utilisateurs. Pensez à rapatrier vos codes et vos données dans vos laboratoires.
:::

Nous vous encourageons fortement à utiliser les outils de versioning, tel que GIT, de vos établissements. Renseignez-vous auprès de vos DSI.

Le client `git` est installé sur les frontales, sans chargement de module.

***Les quotas***

Afin de garantir de bonnes performances, il faut maintenir un taux de remplissage de la baie (volumétrie et nombre de fichier) raisonnable. Pour cela, le CRIANN a positionné deux types de quotas :

- `/home` : quota par défaut de 50 Go / utilisateur
- `/dlocal` : quota de 10 millions de fichiers

Dans les 2 cas, les limites correspondent à des valeurs "soft" pouvant être dépassées temporairement (7 jours). Au delà de ce délai, l'usage doit redescendre en dessous de la limite soft, sinon, aucune création de fichier n'est possible. Une limite "hard" avec en général 10 Go supplémentaire est également positionnée : elle ne peut en aucun cas être dépassée.

Si vous estimez que ces limites sont trop contraignantes pour vous, n'hésitez pas à ouvrir un ticket auprès du support. Celles-ci peuvent être augmentées sur demande justifiée.

La commande `mmlsquota` explique en haut de cette page permet d'afficher les quotas et les délais de "grace" entre les quotas "soft" et "hard". Une fois le délai de 7 jours dépassé, toute demande d'allocation de volumétrie supplémentaire est refusée. Seules les commandes permettant de revenir en dessous du quota "soft" sont permises.

***La problématique du nombre de fichiers***

Le CRIANN a fait le choix de conserver les dossiers temporaires des calculs (`/dlocal/run/<jobid>`) au delà de la vie des calculs. Ce dossier peut ainsi être utilisé comme dossier de travail du calcul suivant.

Ces dossiers sont supprimés automatiquement par le CRIANN, 45 jours après la fin du calcul correspondant. Cela a l'avantage de pouvoir permettre d'enchaîner plusieurs calculs et également de récupérer des données qui n'auraient pas été récupérées en fin de calcul.

Pour la majeure partie des utilisateurs, en 45 jours, cela correspond à quelques milliers de fichiers. Pour certains utilisateurs de logiciels spécifiques, cela peut représenter plusieurs dizaines de millions de fichiers. Le quota est là pour éviter une dérive, mais la soumission de nouveaux calculs devient impossible si le quota est dépassé : il faut donc faire du ménage en complément du ménage automatique...

Si vous avez des questions, [merci de contacter le support](mailto:support@criann.fr).
