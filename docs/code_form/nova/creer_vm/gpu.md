---
title: "Lancer une VM avec un GPU (H100)"
sidebar_position: 4
---

La plateforme Nova dispose de **12 GPU NVIDIA H100** répartis sur 3 serveurs hôtes.
Pour créer une VM utilisant un de ces GPU, il faut :

- une **image** avec les drivers NVIDIA installés,
- un **gabarit** de la gamme `mesonet-*-h100p`.

## Demander la ressource dans le portail

L'accès aux GPU n'est pas accordé par défaut : il faut **demander la ressource « Nova-Cloud GPU H100 »** dans votre projet sur le [portail](https://acces.mesonet.fr).

Une fois la ressource attribuée à votre projet, les gabarits `mesonet-*-h100p` deviennent visibles dans la liste des gabarits (`openstack flavor list`) et utilisables. Tant que la ressource n'est pas accordée, ces gabarits ne sont simplement pas visibles.

## Choisir la bonne image

Les GPU nécessitent une image contenant les **drivers NVIDIA**. Les images suivantes sont disponibles (voir [Images](/code_form/nova/ressources/images)) :

- `ubuntu-24.04-noble-h100-drivers` (spécifique H100)
- `ubuntu-24.04-noble-x86_64-nvidia-gpu-drivers`
- `debian-12-generic-amd64-nvidia-gpu-drivers`
- `ubuntu-22.04-jammy-x86_64-nvidia-gpu-drivers`

:::warning Attention
Certaines images existent sous différents formats et portent donc le même nom.
Dans ce cas, utilisez l'ID de l'image souhaitée : `--image <IMAGE_ID>`.
:::

## Choisir le bon gabarit

Les gabarits GPU portent le suffixe `-h100p` et suivent la nomenclature `mesonet-<type>X<nb_cpu>-h100p` (voir [Gabarit](/code_form/nova/ressources/flavor)) :

| Type | Mémoire | Exemples |
|------|---------|----------|
| `gen` | ~2 Go/vCPU (équilibré) | `mesonet-genX1-h100p`, `mesonet-genX4-h100p` |
| `cpu` | ~1 Go/vCPU | `mesonet-cpuX1-h100p`, `mesonet-cpuX8-h100p` |
| `mem` | ~4 Go/vCPU | `mesonet-memX1-h100p`, `mesonet-memX16-h100p` |

Chaque type existe avec 1, 2, 4, 8, 16 ou 32 vCPU. Une VM utilisant un gabarit `-h100p` se voit attribuer un GPU NVIDIA H100.

## Lancer la VM

``` bash
openstack server create \
    --image ubuntu-24.04-noble-x86_64-nvidia-gpu-drivers \
    --flavor mesonet-genX4-h100p \
    --network default-net \
    --security-group default \
    --key-name my-key \
    my-gpu-instance
```

:::note
Utilisez **toujours** le réseau [**default-net**](/code_form/nova/ressources/reseau#réseau-privé) pour lancer vos instances !
:::

## Vérifier le GPU

Une fois connecté à la VM (voir [Accès à la VM](/code_form/nova/creer_vm/acces_vm)), vérifiez que le GPU est bien présent :

``` bash
nvidia-smi
```
