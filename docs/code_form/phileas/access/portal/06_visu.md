# Applications graphiques
Vous pouvez accéder à plusieurs applications graphiques directement dans votre navigateur pour effectuer de la visualisation déportée directement sur le cluster.

Pour cela, rendez-vous dans le menu "__My interactive sessions__" et sélectionnez le logiciel que vous souhaitez lancer. Vous aurez un formulaire à remplir pour choisir les différentes caractéristiques du job de visualisation.

:::info
Souvenez-vous que l'account Slurm "_phileas-users_" ne permet __PAS__ de lancer des calculs, ni de jobs de visualisation.
:::


![Modifier les fichiers](/img/phileas/portal_graphicportal.png)

## Accéder a l'application
Quand le job est en pending, vous verrez un contour bleu :

![Modifier les fichiers](/img/phileas/portal_pending.png)

:::info
En cas de besoin, cliquez sur le lien "_Problems with this session? Submit support ticket_" pour que nous ayons tous les détails possible pour aider à débuguer le job.
:::

Une fois votre job lancé, vous verrez que la carte de job change de couleur et affiche désormais une information de connexion :

![Modifier les fichiers](/img/phileas/portal_running.png)

Vous pouvez cliquer sur le nom du noeud pour obtenir un shell dans votre navigateur, directement sur le noeud :

![Modifier les fichiers](/img/phileas/portal_nodessh.png)

Et si vous cliquez sur le bouton en bas a gauche pour lancer votre application, un nouvel onglet vous permettra d'avoir de la visualisation déportée :

![Modifier les fichiers](/img/phileas/portal_paraview.png)


:::info
Vous pouvez également cliquer sur/copier le lien "_View Only (Share-able Link)_" pour obtenir un lien unique à partager sans donner les droits d'interagir avec votre application ! Cela peut être utile en formation, ou pour aider des personnes à distance.
:::

Pour tuer le job, cliquez sur _Cancel_ ou _Delete_.


## Formations
Dans le cas des formations pré-établies, vous pouvez nous transmettre les caractéristiques de jobs de visualisation en adéquation avec votre formation (nombre de coeurs, account Slurm, walltime, GPUs, etc.) pour qu'un menu spécial apparaîsse dans le formulaire :

![Modifier les fichiers](/img/phileas/portal_training.png)

Ce menu permettra aux personnes suivant la formation de directement sélectionner un "Preset" pour que leur job se lance avec les caractéristiques choisies.
