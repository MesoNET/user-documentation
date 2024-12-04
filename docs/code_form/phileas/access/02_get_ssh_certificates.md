# Obtenir vos certificats SSH
:::info

Pour des raisons de sécurité, Phileas n'utilise **pas** vos clés SSH renseignées sur le portail MesoNET.

:::

Une fois que votre compte aura été activé sur Phileas, vous recevrez un email. Dans cet email, vous trouverez les instructions suivantes pour obtenir vos certificats SSH.

Voyez les certificats SSH comme étant une clé SSH publique, mais avec une sécurité très largement augmentée, avec une durée de validité maximale, des adresses IP autorisées à l'utiliser, etc. Etant donné le caractère public de ce certificat, vous pouvez le transmettre sans risque aux équipes du support. **La clé privée en revanche doit être strictement personnelle**.

## Renseigner la(les) adresse(s) IP de connexion pour vos certificats
Afin de garantir une sécurité maximale, nous forçons le renseignement d'une adresse IP de connexion pour SSH.

Rendez vous sur https://auth.phileas.ec-nantes.fr et connectez vous avec **MesoNET**.


Une fois connecté, rendez-vous sur l'icône de paramètres en haut a droite :

![img alt](/img/phileas/authentik_settings.png)

Ici, vous trouverez une zone de texte ou vous pourrez rentrer les adresses IPs **publiques** que vous souhaitez utiliser pour vous connecter à Phileas. Afin de vous aider à déterminer laquelle utiliser, nous avons mis en évidence l'adresse IP depuis laquelle vous accédez actuellement à la page (dans la capture d'écran, 192.168.11.200). Notez qu'il est évidemment préférable de choisir une adresse IP fixe (évitez les adresses sur un partage de connexion 4G, sur la box internet d'un ami, etc.)

![img alt](/img/phileas/authentik_ips.png)

<!-- Not yet
:::info

Notez que dans le cas ou les adresses IPs de votre laboratoire ont été renseignées, vous serez automatiquement autorisé à vous connecter depuis celui-ci.

:::
-->


Sauvegardez vos choix, et patientez quelques instants. Vous devriez reçevoir un mail avec votre certificat SSH prêt à l'emploi.

:::warning

Les certificats générés sont par défaut valides pendant 60 jours. Si votre certificat à expiré ou si vous souhaitez mettre à jour les adresses IPs d'accès, vous êtes autonomes sur l'adresse https://auth.phileas.ec-nantes.fr. Vous recevrez automatiquement un nouveau certificat lorsque vous cliquerez sur "Save". Cette manipulation est nécessaire pour garantir que vous vérifiez périodiquement vos adresses IPs autorisées, et que vous supprimiez celles dont vous n'avez plus besoin. Vous pouvez vérifier vous-même le contenu de votre certificat SSH (date d'expiration, adresses IP valides, etc.) avec la commande suivante :

```bash
$ ssh-keygen -L -f ./phileas_key-cert.pub

./phileas_key-cert.pub:
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
:::