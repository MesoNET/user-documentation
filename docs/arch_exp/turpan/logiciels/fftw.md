---
title: FFTW
sidebar_position: 7
hide_table_of_contents: true
---

## Comment charger FFTW avec un environnement ? 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="gnu" label="GNU" default>

Compilé avec gcc 11.2.0 et openmpi 4.1.4

```
module load fftw/gnu/3.3.10
```

  </TabItem>
  <TabItem value="arm" label="ARM">

Compilé avec armclang 22.1 et openmpi 4.1.4

```
module load fftw/arm/3.3.10
```

  </TabItem>
  <TabItem value="nvidia" label="NVIDIA">

Compilé avec nvc 22.9-0 et openmpi 4.1.4

```
module load fftw/nvidia/3.3.10
```
  </TabItem>
</Tabs>

