---
title: "Volume"
---

Un volume est un périphérique de stockage en bloc, comme un disque dur USB, qui permet d'avoir un stockage persistant.


## Gestion d'un volume
La commande `openstack volume list` liste les volumes existants.

### Création
Pour créer un volume, utilisez la commande
``` bash
openstack volume create --size <size> <volume-name>
```

Il est possible de créer un volume depuis différents types de source selon l'option choisie à la création du volume.

- sans option, pour créer un volume non-bootable,
- depuis une image - [`--image <image>`] - souvent utilisé pour créer un volume de démarrage pour une instance,
- depuis un instantanée - [`--snapshot <snapshot>`],
- depuis un autre volume - [`--source <volume>`] - pour cloner un volume ,
- depuis un replicat de volume - [`--source-replicated <replicated-volume>`] - pour cloner un réplica.

*Si un volume est construit à partir d'une source spécifiée alors il n'est pas utile de preciser la taille.*


### Redimensionnement
Pour redimensionner un volume, indiquez l'identifiant ou le nom du volume ainsi qu'une taille (`--size`) supérieure à l'ancienne.

:::warning Attention
Le volume ne doit pas être attaché à une instance.
:::

``` bash
openstack volume set <volume> --size <new-size>
```
Cette commande ne renvoie aucune sortie mais vous pouvez vérifier la nouvelle taille du volume en affichant ses informations.


### Suppression
Supprimez le volume en indiquant son identifant ou son nom avec la commande suivante.

:::warning Attention
Avant de supprimer un volume, assurez-vous qu'il ne soit pas attaché à une instance.
:::

``` bash
openstack volume delete <volume>
```


>
Vous pouvez vérifier que le volume est bien supprimé en affichant la liste des volumes.
``` bash
openstack volume list
```
Il devrait apparaître en état de suppression (*status = deleting*).
![SuppressionVolume](/img/nova/Nova_VolumeDelete.png)
Une fois complètement supprimé, il disparaît de la liste. Donc si le volume n'avait pas une taille importante il est possible que vous n'ayez pas eu le temps de le voir apparaître en état de suppression dans la liste des volumes.



## Volume et instance
Les volumes peuvent être attachés - et détachés - à des instances à tout moment.

:::note
Un volume peut être attaché à une seule instance
:::

### Attacher un volume à une instance
Pour attacher un volume à une instance, utilisez `openstack server add volume` en specifiant l'identifiant ou le nom de l'instance et celui du volume.
``` bash
openstack server add volume <instance> <volume>
```

>
Cette commande ne produit aucune sortie, cependant, vous pouvez vérifier que le volume est bien attaché à une instance en affichant ses informations.
``` bash
openstack volume show <volume>
```
![VolumeAttacher](/img/nova/Nova_VolumeAssociate.png)



### Détacher un volume d'une instance
Pour détacher un volume d'une instance, précisez l'identifiant ou le nom de l'instance et celui du volume.
``` bash
openstack server remove volume <instance> <volume>
```

>
Pour vérifier que le volume n'est plus attaché, vous pouvez afficher ses informations.
``` bash
openstack volume show <volume>
```
La ligne des attachements doit être vide (*attachments = []*).
![VolumeDissociate](/img/nova/Nova_VolumeDissociate.png)
