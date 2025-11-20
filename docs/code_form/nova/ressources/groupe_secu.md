---
title: "Groupe de sécurité"
---
Le groupe de sécurité est le **pare-feu** qui va protéger les instances en gérant les **autorisations d'accès** au réseau.

Le groupe de sécurité - __*security group*__ - par défaut autorise toutes les communications sortantes mais aucune communication entrante.
Les règles de groupe ne sont pas figées et peuvent donc être modifiées à tout moment : soit en supprimant, soit en ajoutant de nouvelles règles.

Les groupes de securités peuvent être utilisés séparément ou de manière cumulée.

## Les groupes
### Groupes disponibles
Vous pouvez lister les groupes existants dans le projet avec `openstack security group list`.
``` bash
openstack security group list
+--------------------------------------+-----------------+------------------------+----------------------------------+------+
| ID                                   | Name            | Description            | Project                          | Tags |
+--------------------------------------+-----------------+------------------------+----------------------------------+------+
| 2d9d1210-78f9-47e4-87a5-68851cc9f5ec | nbgrader        |                        | 88ddbfbb9b7f4fe981ce214be524d401 | []   |
| ea78016d-725c-4e7a-9a80-8f9ab3dd0db2 | default         | Default security group | 88ddbfbb9b7f4fe981ce214be524d401 | []   |
| ee67a987-6e4e-4228-baac-0c5541e62631 | jupyterhub-test |                        | 88ddbfbb9b7f4fe981ce214be524d401 | []   |
+--------------------------------------+-----------------+------------------------+----------------------------------+------+
```

Il est également possible de voir en détail les règles définies dans un groupe de sécurité avec la commande `openstack security group rule list <groupname>`.
``` bash
openstack security group rule list my-security-group
+--------------------------------------+-------------+-----------+------------+-----------------------+
| ID                                   | IP Protocol | IP Range  | Port Range | Remote Security Group |
+--------------------------------------+-------------+-----------+------------+-----------------------+
| 01e07f78-264d-478c-b100-fed022cc72ed | None        | None      |            | None                  |
| 22d0ff13-360b-4fbb-8a3a-82d3235cfe34 | tcp         | 0.0.0.0/0 | 22:22      | None                  |
| 45d6f8d3-ebca-485b-973f-62586c6859fc | None        | None      |            | None                  |
| ac5211e7-62c3-4e6c-af02-d09a60878f99 | tcp         | 0.0.0.0/0 | 80:80      | None                  |
| fd0fc114-421a-4686-8ae2-2ca44fcdfdfd | tcp         | 0.0.0.0/0 | 443:443    | None                  |
+--------------------------------------+-------------+-----------+------------+-----------------------+
```


### Création d'un nouveau groupe
Vous pouvez créer un nouveau groupe de sécurité avec `openstack security group create <groupname>`.

>
Par exemple : on crée un nouveau groupe appelé *my-security-group*.
``` bash
openstack security group create my-security-group
```

À sa création, le nouveau groupe n'a pas de règles de filtrage particulières, il faut donc les ajouter en fonction des besoins d'accès à l'instance.


## Les règles de filtrage

### Ajout de règle
Pour lister les règles d'un groupe de sécurité, utilisez la commande `openstack security group rule list <groupname>`.
Les nouveaux filtres sont ajoutés avec `openstack security group rule create`.

>
Par exemple, on souhaite ajouter un filtre pour pouvoir se connecter en ssh à la machine.
Dans un premier cas, on autorise seulement une plage d'adresses ip donnée
``` bash
openstack security group rule create my-security-group \
    --remote-ip 152.77.223.66/32 \
    --ingress \
    --dst-port 22 \
    --protocol tcp
```
Dans le deuxième cas, on autorise l'accès à partir d'adresses ip provenant d'un autre groupe de sécurité appelé *other-security-group*.
``` bash
openstack security group rule create my-security-group \
    --protocol tcp \
    --dst-port 22 \
    --remote-group other-security-group
```

Grace aux règles de filtrage, on choisit quels protocoles sont autorisés et quels ports sont ouverts et disponibles :
on limite ainsi la visibilité des instances au reste du monde.

### Exemples de filtres
Dans cette partie on donne quelques exemples de protocoles et de ports à ouvrir pour autoriser différentes connexions. Les filtres sont appliqués à toutes les adresses ip du sous-réseau: 0.0.0.0/0.

#### Règles pour le protocole TCP

##### Accès en ssh - port 22
Afin de pouvoir se connecter en ssh à une instance, il faut que le groupe de securité autorise le protole TCP avec le port 22 ouvert.
``` bash
openstack security group rule create my-security-group \
    --protocol tcp \
    --dst-port 22 \
    --remote-ip 0.0.0.0/0
```

##### Accès en HTTP - port 80
La communication en HTTP n'est possible qu'en autorisant le protocole TCP et en ouvrant le port 80.
``` bash
openstack security group rule create my-security-group \
    --protocol tcp \
    --dst-port 80 \
    --remote-ip 0.0.0.0/0
```

##### Accès en HTTPS - port 443
La version securisée de HTTP communique elle aussi via le protocole TCP et en utilisant le port 443.
``` bash
openstack security group rule create my-security-group \
    --protocol tcp \
    --dst-port 443 \
    --remote-ip 0.0.0.0/0
```

##### Ouverture d'une plage de ports
Il est également possible d'ouvrir une plage de ports.
Par exemple, pour NetBIOS, on ouvre les ports 137 à 139.
``` bash
openstack security group rule create my-security-group \
    --protocol tcp \
    --dst-port 137:139 \
    --remote-ip 0.0.0.0/0
```

Pour d'autre type de connexion TCP : voir la [liste complète des ports TCP](https://fr.wikipedia.org/wiki/Liste_de_ports_logiciels).


#### Règles pour le protocole ICMP
Pour autoriser un ping des instances, il faut permettre l'accès au trafic ICMP :
``` bash
openstack security group rule create my-security-group \
    --protocol icmp \
```


### Suppression de règle
``` bash
openstack security group rule delete RULE_ID
```
