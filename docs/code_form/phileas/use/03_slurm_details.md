# Détails sur Slurm

## Partitions
Les "Partitions" de Slurm définissent un groupe de machines, généralement similaires en termes d'utilité. Exemple : la partition "visu" regroupe les 2 noeuds de visualisation, "standard" regroupe les noeuds CPU, etc.

:::info
Il n'est pas possible de soumettre un job à cheval sur deux partitions différentes
:::


## Accounts
Les "Accounts" de Slurm sont utilisés en tant que compte en banque pour le décompte des heures CPU utilisées.

:::warning
Sur Phileas, vous ne **pourrez pas** calculer avec le projet par défaut `phileas-users`. Vous devrez impérativement spécifier quel account utiliser avec l'option `--account`.
:::

Pour vérifier à quels comptes vous appartenez, utilisez la commande :
```bash
sacctmgr show user user=$USER format="user%30,account%30" withass
```

## QoS
Les "QoS" de Slurm permettent de gérer la priorité des jobs dans la queue. Pour vérifier quelles QoS vous pouvez utiliser et sur quel Account, utilisez la commande :
```bash
sacctmgr show user user=$USER format="user%30,account%30,qos%60" withass
```

## Connexion sur les noeuds
Lors de la création de votre compte, nous avons automatiquement généré des certificats en interne de Phileas, qui vous seront utiles pour vous connecter aux noeuds de calcul lorsque vous avez des jobs dessus.
Vous n'aurez donc **pas** à générer de clé SSH interne, **ni** de rentrer un quelconque mot de passe.

:::info
Notez en revanche que vous ne **pourrez pas** vous connecter sur les noeuds si vous n'avez pas de job dessus. Cette condition est immuable et nous ne ferons **aucune** exception.
:::