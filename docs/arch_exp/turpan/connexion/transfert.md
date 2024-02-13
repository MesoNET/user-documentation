---
title: Transfert des fichiers
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Transférer des fichiers entre Turpan et votre poste de travail

## Passez par un fichier tar ou zip
Surtout si vous avez beaucoup de fichiers, commencez par les mettre dans un fichier tar ou zip, il est plus efficace de transférer un seul gros fichier que beaucoup de petits.

Avec tar :
```
tar czf mon_repertoire.tgz mon_repertoire
```
Avec zip :
```
zip -r mon_repertoire.zip mon_repertoire
```

## Transfert de fichiers entre Turpan et le poste de travail

<Tabs>
  <TabItem value="rsync" label="Avec rsync" default>

Transférer depuis Turpan vers mon poste de travail:  
```shell
rsync -avP user@turpan.calmip.univ-toulouse.fr:/path/on/turpan/mon_repertoire.tgz ma-copie-en-local.tgz
```

Transférer depuis mon poste de travail vers Turpan:
```shell
rsync -avP mon-repertoire.tgz user@turpan.calmip.univ-toulouse.fr:/path/on/turpan/ma-copie-en-local.tgz 
```

:::danger Important

Si la liaison s'interrompt durant le transfert de fichiers, ne supprimez pas le fichier partiellement transféré : il vous suffira de retaper la même commande lorsque la liaison sera revenue, le transfert reprendra là où il s’était interrompu.

:::

  </TabItem>
  <TabItem value="winscp" label="Avec winscp">

Vous pouvez utiliser winscp (seulement sous MS-Windows). Pour la configuration de l'authentification par clé, il faut utiliser [cette documentation](https://winscp.net/eng/docs/ui_login_authentication).

Si vous devez transférer de gros fichiers avec winscp, voici quelques conseils pour améliorer la performance :

1. Désactiver dans le menu "Connection" l’option "Optimize connection buffer size" (https://winscp.net/forum/viewtopic.php?t=25705)
2. Désactiver la compression "Advanced Site Settings" -> "SSH" décocher la case "Enable compression" (https://winscp.net/eng/docs/faq_slow)
3. Utiliser le protocole SCP plutot que SFTP (https://winscp.net/eng/docs/faq_slow)


  </TabItem>
</Tabs>

## Au fait ..., avez-vous vraiment besoin de transférer vos fichiers ?

Si c'est pour les post-traiter, peut-être serait-il plus efficace d'utiliser nos équipements de [visualisation à distance](./visu.md) !

Si c'est pour les conserver, peut-être pouvez-vous commencer par les stocker sur l'espace de stockage de la fédération de stockage MesoNET (Espace bientôt disponible).