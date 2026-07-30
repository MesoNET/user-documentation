---
title: "Session LLM-RAG (OpenWebUI)"
description: "Documentation utilisateur -- Session interactive LLM sur Turpan via OpenWebUI."
---

# Session interactive LLM-RAG (OpenWebUI)

Sur Turpan, un assistant conversationnel s’appuyant sur des modèles de langage (LLM) hébergés sur le calculateur est accessible via l’interface web OpenWebUI. Il permet aux utilisateurs d’effectuer du RAG (Retrieval-Augmented Generation) directement sur leurs données stockées sur le cluster afin de les interroger en langage naturel et d’obtenir des réponses contextualisées.

Vous trouverez ici :
- [Session LLM-RAG](#session-llm-rag)
    - [Comment lancer une session interactive LLM-RAG](#comment-lancer-une-session-interactive-llm-rag)
    - [Créer son compte OpenWebUI](#créer-son-compte-openwebui)
        - [Utiliser l'interface OpenWebUI](#utiliser-linterface-openwebui)
    - [Choisir l'emplacement de vos données](#choisir-lemplacement-de-vos-données)
    - [Alimenter la base documentaire (méthode automatisée)](#alimenter-la-base-documentaire-méthode-automatisée)
    - [Arrêter la session, Réinitialiser les données OpenWebUI et relancement de session](#comment-arrêter-une-session-interactive-llm-rag)
- [Problèmes courants](#problemes-courants)
    - [Erreur Address already in use](#erreur-address-already-in-use)
    - [Aucun modèle disponible : conflit avec Ollama](#aucun-modèle-disponible--conflit-avec-ollama)

---

## Session LLM-RAG

C'est possible sur Turpan, à certaines conditions :

- la session réserve un nœud de calcul GPU pour toute sa durée ;
- les modèles disponibles sont ceux déployés par CALMIP ;
- les échanges, les comptes et les documents déposés restent propres à chaque utilisateur ;
- les calculs sont exécutés sur Turpan, l'interface s'affichant dans le navigateur du poste de travail via un tunnel SSH.

:::info Convention de notation
Dans les exemples de ce document, `USER` représente votre nom d'utilisateur CALMIP, `WW.XX.YY.ZZ` l'adresse du nœud alloué et `<JOB_ID>` l'identifiant du job Slurm. Ces trois valeurs sont propres à chaque session et vous seront données par le script.
:::

---

## Comment lancer une session interactive LLM-RAG

Lorsque vous êtes connecté sur une frontale de Turpan, exécutez le script :

```bash
runLlmSession.sh
```

Laissez le script démarrer (cela peut prendre un certain temps, soyez patient...), puis vous devriez voir un affichage de ce style :

```
[115/150] Queuing and waiting for Llm session resources initialization (<JOB_ID>).
Please be patient, this might take a while ...
llm session ...
#===========================================================================
|
| Your OpenWebUI is now available.
|
| You must now open a TERMINAL on YOUR laptop and execute the command :
|
|     ssh -S none -o ExitOnForwardFailure=yes \
|         -L 8080:/users/USER/.llmsession-data/run/openwebui-WW.XX.YY.ZZ-<JOB_ID>.sock \
|         -n USER@WW.XX.YY.ZZ 'si-init.sh'
|
| Then from your browser, visit the following url :
|
|     http://localhost:8080
|
| (First time: create your account. Next times: log in with it.)
|
#===========================================================================
| CAUTION : DO NOT CLOSE this slurm job or this terminal !
#===========================================================================
+---------------------------------------------------------------------------
| CONNECTION INFO :
|   * Job ID                 : <JOB_ID>
|   * Target                 : WW.XX.YY.ZZ (turpancompY)
|   * OpenWebUI URL          : http://localhost:8080
|   * SSH tunnel socket path : /users/USER/.llmsession-data/run/openwebui-WW.XX.YY.ZZ-<JOB_ID>.sock
|   * Log file               : /users/USER/.llmsession-data/run/slurm-session-llm-<JOB_ID>.log
+---------------------------------------------------------------------------
| YOUR DATA :
|   * Working directory      : /users/USER
|   * OpenWebUI data         : /users/USER/.llmsession-data/openwebui
|   * RAG documents (drop your files here) :
|       /users/USER/.llmsession-data/documents
+---------------------------------------------------------------------------
[-] - Press CTRL-C to quit
```

Sur un second terminal sur votre poste de travail, exécutez la commande ssh donnée par le script :

```bash
ssh -S none -o ExitOnForwardFailure=yes \
    -L 8080:/users/USER/.llmsession-data/run/openwebui-WW.XX.YY.ZZ-<JOB_ID>.sock \
    -n USER@WW.XX.YY.ZZ 'si-init.sh'
```

La commande doit être recopiée telle qu'elle apparaît dans le terminal Turpan : elle contient votre nom d'utilisateur, l'adresse du nœud et l'identifiant de la session, qui changent à chaque lancement. Le chemin du socket dépend en outre du répertoire de travail choisi (voir [Choisir l'emplacement de vos données](#choisir-lemplacement-de-vos-données)).

:::caution DO NOT CLOSE TERMINALS
Comme les messages l'indiquent, ne fermez pas la fenêtre de demande de session interactive sur Turpan, ni celle du tunnel SSH sur votre poste de travail.
:::

Enfin, depuis le navigateur de votre poste de travail, visitez l'URL fournie par le script :

```
http://localhost:8080
```

## Créer son compte OpenWebUI

Le compte OpenWebUI est local à l'instance : il est indépendant de vos identifiants CALMIP et n'est pas partagé avec les autres utilisateurs.

**Première utilisation**
Créez un compte en renseignant un nom d'affichage, une adresse électronique et un mot de passe.

**Utilisations suivantes**
Connectez-vous avec l'adresse et le mot de passe créés précédemment. Vos conversations et vos documents sont conservés d'une session à l'autre.

:::info
La création du compte déclenche également la mise en service de l'indexation automatique des documents (voir [Alimenter la base documentaire](#alimenter-la-base-documentaire-méthode-automatisée)). Il est donc utile de créer son compte dès le début de la session, même si l'on ne prévoit pas de l'utiliser immédiatement.
:::

---

## Utiliser l'interface OpenWebUI

### Page d'accueil

Une fois connecté, vous arrivez sur la page principale d'OpenWebUI.

![Page d'accueil d'OpenWebUI après connexion. 1 : modèle sélectionné -- 2 : menu principal -- 3 : espace de travail -- 4 : historique des conversations -- 5 : zone de saisie -- 6 : pièces jointes et outils -- 7 : compte connecté.](/img/turpan/llm_session/fig_accueil.png)

### Choisir un modèle

Le sélecteur de modèle se trouve en haut à gauche de l'interface. Un clic sur le nom du modèle ouvre la liste des modèles disponibles, avec un champ de recherche pour filtrer la liste.

Le modèle coché est celui utilisé pour la conversation en cours. Vous pouvez en changer à tout moment ; le changement s'applique aux messages suivants.

:::info
L'option *Définir comme valeur par défaut*, sous le nom du modèle, permet de conserver ce choix pour vos prochaines conversations.
:::

![Sélection du modèle depuis le menu déroulant.](/img/turpan/llm_session/modeles.png)

### Poser une question

Saisissez votre question dans le champ central, puis envoyez-la avec la touche `Entrée` ou le bouton d'envoi. La réponse s'affiche progressivement.

Chaque échange constitue une **conversation**, enregistrée automatiquement et accessible depuis le panneau latéral gauche. Le bouton *Nouvelle conversation* permet de repartir d'un contexte vierge.

:::info
Il est recommandé d'ouvrir une nouvelle conversation lorsque vous changez de sujet : le modèle tient compte de l'ensemble des messages précédents pour formuler ses réponses.
:::

Le bouton `+` situé sous la zone de saisie permet de joindre un fichier à un message ponctuel, sans l'ajouter durablement à votre espace de travail.

### Espace de travail et documents (manuellement)

L'entrée *Espace de travail* du panneau latéral donne accès à votre espace personnel, organisé en plusieurs onglets : *Modèles*, *Connaissances*, *Prompts*, *Skills* et *Outils*.

L'onglet **Connaissances** regroupe les **collections de documents**. Une collection rassemble un ensemble de fichiers sur lesquels le modèle pourra s'appuyer pour répondre.

Deux façons d'alimenter ces collections coexistent :

- **manuellement**, depuis l'interface, comme décrit ci-dessous ;
- **automatiquement**, en déposant vos fichiers dans un répertoire surveillé (voir [Alimenter la base documentaire](#alimenter-la-base-documentaire-méthode-automatisée)). Cette seconde méthode est recommandée pour un corpus appelé à évoluer : les collections restent alors synchronisées avec le contenu du répertoire, sans intervention.

Pour créer une collection manuellement :

1. ouvrez *Espace de travail* puis l'onglet *Connaissances* ;
2. cliquez sur **+ Nouvelle connaissance** ;
3. donnez un nom à la collection ;
4. déposez-y les documents à indexer.

Une fois la collection créée, ses documents peuvent être mobilisés dans une conversation en saisissant le caractère `#` dans la zone de question, puis en choisissant la collection souhaitée dans la liste proposée. Le modèle formule alors sa réponse en s'appuyant sur le contenu de ces documents.

![Collections de documents dans l'onglet Connaissances.](/img/turpan/llm_session/collections.png)

Chaque collection indique sa date de dernière mise à jour et son propriétaire. Les documents déposés restent propres à l'utilisateur qui les a ajoutés.

:::caution
Les collections créées manuellement et celles gérées automatiquement cohabitent sans interférence. Évitez toutefois de donner à une collection manuelle le nom d'un répertoire présent dans `.llmsession-data/documents/` : les deux mécanismes écriraient alors dans la même collection.
:::

---
### Choisir l'emplacement de vos données

Par défaut, la session enregistre l'ensemble de vos données -- compte, conversations, documents indexés -- dans votre répertoire personnel (`$HOME`). Ces données peuvent représenter plusieurs gigaoctets si vous indexez un corpus volumineux.

Si votre quota personnel est proche de la saturation, l'option `--path` permet de désigner un autre répertoire de travail :

```bash
runLlmSession.sh --path /work/invite/USER
```
L’ensemble des données de session est regroupé dans un répertoire unique, .llmsession-data/, créé au premier lancement :
```bash
<repertoire de travail>/.llmsession-data/
                                        |-- run/
                                        |-- openwebui/
                                        |-- documents/
```

Trois répertoires y sont alors créés au premier lancement :

- **`run/`** -- Fichiers techniques de la session : sockets de communication et journaux.
- **`openwebui/`** -- Votre compte OpenWebUI, vos conversations et la base vectorielle des documents indexés.
- **`documents/`** -- Le répertoire dans lequel vous déposez les documents à indexer (voir [Alimenter la base documentaire](#alimenter-la-base-documentaire-méthode-automatisée)).

:::info
Le chemin indiqué doit être absolu, accessible en écriture, et raisonnablement court : les sockets de communication du système Unix sont limitées à 108 caractères. Le script vérifie ces trois conditions au lancement et refuse un chemin non conforme avec un message explicite.
:::

#### Mémorisation du répertoire de travail

L'option `--path` n'est à indiquer qu'une seule fois. Le chemin retenu est enregistré dans un fichier de votre répertoire personnel :

```
~/.llm_base_dir
```

Ce fichier ne contient qu'une ligne : le chemin choisi. Il reste dans votre répertoire personnel quel que soit le répertoire de travail utilisé, afin de pouvoir être retrouvé au lancement suivant.

Lorsque vous démarrez une session sans préciser `--path`, le script consulte ce fichier :

- s'il existe, le répertoire mémorisé est réutilisé ;
- sinon, la session s'installe dans votre répertoire personnel.

Vous retrouvez donc automatiquement votre environnement, sans avoir à retenir ni retaper le chemin. Voici la succession des comportements :

```
Lundi    runLlmSession.sh --path /work/invite/USER
         -> /work/invite/USER (chemin enregistre)

Mardi    runLlmSession.sh
         -> /work/invite/USER (chemin retrouve automatiquement)

Mercredi runLlmSession.sh --path $HOME
         -> /users/USER (nouveau chemin enregistre)

Jeudi    runLlmSession.sh
         -> /users/USER (chemin retrouve automatiquement)
```

Le répertoire effectivement utilisé est rappelé à chaque démarrage, dans le bloc `YOUR DATA` affiché par le script :

```
+---------------------------------------------------------------------------
| YOUR DATA :
|   * Working directory      : /work/invite/USER
|   * OpenWebUI data         : /work/invite/USER/.llmsession-data/openwebui
|   * RAG documents (drop your files here) :
|       /work/invite/USER/.llmsession-data/documents
+---------------------------------------------------------------------------
```

Pour connaître à tout moment le répertoire mémorisé, sans lancer de session :

```bash
cat ~/.llm_base_dir
```

Si le fichier n'existe pas, aucun répertoire n'a été mémorisé et la session utilisera votre répertoire personnel.

#### Changer de répertoire de travail

Il suffit d'indiquer à nouveau `--path` avec le nouveau chemin : la mémorisation est mise à jour. Pour revenir à votre répertoire personnel :

```bash
runLlmSession.sh --path $HOME
```

Vous pouvez également supprimer le fichier de mémorisation, ce qui ramène la session à son comportement par défaut :

```bash
rm ~/.llm_base_dir
```

:::caution
Changer de répertoire ouvre un espace distinct, il ne déplace rien. Chaque emplacement possède son propre compte OpenWebUI, ses propres conversations et ses propres documents indexés. Après un changement de répertoire, vous arrivez donc sur un environnement vierge : vos données précédentes ne sont pas perdues, elles restent dans l'ancien répertoire et seront retrouvées telles quelles si vous y revenez.

Si vos conversations semblent avoir disparu, vérifiez d'abord le répertoire utilisé avec `cat ~/.llm_base_dir` avant toute autre opération.
:::

Pour transférer réellement vos données d'un emplacement à un autre, la session doit être arrêtée, et la copie effectuée manuellement :

```bash
cp -r /users/USER/.llmsession-data/openwebui /work/invite/USER/
cp -r /users/USER/.llmsession-data/documents /work/invite/USER/
runLlmSession.sh --path /work/invite/USER
```

---

## Alimenter la base documentaire (méthode automatisée)

La section [Utiliser l'interface OpenWebUI](#utiliser-linterface-openwebui) décrit la création manuelle d'une collection depuis l'interface. La session propose également un mécanisme automatique : tout document déposé dans un répertoire dédié est indexé sans intervention de votre part.

### Principe

Un service de surveillance est démarré en même temps que la session. Il inspecte le répertoire `.llmsession-data/documents/` toutes les quinze secondes et synchronise son contenu avec vos collections OpenWebUI.

Le répertoire fait autorité : les collections reflètent en permanence l'état des fichiers qu'il contient. Vous n'avez donc rien à téléverser depuis l'interface.

### Où déposer vos documents

Le répertoire `.llmsession-data/documents/` est créé automatiquement au premier lancement, à la racine de votre répertoire de travail (voir [Choisir l'emplacement de vos données](#choisir-lemplacement-de-vos-données)) :

```
/users/USER/.llmsession-data/documents/               (par defaut)
/work/invite/USER/.llmsession-data/documents/         (avec --path)
```

Les formats pris en charge sont `.pdf`, `.docx`, `.txt`, `.md` et `.csv`. Les fichiers d'autres types présents dans le répertoire sont simplement ignorés.

### Organiser vos documents en collections

Chaque sous-répertoire devient une collection. Son nom est construit à partir du chemin relatif, les séparateurs étant remplacés par des tirets. Les fichiers placés directement à la racine sont regroupés dans une collection nommée `.llmsession-data/documents`.

Ainsi, l'arborescence suivante :

```
documents/
|-- consignes-generales.txt
|-- DUERP/
|   |-- Chimie/
|   |   |-- stockage-acides.pdf
|   |   `-- fiches-securite.pdf
|   `-- Electrique/
|       `-- habilitations.pdf
`-- Procedures/
    `-- accueil-nouvel-arrivant.docx
```

produit quatre collections :

- `documents` -- consignes-generales.txt
- `DUERP-Chimie` -- stockage-acides.pdf, fiches-securite.pdf
- `DUERP-Electrique` -- habilitations.pdf
- `Procedures` -- accueil-nouvel-arrivant.docx

Organisez vos répertoires selon les thèmes que vous souhaitez interroger séparément. Dans une conversation, le caractère `#` permet de sélectionner une collection précise : le modèle restreint alors sa réponse aux documents de cette collection.

### Mise à jour des documents

Le service ne se contente pas d'ajouter les nouveaux fichiers : il maintient les collections en cohérence avec le contenu du répertoire.

**Fichier ajouté**
Il est indexé et rattaché à la collection correspondant à son répertoire.

**Fichier modifié**
L'ancienne version est retirée de la collection avant que la nouvelle soit indexée. Une seule version reste donc consultable, ce qui évite qu'un document périmé ressorte dans les réponses.

**Fichier supprimé**
Il est également retiré de la collection. La collection elle-même est conservée, même vide.

**Fichier réenregistré sans modification**
Aucune action. La comparaison porte sur le contenu réel du fichier, non sur sa date : réenregistrer un document à l'identique ne déclenche pas de nouvelle indexation.

### Déposer des documents en cours de session

Il n'est pas nécessaire de redémarrer la session pour ajouter des documents. Les fichiers déposés pendant qu'elle est active sont pris en compte dans les quinze secondes.

:::info
Lors du dépôt d'un volume important de documents, l'interface peut devenir momentanément moins réactive : l'indexation et les réponses aux questions sollicitent les mêmes ressources. Ce ralentissement cesse une fois l'indexation terminée.
:::

### Conservation entre les sessions

Vos documents et leur indexation sont conservés à la fin de la session. Au lancement suivant, seuls les fichiers ajoutés ou modifiés depuis la dernière utilisation sont traités : la base documentaire est immédiatement disponible.

Cette conservation est liée au répertoire de travail utilisé (voir [Choisir l'emplacement de vos données](#choisir-lemplacement-de-vos-données)). Si vous démarrez une session sur un autre répertoire, vous n'y retrouverez pas les documents indexés dans le premier.

### Vérifier l'indexation

L'activité du service de surveillance est consignée dans un journal, au sein du répertoire `.llmsession-data/run/` de votre espace de travail :

```bash
tail -f ~/.llmsession-data/run/watcher-<JOB_ID>.log
```

Une indexation réussie s'y présente ainsi :

```
[watcher] 14:22:10 OpenWebUI pret. Vectorisation automatique active.
[watcher] 14:22:10 verification de .llmsession-data/documents, ingestion si necessaire...
Nouveaux : 2  Modifies : 0  Supprimes : 0
  >> consignes-generales.txt (Knowledge 'documents')
     [+] Fichier uploade.
     [OK] Attache a 'documents' et vectorise.
  >> DUERP/Chimie/stockage-acides.pdf (Knowledge 'DUERP-Chimie')
     [+] Knowledge 'DUERP-Chimie' creee.
     [OK] Attache a 'DUERP-Chimie' et vectorise.
Termine : 2/2 fichier(s) ingere(s), 0 retire(s).
```

:::info
Si l'indexation ne démarre pas, vérifiez d'abord que vous avez bien créé votre compte OpenWebUI et que vous vous êtes connecté au moins une fois : le service attend l'existence d'un compte pour accéder à vos collections.
:::

---

### Arrêter la session interactive en cours

Arrêtez ensuite la session complète, dans cet ordre :

1. sur votre poste de travail, fermez le terminal du tunnel SSH (`CTRL-C`) ;
2. sur Turpan, revenez au terminal dans lequel vous avez lancé `runLlmSession.sh` et tapez `CTRL-C` pour libérer le job Slurm.

### Réinitialiser les données OpenWebUI

Supprimez ensuite le dossier de données d'OpenWebUI. Il se trouve à la racine de votre répertoire de travail (voir [Choisir l'emplacement de vos données](#choisir-lemplacement-de-vos-données)) :

```bash
rm -rf ~/.llmsession-data/openwebui                              # repertoire par defaut
rm -rf /work/invite/USER/.llmsession-data/openwebui             # si vous utilisez --path
```

:::caution
Cette suppression est définitive. Le dossier `.llmsession-data/openwebui` contient votre compte OpenWebUI, l'ensemble de vos conversations et vos collections de documents. Après cette opération, vous devrez recréer votre compte à la première connexion et réindexer vos documents.

Les fichiers déposés dans `.llmsession-data/documents/` ne sont pas concernés : ils seront réindexés automatiquement à la session suivante.
:::

Plutôt que de supprimer le dossier, vous pouvez le renommer : le résultat est le même pour OpenWebUI, qui repartira d'une base vierge, mais vos données restent récupérables si l'opération ne résout pas le problème.

```bash
mv ~/.llmsession-data/openwebui ~/.llmsession-data/openwebui.bak
```

Une fois le fonctionnement rétabli et si vous n'en avez plus besoin, supprimez la sauvegarde avec `rm -rf ~/.llmsession-data/openwebui.bak`.

### Relancer la session

Relancez enfin une session complète depuis le début, comme décrit en [Comment lancer une session interactive LLM-RAG](#comment-lancer-une-session-interactive-llm-rag) :

```bash
runLlmSession.sh
```

puis rouvrez le tunnel SSH avec la nouvelle commande affichée par le script, et reconnectez-vous depuis votre navigateur.

---

## Problèmes courants 

Avant de contacter le support, vous pouvez essayer les actions suivantes :

- vérifier que le terminal contenant la session est toujours actif ;
- vérifier que le terminal contenant le tunnel SSH est toujours actif ;
- vérifier que le port indiqué dans l'URL du navigateur correspond bien à celui utilisé dans la commande ssh ;
- vérifier que vous n'avez pas une autre application en local sur votre poste de travail qui utilise déjà le port 8080 ;
- vérifier, si vos documents ou vos conversations semblent avoir disparu, le répertoire de travail utilisé avec `cat ~/.llm_base_dir` (voir [Choisir l'emplacement de vos données](#choisir-lemplacement-de-vos-données)) ;
- tuer toutes vos connexions ssh à destination de Turpan et recommencer une session interactive ;
- si vous êtes sous Windows, relancer votre session MobaXterm.

### Erreur Address already in use

Si vous obtenez l'erreur suivante lors de l'initialisation du tunnel :

```
bind [127.0.0.1]:8080: Address already in use
```

c'est que le port 8080 est déjà utilisé sur votre poste de travail (par une autre application ou une session LLM précédente). Choisissez alors un autre port local, par exemple 8082, en modifiant le **premier** nombre de l'option `-L` :

```bash
ssh -S none -o ExitOnForwardFailure=yes \
    -L 8082:/users/USER/.llmsession-data/run/openwebui-WW.XX.YY.ZZ-<JOB_ID>.sock \
    -n USER@WW.XX.YY.ZZ 'si-init.sh'
```

:::info
Si vous modifiez le port ici, vous devez le modifier également dans l'URL du navigateur : `http://localhost:8082` au lieu de `http://localhost:8080`. Seule la partie avant les deux-points change ; le chemin du socket reste inchangé.
:::

### Aucun modèle disponible : conflit avec Ollama

Si aucun modèle n'apparaît dans le sélecteur d'OpenWebUI, ou si la liste des modèles est vide alors que la session a bien démarré, la cause la plus fréquente est la présence d'un processus Ollama déjà en cours d'exécution.

Ce conflit se produit aussi bien lorsque Ollama tourne :

- sur votre poste de travail, où il occupe le port qu'OpenWebUI cherche à utiliser une fois le tunnel établi ;
- sur la frontale de Turpan, où un processus résiduel d'une session précédente peut rester actif.

Pour rétablir l'accès aux modèles, procédez dans l'ordre suivant.

#### Arrêter les processus Ollama

Sur votre poste de travail et sur la frontale Turpan, vérifiez la présence de processus Ollama :

```bash
ps -u $USER | grep ollama
```

S'il y en a, arrêtez-les :

```bash
pkill -u $USER ollama
```

Puis vérifiez qu'il n'en reste aucun en relançant la commande `ps` ci-dessus.
