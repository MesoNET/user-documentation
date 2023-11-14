---
title: AmgX
sidebar_position: 6
hide_table_of_contents: true
---

## Comment charger AmgX avec un environnement ? 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="gnu" label="GNU" default>

Compilé avec gcc 11.2.0, openmpi 4.1.4 et cmake 3.25.1

```
module load amgx/gnu/2.4.0
```

  </TabItem>
  <TabItem value="arm" label="ARM">

Compilé avec armclang 22.1, openmpi 4.1.4 et cmake 3.25.1

```
module load amgx/arm/2.4.0
```

  </TabItem>
  <TabItem value="nvidia" label="NVIDIA">

Compilé avec nvc 22.9-0, openmpi 4.1.4 et cmake 3.25.1

```
module load amgx/nvidia/2.4.0
```
  </TabItem>
</Tabs>

