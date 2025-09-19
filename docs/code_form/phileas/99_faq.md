# F.A.Q

## Erreurs de connexion
### Lorsque je veux me connecter, on me dit que ma clé n'est pas protégée
Si, lors d'une connexion SSH, vous obtenez un message similaire à : 
```bash
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@         WARNING: UNPROTECTED PRIVATE KEY FILE!          @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Permissions 0777 for '/home/xx/.ssh/phileas_key' are too open.
It is required that your private key files are NOT accessible by others.
This private key will be ignored.
Load key "/home/xx/.ssh/phileas_key": bad permissions
xxxxx@bastion.phileas.ec-nantes.fr: Permission denied (publickey).
Connection closed by UNKNOWN port 65535
```
Cela signifie que les permissons de votre clé privée `phileas_key` sont trop ouvertes, et SSH refusera de l'utiliser pour se connecter à Phileas. Pour régler ce problème, sous Linux, effectuez la commande suivante sur votre clé privée (ajustez l'emplacement de la clé si vous n'avez pas utilisé l'emplacement préconisé) :
```bash
chmod 0600 ~/.ssh/phileas_key
```
et retentez le SSH.

### Je n'arrive pas à me connecter, j'ai simplement un message d'erreur "Permission denied"
Cette erreur est malheureusement très générique et peut avoir plusieurs causes différentes. Testez les étapes suivantes avant d'ouvrir un ticket support MesoNET.

#### Mon certificat est-il invalide ?
Inspectez votre certificat avec la commande :
```bash
ssh-keygen -L -f ~/.ssh/phileas_key-cert.pub
```
Dans le résultat, vérifiez que la date d'expiration du certificat n'est pas passée (appelé 'Valid' dans le certificat), que le nom d'utilisateur (appelé 'principal') est correct, et que les adresses IP intégrées (appelées 'source-address') correspondent bien à celles que vous avez indiqué sur https://auth.phileas.ec-nantes.fr . **Notez que l'adresse IP 130.66.159.6/32 est nécessaire pour fonctionner, et n'apparaît pas dans la boîte de dialogue de saisie d'adresse**.

```
Type: ssh-ed25519-cert-v01@openssh.com user certificate
Public key: ED25519-CERT SHA256:UdLlHCFe008eXtSiSFKAt8DPR6uRDAZRhdwwN7Zvr8g
Signing CA: ED25519 SHA256:S9GJbecpkIwhdEDY1iLOIrZxPZGKqQOJ9eP+sWfqVec (using ssh-ed25519)
Key ID: "pbondial@ec-nantes.fr-external"
Serial: 2712428235499462096
Valid: from 2024-11-13T15:48:33 to 2024-12-13T15:49:03
Principals: 
        pbondial@ec-nantes.fr
Critical Options: 
        source-address 130.66.120.1/32,130.66.159.6/32
Extensions: 
        permit-X11-forwarding
        permit-agent-forwarding
        permit-port-forwarding
        permit-pty
```

#### Ma configuration SSH est-elle bonne ?
Vérifiez que votre bloc de configuration SSH relatif à Phileas ne comporte pas d'erreur (pas de chemin de clé erroné, pas de modification du nom d'utilisateur, etc.)

#### Je n'arrive toujours pas à me connecter
Ouvrez un ticket de support MesoNET pour Phileas.


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