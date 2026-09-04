# F.A.Q

## Erreurs sur le portail Phileas
### Mon répertoire home n'existe pas
Vous vous êtes connecté trop tôt. Une fois la première connexion effectuée, patientez environ 20 minutes avant de tenter d'accéder à Phileas.

## Erreurs de Slurm
### Je n'arrive pas a soumettre de jobs, j'ai une erreur d'account ou de partition

Si vous obtenez un message similaire à `srun: error: Unable to allocate resources: Invalid account or account/partition combination specified` lorsque vous tentez de soumettre un job, vérifiez dans un premier temps l'account que vous avez spécifié dans votre script. Cet account doit correspondre à un projet spécifique, et il faut que vous en fassiez partie. Vous pouvez lister les accounts auquels vous appartenez en lançant la commande :
```bash
sacctmgr show user user=$USER format="user%30,account%30" withass
```

## Erreurs diverses
### Je n'arrive pas à récupérer de fichier depuis internet / je n'arrive pas à cloner un dépôt Git HTTP
Si, en tentant de récupérer des fichiers divers, vous obtenez une erreur de type `403 Forbidden` en lien avec un proxy, il est nécessaire de nous faire part du domaine que vous souhaitez autoriser.

Exemple d'erreur avec curl :
```bash
[pbondial-adm@phileas-devel-001 ~]$ curl "https://korben.info"
curl: (56) Received HTTP code 403 from proxy after CONNECT
```

Cette erreur indique que le domaine que vous souhaitez joindre n'a pas été explicitement autorisé à être contacté depuis Phileas. Vous pouvez ouvrir un ticket de support en indiquant clairement quel nom de domaine vous souhaitez autoriser, et pour quelle utilité.
