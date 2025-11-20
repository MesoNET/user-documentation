---
title: "Gabarit"
---

Un gabarit (ou *flavor* en anglais) est un ensemble de ressources qui servira à dimensionner une nouvelle instance :
- la taille du disque système
- la quantité de mémoire
- le nombre de cœurs

Ces gabarits sont prédéfinis et seuls ceux respectant les quotas disponibles peuvent être utilisés dans une nouvelle instanciation.

Une instance peut changer de gabarit après sa création (RESIZING).
Vous pouvez commencer par choisir le plus petit gabarit nécessaire pour votre application.

Pour en connaître la liste, utilisez la commande `openstack flavor list`.

{{% notice warning %}}
Attention, deux nommages cohabitent. Les gabarits dont les noms commencent par **m1** ou **m0** sont obsolètes
{{% /notice %}}

### Gabarits

```text
+--------------------------------------+-------------------+--------+------+-----------+-------+-----------+
| ID                                   | Name              |    RAM | Disk | Ephemeral | VCPUs | Is Public |
+--------------------------------------+-------------------+--------+------+-----------+-------+-----------+
| add86f5b-dee4-4153-a540-e4d785b24905 | cpuX1             |   1024 |   20 |         0 |     1 | True      |
| 9a9e4ac7-1117-4acf-9043-8d94cb0fb7f2 | cpuX2             |   2048 |   20 |         0 |     2 | True      |
| ba2bb750-e643-4269-beb1-a2b952400c4f | cpuX4             |   4096 |   20 |         0 |     4 | True      |
| bdbe80dc-c7ff-4f29-8692-a3e407fe9b10 | cpuX8             |   8192 |   20 |         0 |     8 | True      |
| a5b8f263-2bf3-485e-b30c-ff1d8fa61691 | cpuX16            |  16384 |   20 |         0 |    16 | True      |
| e66de889-8cb1-4e1a-b18f-28dcbaf9d098 | cpuX32            |  32768 |   20 |         0 |    32 | True      |
| 4211c963-f6ff-4e3c-beb5-45f2a1343ebc | genX1             |   4096 |   20 |         0 |     1 | True      |
| 7210586d-a601-4ff1-9b4b-e3984dba1fcb | genX2             |   8192 |   20 |         0 |     2 | True      |
| 99485c70-2187-46e5-bc01-2b9172a35800 | genX4             |  16384 |   20 |         0 |     4 | True      |
| acd8e74d-bc54-4660-b7ba-1196e9ba0f96 | genX8             |  32768 |   20 |         0 |     8 | True      |
| 05e69d2e-d7d3-4a90-ac8d-278ec0acbef9 | genX16            |  65536 |   20 |         0 |    16 | True      |
| 33dcc0e5-25ba-43d7-9e04-f87ed95471a3 | genX32            | 131072 |   20 |         0 |    32 | True      |
| a27a0cc1-b597-4dee-b373-4d44f0be7458 | memX1             |   7168 |   20 |         0 |     1 | True      |
| c3131ce5-b1b3-407e-97c1-055df44492a3 | memX2             |  14336 |   20 |         0 |     2 | True      |
| f9dee688-78bf-4d89-a377-4a1b45274383 | memX4             |  28672 |   20 |         0 |     4 | True      |
| c5cfe9a0-9b2b-4ed4-84f4-4310d3f0cb51 | memX8             |  57344 |   20 |         0 |     8 | True      |
| 2e59fcb2-f8af-4982-8ff2-3312f1b3d5d0 | memX16            | 114688 |   20 |         0 |    16 | True      |
| 5d447560-101e-41c8-aa23-0c3da13d369f | memX32            | 229376 |   20 |         0 |    32 | True      |
+--------------------------------------+-------------------+--------+------+-----------+-------+-----------+
```

### Gabarits obsolètes

```text
+--------------------------------------+-------------------+--------+------+-----------+-------+-----------+
| ID                                   | Name              |    RAM | Disk | Ephemeral | VCPUs | Is Public |
+--------------------------------------+-------------------+--------+------+-----------+-------+-----------+
| 0b28b3b0-1d84-430a-849f-4d380c7a02df | m0.xxlarge        |  32768 |   80 |         0 |     8 | True      |
| 15b0660a-c92e-45ef-a55f-8fe3e38ad88b | m1.xxlarge        |  32768 |   80 |         0 |    16 | True      |
| 2f7317be-88b7-4dfc-ba62-83d7536864a5 | m1.tiny           |    512 |    1 |         0 |     1 | True      |
| 329143cc-ec6f-4df1-a937-a47266387edd | m1.xxxlarge       |  65536 |   80 |         0 |    20 | True      |
| 4d3e0d50-a24a-4dc3-9f15-509f1ceeef67 | m4.large          |  65536 |   80 |         0 |     4 | True      |
| 58ccf266-4ede-4836-b5a6-e765d2f9f832 | m1.medium         |   4096 |   40 |         0 |     2 | True      |
| 5fedd9dd-7748-45fd-bca8-d5d91c48c50f | m1.xlarge.sdisk   |  16384 |   20 |         0 |     8 | True      |
| 9b6a2eeb-ddf0-4dfa-acc9-f7d717d7274e | m1.xhuge          | 262144 |   80 |         0 |    28 | True      |
| a41da623-1ecf-46ae-bec6-052e1cf1808c | m1.huge           | 131072 |   80 |         0 |    24 | True      |
| afd02c79-0d6f-4545-951f-bdbe792c6be0 | m0.huge.sdisk     |  49152 |   20 |         0 |    24 | True      |
| c15427d1-6e24-4549-8ed1-167e35c2b0fa | m1.large          |   8192 |   80 |         0 |     4 | True      |
| ee2a7255-936e-4088-99da-f494d8539787 | m1.small          |   2048 |   20 |         0 |     1 | True      |
| ef98c96f-1344-4ab4-845b-d7d04b7bc0e3 | m1.xlarge         |  16384 |   80 |         0 |     8 | True      |
+--------------------------------------+-------------------+--------+------+-----------+-------+-----------+
```
