---
title: LWP
sidebar_position: 2
---


Bull Mpi LightWeight Profiler est un outil de profilage léger, simple à utiliser, et qui ne nécessite aucune modification de code : pas de recompilation ou d’édition de lien.

## Comment charger les modules lwp ?
Pour profiler un code c + mpi
```
module load lwp/atos-lwp/1.2.2-beta
module load lwp/atos-lwp-mpi/1.2.2-beta
```
Pour profiler un code fortran + mpi
```
module load lwp/atos-lwp/1.2.2-beta
module load lwp/atos-lwp-mpi/1.2.2-beta
module load lwp/atos-lwp-mpi-fortran/1.2.2-beta
```


## Comment utiliser lwp ?
```
#!/bin/bash
#SBATCH -J test
#SBATCH -N 1
#SBATCH -t 0:10:00
#SBATCH -p small

module purge
module load gnu/11.2.0
module load openmpi/gnu/4.1.4-cpu
module load lwp/atos-lwp/1.2.2-beta
module load lwp/atos-lwp-mpi/1.2.2-beta

ntasks=16
npernode=80

make clean
make

nodeset -e ${SLURM_JOB_NODELIST} | tr ' ' '\n' > hostfile_${SLURM_JOB_ID}

echo "Run:"
mpirun --hostfile ./hostfile_${SLURM_JOB_ID} --map-by ppr:${npernode}:node:PE=1 --bind-to core -np ${ntasks} ./poisson-mpi 512  1.0E-3 

echo "Profile:"
lwp mpirun --hostfile ./hostfile_${SLURM_JOB_ID} --map-by ppr:${npernode}:node:PE=1 --bind-to core -np ${ntasks} ./poisson-mpi 512  1.0E-3
```

## Les résultats de lwp
```
03 April 2023 10:55:46 AM

#################################################################################
#                                                                               #
#                          Atos Lightweight Profiler                            #
#                                                                               #
#################################################################################

General info:
job_start=Mon 2023-04-03 10:55:44
job_finish=Mon 2023-04-03 10:55:46
job_duration=2 s
command='mpirun --hostfile ./hostfile_5544 --map-by ppr:80:node:PE=1 --bind-to core -np 16 ./poisson-mpi 512 1.0E-3'
user='jamal'

#################################################################################

--------------------------------------------------------------------------------------------------------------------------------------------
                                                     Atos LightWeight Profiler: MPI
--------------------------------------------------------------------------------------------------------------------------------------------

1. Report Summary

1.1 Application
Name                     : poisson-mpi
Date                     : Mon Apr 03 105544 2023
Hostname                 : turpancomp0
Elapsed time             : 1.500752(s)
Number of processes      : 16

1.2 MPI
Environment elapsed time : 1.496779(s) (99.74%)
Events             : 653480
 * Generic         : 80 (0.01%)
 * Point to Point  : 363000 (55.55%)
 * Collective      : 193600 (29.63%)
 * Syncrhonization : 96800 (14.81%)

2. Communication Details

Program callsite:
=================
                                          elapsed time inside MPI function            
id    MPI event name      hits  rank  minimum       maximum       sum           
----- ------------------- ----- ----- ------------- ------------- ------------- 
1     MPI_GET_LIBRARY_VER 1     0     0.00000804    0.00000804    0.00000804     
117   MPI_GET_LIBRARY_VER 1     2     0.00000432    0.00000432    0.00000432     
11    MPI_GET_LIBRARY_VER 1     1     0.00000612    0.00000612    0.00000612     
105   MPI_GET_LIBRARY_VER 1     7     0.00000392    0.00000392    0.00000392     
165   MPI_GET_LIBRARY_VER 1     5     0.00000516    0.00000516    0.00000516     
153   MPI_GET_LIBRARY_VER 1     12    0.00000384    0.00000384    0.00000384     
177   MPI_GET_LIBRARY_VER 1     4     0.00000456    0.00000456    0.00000456     
57    MPI_GET_LIBRARY_VER 1     10    0.00000376    0.00000376    0.00000376     
23    MPI_GET_LIBRARY_VER 1     14    0.00000460    0.00000460    0.00000460     
69    MPI_GET_LIBRARY_VER 1     8     0.00000432    0.00000432    0.00000432     
129   MPI_GET_LIBRARY_VER 1     3     0.00000632    0.00000632    0.00000632     
81    MPI_GET_LIBRARY_VER 1     9     0.00000364    0.00000364    0.00000364     
35    MPI_GET_LIBRARY_VER 1     11    0.00000416    0.00000416    0.00000416     
47    MPI_GET_LIBRARY_VER 1     15    0.00000384    0.00000384    0.00000384     
141   MPI_GET_LIBRARY_VER 1     13    0.00000776    0.00000776    0.00000776     
93    MPI_GET_LIBRARY_VER 1     6     0.00000432    0.00000432    0.00000432     

Program callsite:
=================
\___libc_start_main()
                                          elapsed time inside MPI function            
id    MPI event name      hits  rank  minimum       maximum       sum           
----- ------------------- ----- ----- ------------- ------------- ------------- 
10    MPI_FINALIZE        1     0     0.18695739    0.18695739    0.18695739     
84    MPI_COMM_RANK       1     9     0.00000064    0.00000064    0.00000064     
70    MPI_INIT            1     8     0.18248526    0.18248526    0.18248526     
36    MPI_INIT            1     11    0.18181610    0.18181610    0.18181610     
59    MPI_COMM_SIZE       1     10    0.00000056    0.00000056    0.00000056     
92    MPI_FINALIZE        1     9     0.17711053    0.17711053    0.17711053     
118   MPI_INIT            1     2     0.18116109    0.18116109    0.18116109     
22    MPI_FINALIZE        1     1     0.12779632    0.12779632    0.12779632     
96    MPI_COMM_RANK       1     6     0.00000052    0.00000052    0.00000052     
167   MPI_COMM_SIZE       1     5     0.00000052    0.00000052    0.00000052     
120   MPI_COMM_RANK       1     2     0.00000064    0.00000064    0.00000064     
68    MPI_FINALIZE        1     10    0.16703483    0.16703483    0.16703483     
26    MPI_COMM_RANK       1     14    0.00000068    0.00000068    0.00000068     
37    MPI_COMM_SIZE       1     11    0.00000044    0.00000044    0.00000044     
152   MPI_FINALIZE        1     13    0.17708969    0.17708969    0.17708969     
166   MPI_INIT            1     5     0.18258190    0.18258190    0.18258190     
71    MPI_COMM_SIZE       1     8     0.00000048    0.00000048    0.00000048     
24    MPI_INIT            1     14    0.18040581    0.18040581    0.18040581     
82    MPI_INIT            1     9     0.18181894    0.18181894    0.18181894     
108   MPI_COMM_RANK       1     7     0.00000040    0.00000040    0.00000040     
12    MPI_INIT            1     1     0.18074405    0.18074405    0.18074405     
164   MPI_FINALIZE        1     12    0.16713739    0.16713739    0.16713739     
3     MPI_COMM_SIZE       1     0     0.00000056    0.00000056    0.00000056     
116   MPI_FINALIZE        1     7     0.18697655    0.18697655    0.18697655     
83    MPI_COMM_SIZE       1     9     0.00000072    0.00000072    0.00000072     
128   MPI_FINALIZE        1     2     0.16697807    0.16697807    0.16697807     
46    MPI_FINALIZE        1     11    0.16699291    0.16699291    0.16699291     
154   MPI_INIT            1     12    0.77303563    0.77303563    0.77303563     
155   MPI_COMM_SIZE       1     12    0.00000068    0.00000068    0.00000068     
143   MPI_COMM_SIZE       1     13    0.00000116    0.00000116    0.00000116     
4     MPI_COMM_RANK       1     0     0.00000048    0.00000048    0.00000048     
107   MPI_COMM_SIZE       1     7     0.00000064    0.00000064    0.00000064     
142   MPI_INIT            1     13    0.17693225    0.17693225    0.17693225     
132   MPI_COMM_RANK       1     3     0.00000060    0.00000060    0.00000060     
25    MPI_COMM_SIZE       1     14    0.00000072    0.00000072    0.00000072     
106   MPI_INIT            1     7     0.18011845    0.18011845    0.18011845     
130   MPI_INIT            1     3     0.18396074    0.18396074    0.18396074     
176   MPI_FINALIZE        1     5     0.17717685    0.17717685    0.17717685     
95    MPI_COMM_SIZE       1     6     0.00000052    0.00000052    0.00000052     
180   MPI_COMM_RANK       1     4     0.00000064    0.00000064    0.00000064     
58    MPI_INIT            1     10    0.18133165    0.18133165    0.18133165     
56    MPI_FINALIZE        1     15    0.15697089    0.15697089    0.15697089     
156   MPI_COMM_RANK       1     12    0.00000044    0.00000044    0.00000044     
168   MPI_COMM_RANK       1     5     0.00000044    0.00000044    0.00000044     
104   MPI_FINALIZE        1     6     0.16710815    0.16710815    0.16710815     
131   MPI_COMM_SIZE       1     3     0.00000064    0.00000064    0.00000064     
119   MPI_COMM_SIZE       1     2     0.00000068    0.00000068    0.00000068     
72    MPI_COMM_RANK       1     8     0.00000032    0.00000032    0.00000032     
179   MPI_COMM_SIZE       1     4     0.00000068    0.00000068    0.00000068     
140   MPI_FINALIZE        1     3     0.16697807    0.16697807    0.16697807     
94    MPI_INIT            1     6     0.18353390    0.18353390    0.18353390     
49    MPI_COMM_SIZE       1     15    0.00000068    0.00000068    0.00000068     
144   MPI_COMM_RANK       1     13    0.00000096    0.00000096    0.00000096     
34    MPI_FINALIZE        1     14    0.17710037    0.17710037    0.17710037     
80    MPI_FINALIZE        1     8     0.15694889    0.15694889    0.15694889     
60    MPI_COMM_RANK       1     10    0.00000052    0.00000052    0.00000052     
14    MPI_COMM_RANK       1     1     0.00000040    0.00000040    0.00000040     
13    MPI_COMM_SIZE       1     1     0.00000056    0.00000056    0.00000056     
48    MPI_INIT            1     15    0.18648774    0.18648774    0.18648774     
38    MPI_COMM_RANK       1     11    0.00000036    0.00000036    0.00000036     
2     MPI_INIT            1     0     0.18391242    0.18391242    0.18391242     
50    MPI_COMM_RANK       1     15    0.00000060    0.00000060    0.00000060     
178   MPI_INIT            1     4     0.18126561    0.18126561    0.18126561     
188   MPI_FINALIZE        1     4     0.16712687    0.16712687    0.16712687     

                                                                                                       elapsed time inside MPI function
id    MPI event name      hits      rank  count     type           dest  tag   communicator        minimum       maximum       sum           
----- ------------------- --------- ----- --------- -------------- ----- ----- ------------------- ------------- ------------- ------------- 
172   MPI_ISEND           6050      5     512       MPI_DOUBLE     6     0     MPI_COMM_WORLD      0.00000064    0.00000504    0.00499853    
75    MPI_IRECV           6050      8     512       MPI_DOUBLE     9     1     MPI_COMM_WORLD      0.00000004    0.00000316    0.00044148    
145   MPI_IRECV           6050      13    512       MPI_DOUBLE     12    0     MPI_COMM_WORLD      0.00000004    0.00002208    0.00047516    
122   MPI_ISEND           6050      2     512       MPI_DOUBLE     1     1     MPI_COMM_WORLD      0.00000072    0.00002564    0.00581457    
133   MPI_IRECV           6050      3     512       MPI_DOUBLE     2     0     MPI_COMM_WORLD      0.00000004    0.00002176    0.00053356    
16    MPI_ISEND           6050      1     512       MPI_DOUBLE     0     1     MPI_COMM_WORLD      0.00000060    0.00002344    0.00492329    
30    MPI_ISEND           6050      14    512       MPI_DOUBLE     15    0     MPI_COMM_WORLD      0.00000052    0.00001180    0.00442485    
170   MPI_ISEND           6050      5     512       MPI_DOUBLE     4     1     MPI_COMM_WORLD      0.00000056    0.00001552    0.00469345    
88    MPI_ISEND           6050      9     512       MPI_DOUBLE     10    0     MPI_COMM_WORLD      0.00000068    0.00000304    0.00508057    
157   MPI_IRECV           6050      12    512       MPI_DOUBLE     11    0     MPI_COMM_WORLD      0.00000004    0.00000884    0.00044196    
146   MPI_ISEND           6050      13    512       MPI_DOUBLE     12    1     MPI_COMM_WORLD      0.00000060    0.00003036    0.00490261    
15    MPI_IRECV           6050      1     512       MPI_DOUBLE     0     0     MPI_COMM_WORLD      0.00000004    0.00002036    0.00050464    
111   MPI_IRECV           6050      7     512       MPI_DOUBLE     8     1     MPI_COMM_WORLD      0.00000004    0.00000028    0.00043684    
41    MPI_IRECV           6050      11    512       MPI_DOUBLE     12    1     MPI_COMM_WORLD      0.00000004    0.00000068    0.00044292    
64    MPI_ISEND           6050      10    512       MPI_DOUBLE     11    0     MPI_COMM_WORLD      0.00000052    0.00000524    0.00464105    
29    MPI_IRECV           6050      14    512       MPI_DOUBLE     15    1     MPI_COMM_WORLD      0.00000004    0.00000020    0.00044256    
28    MPI_ISEND           6050      14    512       MPI_DOUBLE     13    1     MPI_COMM_WORLD      0.00000068    0.00001612    0.00496436    
5     MPI_IRECV           6050      0     512       MPI_DOUBLE     1     1     MPI_COMM_WORLD      0.00000004    0.00002196    0.00051936    
98    MPI_ISEND           6050      6     512       MPI_DOUBLE     5     1     MPI_COMM_WORLD      0.00000068    0.00001540    0.00500349    
169   MPI_IRECV           6050      5     512       MPI_DOUBLE     4     0     MPI_COMM_WORLD      0.00000004    0.00002052    0.00052572    
147   MPI_IRECV           6050      13    512       MPI_DOUBLE     14    1     MPI_COMM_WORLD      0.00000004    0.00000024    0.00044872    
110   MPI_ISEND           6050      7     512       MPI_DOUBLE     6     1     MPI_COMM_WORLD      0.00000056    0.00002712    0.00462457    
87    MPI_IRECV           6050      9     512       MPI_DOUBLE     10    1     MPI_COMM_WORLD      0.00000004    0.00000020    0.00044260    
159   MPI_IRECV           6050      12    512       MPI_DOUBLE     13    1     MPI_COMM_WORLD      0.00000004    0.00000268    0.00044312    
63    MPI_IRECV           6050      10    512       MPI_DOUBLE     11    1     MPI_COMM_WORLD      0.00000004    0.00000028    0.00045156    
85    MPI_IRECV           6050      9     512       MPI_DOUBLE     8     0     MPI_COMM_WORLD      0.00000004    0.00000804    0.00051728    
183   MPI_IRECV           6050      4     512       MPI_DOUBLE     5     1     MPI_COMM_WORLD      0.00000004    0.00000272    0.00044688    
124   MPI_ISEND           6050      2     512       MPI_DOUBLE     3     0     MPI_COMM_WORLD      0.00000056    0.00000924    0.00455609    
135   MPI_IRECV           6050      3     512       MPI_DOUBLE     4     1     MPI_COMM_WORLD      0.00000004    0.00000020    0.00043824    
62    MPI_ISEND           6050      10    512       MPI_DOUBLE     9     1     MPI_COMM_WORLD      0.00000068    0.00002048    0.00505009    
134   MPI_ISEND           6050      3     512       MPI_DOUBLE     2     1     MPI_COMM_WORLD      0.00000060    0.00001524    0.00486953    
182   MPI_ISEND           6050      4     512       MPI_DOUBLE     3     1     MPI_COMM_WORLD      0.00000068    0.00001664    0.00504885    
51    MPI_IRECV           6050      15    512       MPI_DOUBLE     14    0     MPI_COMM_WORLD      0.00000004    0.00002236    0.00046196    
27    MPI_IRECV           6050      14    512       MPI_DOUBLE     13    0     MPI_COMM_WORLD      0.00000004    0.00002144    0.00046104    
136   MPI_ISEND           6050      3     512       MPI_DOUBLE     4     0     MPI_COMM_WORLD      0.00000068    0.00000516    0.00524737    
6     MPI_ISEND           6050      0     512       MPI_DOUBLE     1     0     MPI_COMM_WORLD      0.00000060    0.00001604    0.00496649    
123   MPI_IRECV           6050      2     512       MPI_DOUBLE     3     1     MPI_COMM_WORLD      0.00000004    0.00000036    0.00047960    
18    MPI_ISEND           6050      1     512       MPI_DOUBLE     2     0     MPI_COMM_WORLD      0.00000064    0.00000872    0.00483214    
42    MPI_ISEND           6050      11    512       MPI_DOUBLE     12    0     MPI_COMM_WORLD      0.00000064    0.00000584    0.00499013    
100   MPI_ISEND           6050      6     512       MPI_DOUBLE     7     0     MPI_COMM_WORLD      0.00000052    0.00000572    0.00462869    
76    MPI_ISEND           6050      8     512       MPI_DOUBLE     9     0     MPI_COMM_WORLD      0.00000056    0.00000604    0.00473637    
184   MPI_ISEND           6050      4     512       MPI_DOUBLE     5     0     MPI_COMM_WORLD      0.00000056    0.00001472    0.00468853    
158   MPI_ISEND           6050      12    512       MPI_DOUBLE     11    1     MPI_COMM_WORLD      0.00000068    0.00001384    0.00513281    
73    MPI_IRECV           6050      8     512       MPI_DOUBLE     7     0     MPI_COMM_WORLD      0.00000004    0.00002144    0.00046504    
121   MPI_IRECV           6050      2     512       MPI_DOUBLE     1     0     MPI_COMM_WORLD      0.00000004    0.00002132    0.00054760    
86    MPI_ISEND           6050      9     512       MPI_DOUBLE     8     1     MPI_COMM_WORLD      0.00000052    0.00000848    0.00458557    
160   MPI_ISEND           6050      12    512       MPI_DOUBLE     13    0     MPI_COMM_WORLD      0.00000052    0.00000576    0.00463562    
148   MPI_ISEND           6050      13    512       MPI_DOUBLE     14    0     MPI_COMM_WORLD      0.00000068    0.00000844    0.00501842    
40    MPI_ISEND           6050      11    512       MPI_DOUBLE     10    1     MPI_COMM_WORLD      0.00000056    0.00001624    0.00478837    
61    MPI_IRECV           6050      10    512       MPI_DOUBLE     9     0     MPI_COMM_WORLD      0.00000004    0.00002320    0.00047192    
109   MPI_IRECV           6050      7     512       MPI_DOUBLE     6     0     MPI_COMM_WORLD      0.00000004    0.00002296    0.00047416    
97    MPI_IRECV           6050      6     512       MPI_DOUBLE     5     0     MPI_COMM_WORLD      0.00000004    0.00002148    0.00053984    
74    MPI_ISEND           6050      8     512       MPI_DOUBLE     7     1     MPI_COMM_WORLD      0.00000068    0.00002400    0.00495449    
171   MPI_IRECV           6050      5     512       MPI_DOUBLE     6     1     MPI_COMM_WORLD      0.00000004    0.00000028    0.00043820    
52    MPI_ISEND           6050      15    512       MPI_DOUBLE     14    1     MPI_COMM_WORLD      0.00000052    0.00001612    0.00438689    
17    MPI_IRECV           6050      1     512       MPI_DOUBLE     2     1     MPI_COMM_WORLD      0.00000004    0.00000024    0.00044132    
39    MPI_IRECV           6050      11    512       MPI_DOUBLE     10    0     MPI_COMM_WORLD      0.00000004    0.00000612    0.00044728    
99    MPI_IRECV           6050      6     512       MPI_DOUBLE     7     1     MPI_COMM_WORLD      0.00000004    0.00000024    0.00043928    
181   MPI_IRECV           6050      4     512       MPI_DOUBLE     3     0     MPI_COMM_WORLD      0.00000004    0.00002060    0.00046960    
112   MPI_ISEND           6050      7     512       MPI_DOUBLE     8     0     MPI_COMM_WORLD      0.00000068    0.00000648    0.00492029    

                                                                        elapsed time inside MPI function
id    MPI event name      hits      rank  communicator        tag   minimum       maximum       sum           
----  ------------------- --------- ----- ------------------- ----- ------------- ------------- ------------- 
163   MPI_ALLREDUCE       6050      12    MPI_COMM_WORLD      1     0.00000136    0.00008344    0.01135978     
102   MPI_ALLREDUCE       6050      6     MPI_COMM_WORLD      2     0.00000144    0.59025661    0.60611830     
66    MPI_ALLREDUCE       6050      10    MPI_COMM_WORLD      2     0.00000172    0.59267077    0.61580065     
114   MPI_ALLREDUCE       6050      7     MPI_COMM_WORLD      2     0.00000136    0.59039109    0.60384974     
55    MPI_ALLREDUCE       6050      15    MPI_COMM_WORLD      1     0.00000120    0.00013168    0.01122878     
115   MPI_ALLREDUCE       6050      7     MPI_COMM_WORLD      1     0.00000124    0.00008292    0.01126214     
21    MPI_ALLREDUCE       6050      1     MPI_COMM_WORLD      1     0.00000132    0.00008280    0.01175578     
44    MPI_ALLREDUCE       6050      11    MPI_COMM_WORLD      2     0.00000152    0.00003900    0.02580000     
33    MPI_ALLREDUCE       6050      14    MPI_COMM_WORLD      1     0.00000128    0.00008344    0.01132862     
174   MPI_ALLREDUCE       6050      5     MPI_COMM_WORLD      2     0.00000136    0.59016241    0.60520623     
32    MPI_ALLREDUCE       6050      14    MPI_COMM_WORLD      2     0.00000160    0.58900085    0.61118096     
150   MPI_ALLREDUCE       6050      13    MPI_COMM_WORLD      2     0.00000144    0.00002940    0.01841623     
127   MPI_ALLREDUCE       6050      2     MPI_COMM_WORLD      1     0.00000132    0.00008324    0.01156906     
91    MPI_ALLREDUCE       6050      9     MPI_COMM_WORLD      1     0.00000132    0.00008292    0.01131694     
151   MPI_ALLREDUCE       6050      13    MPI_COMM_WORLD      1     0.00000128    0.00008296    0.01133314     
186   MPI_ALLREDUCE       6050      4     MPI_COMM_WORLD      2     0.00000144    0.58923417    0.60336462     
138   MPI_ALLREDUCE       6050      3     MPI_COMM_WORLD      2     0.00000160    0.58906941    0.61387053     
126   MPI_ALLREDUCE       6050      2     MPI_COMM_WORLD      2     0.00000152    0.58929789    0.61188280     
90    MPI_ALLREDUCE       6050      9     MPI_COMM_WORLD      2     0.00000148    0.59135433    0.60734015     
103   MPI_ALLREDUCE       6050      6     MPI_COMM_WORLD      1     0.00000128    0.00008336    0.01132998     
9     MPI_ALLREDUCE       6050      0     MPI_COMM_WORLD      1     0.00000136    0.00013140    0.01219202     
187   MPI_ALLREDUCE       6050      4     MPI_COMM_WORLD      1     0.00000128    0.00008340    0.01180030     
139   MPI_ALLREDUCE       6050      3     MPI_COMM_WORLD      1     0.00000132    0.00008276    0.01130466     
8     MPI_ALLREDUCE       6050      0     MPI_COMM_WORLD      2     0.00000216    0.59038273    0.66634175     
175   MPI_ALLREDUCE       6050      5     MPI_COMM_WORLD      1     0.00000136    0.00008280    0.01185238     
67    MPI_ALLREDUCE       6050      10    MPI_COMM_WORLD      1     0.00000124    0.00008320    0.01105374     
20    MPI_ALLREDUCE       6050      1     MPI_COMM_WORLD      2     0.00000132    0.59049065    0.60292974     
162   MPI_ALLREDUCE       6050      12    MPI_COMM_WORLD      2     0.00000144    0.00003496    0.02527884     
78    MPI_ALLREDUCE       6050      8     MPI_COMM_WORLD      2     0.00000156    0.59232373    0.61816013     
79    MPI_ALLREDUCE       6050      8     MPI_COMM_WORLD      1     0.00000136    0.00008360    0.01155814     
54    MPI_ALLREDUCE       6050      15    MPI_COMM_WORLD      2     0.00000632    0.58892565    0.66994464     
45    MPI_ALLREDUCE       6050      11    MPI_COMM_WORLD      1     0.00000132    0.00008300    0.01158762     

                                                    elapsed time inside MPI function      overlapping communication/computation time
id    MPI event name      hits      rank  match minimum       maximum       sum           minimum       maximum       sum            
----- ------------------- --------- ----- ----- ------------- ------------- ------------- ------------- ------------- -------------  
101   MPI_WAITALL         6050      6     97    0.00000088    0.00057124    0.00727762    0.00063508    0.00063508    0.00063508    
149   MPI_WAITALL         6050      13    145   0.00000084    0.59618054    0.60262932    0.59632054    0.59632054    0.59632054    
137   MPI_WAITALL         6050      3     133   0.00000088    0.00051404    0.00728022    0.00057728    0.00057728    0.00057728    
161   MPI_WAITALL         6050      12    157   0.00000088    0.00000896    0.00706490    0.00007256    0.00007256    0.00007256    
43    MPI_WAITALL         6050      11    39    0.00000088    0.59363918    0.60047596    0.59370446    0.59370446    0.59370446    
31    MPI_WAITALL         6050      14    27    0.00000088    0.00621177    0.01288711    0.00628333    0.00628333    0.00628333    
173   MPI_WAITALL         6050      5     169   0.00000084    0.00005012    0.00700798    0.00011356    0.00011356    0.00011356    
113   MPI_WAITALL         6050      7     109   0.00000092    0.00354377    0.01034778    0.00362517    0.00362517    0.00362517    
185   MPI_WAITALL         6050      4     181   0.00000088    0.00205828    0.00898310    0.00213496    0.00213496    0.00213496    
7     MPI_WAITALL         6050      0     5     0.00000028    0.00131764    0.00434945    0.00136676    0.00136676    0.00136676    
89    MPI_WAITALL         6050      9     85    0.00000088    0.00140924    0.00840370    0.00146732    0.00146732    0.00146732    
125   MPI_WAITALL         6050      2     121   0.00000088    0.00333353    0.01008830    0.00341349    0.00341349    0.00341349    
19    MPI_WAITALL         6050      1     15    0.00000080    0.00387473    0.01082298    0.00395125    0.00395125    0.00395125    
65    MPI_WAITALL         6050      10    61    0.00000088    0.00102480    0.00784226    0.00109488    0.00109488    0.00109488    
77    MPI_WAITALL         6050      8     73    0.00000080    0.00004168    0.00682550    0.00011348    0.00011348    0.00011348    
53    MPI_WAITALL         6050      15    51    0.00000040    0.00004272    0.00307585    0.00009460    0.00009460    0.00009460    

--------------------------------------------------------------------------------------------------------------------------------------------
                                                                                                                             (version 1.2.2)
--------------------------------------------------------------------------------------------------------------------------------------------
```
