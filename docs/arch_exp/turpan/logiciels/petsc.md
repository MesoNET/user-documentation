---
title: PETSc
sidebar_position: 5
hide_table_of_contents: true
---


## Comment charger PETSc avec un environnement ? 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="gnu" label="GNU" default>

Compilé avec gcc 11.2.0, openmpi 4.1.4 et scalapack 2.2.0

```
module load petsc/gnu/3.18.2
```

  </TabItem>
  <TabItem value="arm" label="ARM">

Compilé avec armclang 22.1, openmpi 4.1.4 et scalapack 2.2.0

```
module load petsc/arm/3.18.2
```

  </TabItem>
  <TabItem value="nvidia" label="NVIDIA">

Compilé avec nvc 22.9-0, openmpi 4.1.4 et scalapack 2.2.0

```
module load petsc/nvidia/3.18.2
```
  </TabItem>
</Tabs>

