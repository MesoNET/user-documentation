---
title: "Images"
---

Les images sont des modèles de volume système qui servent à l'instanciation d'une VM.
Une nouvelle VM ne fait pas une installation mais elle va se baser sur une image pour initialiser le contenu du volume système avant de le personnaliser.

## Images disponibles (juillet 2022)
Quelques images de systèmes GNU/Linux standards sont mises à disposition et peuvent être listées grâce à la commande `openstack image list` :
```bash
openstack image list
+--------------------------------------+----------------------------+--------+
| ID                                   | Name                       | Status |
+--------------------------------------+----------------------------+--------+
| b89e2b27-e388-4cc7-b75c-c46e95dd2b1a | centos-8-x86_64            | active |
| 78b19f3a-1394-409c-a860-c9f76bc336f6 | ciros-0.5.2-x86_64         | active |
| 7f700c57-cdec-4d0c-b3c2-9a8136563955 | debian-10-buster-x86_64    | active |
| ba0fd214-4e8d-456e-8166-e5b9b2a83d2c | debian-9-stretch-x86_64    | active |
| b62d2239-5345-4067-8a45-117644b1c52f | debian-9.13.3-vgpu-x86_64  | active |
| b0b2b2b1-ecec-413e-b182-17c530509484 | nixos-18.03-x86_64         | active |
| 8ebf61ed-f060-4d92-83ad-49145bcef6a8 | ubuntu-18.04-bionic-x86_64 | active |
| 880c4d5b-a96b-4a41-bcfc-d9590d73641c | ubuntu-18.10-cosmic-x86_64 | active |
| 7105978d-4e99-41f6-a030-61fdb5d6a66c | ubuntu-19.04-disco-x86_64  | active |
| de3e88ed-ea89-4936-a8e9-2c3ef2c29425 | ubuntu-19.10-eoan-x86_64   | active |
| e07bc56f-548c-4287-bb7f-265dd854fba0 | ubuntu-20.04-focal-x86_64  | active |
+--------------------------------------+----------------------------+--------+
```

## Créer sa propre image
Il est également possible de créer sa propre image avec `openstack image create`
``` bash
openstack image create \
    --public \
    --disk-format qcow2 \
    --container-format bare \
    --file /tmp/hurd-sid-i386.img  \
    hurd-sid-i386.img
```
:::note
Pour être démarrée directement, celle-ci doit-être *cloud-ready* (avec cloud-init).
:::
