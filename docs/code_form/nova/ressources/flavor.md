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

### Gabarits

```text
+--------------------------------------+---------------------+--------+------+-----------+-------+-----------+
| ID                                   | Name                |    RAM | Disk | Ephemeral | VCPUs | Is Public |
+--------------------------------------+---------------------+--------+------+-----------+-------+-----------+
| 036e78d2-c65f-4d85-9665-72da85395019 | mesonet-genX1       |   2049 |   50 |         0 |     1 | False     |
| 0af83925-c954-4272-be27-6662f356d8f7 | mesonet-cpuX4       |   4096 |   50 |         0 |     4 | False     |
| 0dfe269e-cf13-4d80-b1cb-d457f5c76038 | mesonet-memX1       |   4096 |   50 |         0 |     1 | False     |
| 1045673d-a4e7-47e9-811b-ef38d42c8387 | mesonet-bigmemX4    |  32768 |   50 |         0 |     4 | False     |
| 16afc408-ff8c-405b-a82e-6eda34bd04bc | mesonet-genX16      |  32784 |   50 |         0 |    16 | False     |
| 1c887ad8-8291-42c3-8aec-a449e08bceb6 | mesonet-cpuX16      |  16384 |   50 |         0 |    16 | False     |
| 1f79cd43-343c-444f-be38-34f1a702a789 | mesonet-bigmemX2    |  16384 |   50 |         0 |     2 | False     |
| 38d7402d-0032-47cb-9135-2623b690f029 | mesonet-giantmemX32 | 524288 |   50 |         0 |    32 | False     |
| 3f826c39-09e4-4050-9a8e-9a38f7a8b050 | mesonet-memX4       |  16384 |   50 |         0 |     4 | False     |
| 40c1c093-7e57-405a-a771-f90d9b02ecfb | mesonet-memX8       |  32768 |   50 |         0 |     8 | False     |
| 570fb6cb-6282-4748-9624-9c75eb46c3bc | mesonet-memX2       |   8192 |   50 |         0 |     2 | False     |
| 61143811-0aa1-4d56-a8e0-c12e06e3c6cb | mesonet-genX8       |  16392 |   50 |         0 |     8 | False     |
| 62627f76-8e1e-4fbf-94e7-57497be7e80d | mesonet-giantmemX1  |  16384 |   50 |         0 |     1 | False     |
| 63f424eb-3f73-4f17-94b3-aedee7aebe97 | mesonet-cpuX32      |  32768 |   50 |         0 |    32 | False     |
| 767700ab-ba92-4e42-b029-06699e73d8b9 | mesonet-genX32      |  65568 |   50 |         0 |    32 | False     |
| 7779bfe1-c1a6-41e1-9ee2-d0c135e3647b | mesonet-genX4       |   8196 |   50 |         0 |     4 | False     |
| 78c8404d-ada8-4856-a15d-c7b232db1e80 | mesonet-bigmemX16   | 131072 |   50 |         0 |    16 | False     |
| 7d20a5b1-f1ec-45a0-85fb-e009c8d5c093 | mesonet-cpuX2       |   2048 |   50 |         0 |     2 | False     |
| 859b585b-af6c-4016-abb9-be00b5708a86 | mesonet-bigmemX1    |   8192 |   50 |         0 |     1 | False     |
| 8d4fdcf6-b289-423c-b113-16ac5f9c643e | mesonet-giantmemX2  |  32768 |   50 |         0 |     2 | False     |
| 8d6aebf6-0123-49ac-bdc2-101155179d51 | mesonet-genX2       |   4098 |   50 |         0 |     2 | False     |
| 93a81bcc-9309-4608-9d32-7d32f43ad6c3 | mesonet-bigmemX8    |  65536 |   50 |         0 |     8 | False     |
| a0ee8ddf-f6cc-488b-a9e7-9d88d450d032 | mesonet-cpuX1       |   1024 |   50 |         0 |     1 | False     |
| a3503235-6a62-435a-a092-f66a5ba5887d | mesonet-cpuX8       |   8192 |   50 |         0 |     8 | False     |
| aeab8f48-af0a-4061-b21d-2d3c893c94bb | mesonet-giantmemX16 | 262144 |   50 |         0 |    16 | False     |
| b3d182bf-40c6-4610-ae06-ec9ae5fe29e4 | mesonet-memX32      | 131072 |   50 |         0 |    32 | False     |
| bf38a204-6bb7-4f4e-be06-04fb61bed9bf | mesonet-bigmemX32   | 262144 |   50 |         0 |    32 | False     |
| d9522a75-c2a0-4929-96d7-14814ed26903 | mesonet-memX16      |  65536 |   50 |         0 |    16 | False     |
| e2407e16-4378-4546-bd51-c95500e6fd2f | mesonet-giantmemX8  | 131072 |   50 |         0 |     8 | False     |
| f617a3c2-5cfc-48a2-acf4-72e5075b0486 | mesonet-giantmemX4  |  65536 |   50 |         0 |     4 | False     |
+--------------------------------------+---------------------+--------+------+-----------+-------+-----------+
```

