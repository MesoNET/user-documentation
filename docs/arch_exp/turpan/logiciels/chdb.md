---
title: Chdb
sidebar_position: 1
---

Chdb est conçu pour exécuter en parallèle le même programme sur un grand nombre d’entrées indépendantes. Il s’adresse aux calculs dits « embarrassingly parallel », qui ne nécessitent aucune communication entre processus et ne font donc pas appel à MPI.
## Les prérequis
Il s’applique aux calculs ayant les caractéristiques suivantes :
- Un exécutable séquentiel ou multithreadé est appliqué de manière répétitive sur un ensemble de fichiers d’entrée
- Les noms des fichiers d’entrée se terminent tous par la même extension
- Il n’y a pas de dépendance entre les différents traitements
- Il n’y a donc pas de communication entre eux
- Il est possible de lancer plusieurs instances de l’exécutable simultanément.

## Les précautions à pendre

:::danger Important
chdb est un outil très puissant : s’il y a une erreur dans votre exécutable produisant des effets néfastes pour le système, en particulier des entrées-sorties intensives, ceux-ci seront démultipliés. La règle d’or est donc la suivante :

AVANT DE LANCER UN EXÉCUTABLE AVEC chdb, VÉRIFIEZ QUE CELUI-CI FONCTIONNE CORRECTEMENT EN LE LANÇANT en "STANDALONE". Si le comportement de votre exécutable est correct, alors seulement vous pouvez envisager de l’utiliser avec chdb.
:::

## Initialiser l’environnement
L’environnement doit être initialisé :
>```shell
> module load chdb/1.1 
>```

## La commande chdb

chdb permet d’exécuter un programme présentant les caractéristiques ci-dessus sur un nombre arbitraire de processeurs et de nœuds.

Lire la documentation `chdb --help`

#### On **doit passer** les paramètres suivants :

- `--in-dir` Le nom du répertoire dans lequel se trouvent les fichiers d’entrée. Ce répertoire doit exister
- `--in-type` L’extension des fichiers que l’on considère comme fichiers d’entrée. Par exemple txt, pdb, etc.
- `--out-files` Le nom du ou des fichiers créés par la commande, pour chaque exécution de la commande le nom est bien sûr différent, on utilise des "templates" qui seront remplacés avec le nom du fichier d’entrée. S’il y a plusieurs fichiers créés, leurs noms doivent être séparés par des virgules (,)
- `--command-line` La ligne de commande utilisée. Il est possible de mettre un morceau de shell complet (une série de commandes séparée par des | par exemple). La seule restriction est que cette commande doit lire un fichier en entrée, écrire un ou plusieurs fichiers en sortie. La commande doit être mise entre guillemets, sinon elle sera interprétée par le shell
- `--out-dir` Le nom du répertoire contenant les fichiers de sortie. Ce répertoire ne doit pas exister au démarrage de chdb

#### On peut passer en outre les paramètres suivants :

- `--work-dir` Avant d’exécuter la commande, chdb fera un chdir dans ce répertoire. Ce répertoire est souvent le même que --outdir, et les mêmes "templates" peuvent être utilisés.
- `--create-environment` Vous pouvez entrer ici un "petit morceau" de code shell, qui sera exécuté après le chdir précédent et avant l’appel de la commande : cela vous permet par exemple de copier des fichiers d’entrée qui seraient obligatoirement présents dans le répertoire courant.
- `--sort-by-size` Les fichiers présentés en entrée sont triés du plus gros au plus petit, si l’on fait l’hypothèse que le temps de traitement est proportionnel à la charge cela devrait permettre un meilleur équilibrage de la charge
- `--block-size=10` Si on met 10 par exemple, cela signifie que les process mpi traitent les fichiers par blocs de 10. Cela permet de minimiser les communications lorsque le nombre de fichiers est important. S’il y a peu de fichiers, cette option risque par contre de générer un déséquilibrage de la charge.
- `--in-files` Permet de ne traiter qu’une partie des fichiers du répertoire d’entrée

#### En cas d’erreur dans la commande exécutée :

Si la commande exécutée renvoie un code d’erreur (c’est-à -dire un statut différent de zéro), le comportement par défaut de chdb est d’arrêter tout traitement.

On peut toutefois modifier ce comportement en spécifiant le paramètre `--on-error` : le nom des fichiers ayant provoqué une erreur est conservé, cela permet de relancer chdb (avec des paramètres différents).

Pour cela, le paramètre `--in-files` sera utile car il permettra de ne relancer le programme que sur les fichiers d’entrée qui ont provoqué l’erreur.

### Chdb dans un script slurm
Dans cet exemple simple, un script Bash génère les fichiers d’entrée et le programme qui exécute le traitement correspondant à chaque entrée.

>```shell
> #create directories
> mkdir -p ./chdb_test/input
> mkdir -p ./chdb_test/dev_output   
> cd ./chdb_test
> #create 20 small input files
>for i in $(seq -f "%02g" 1 20); do
>  printf "This is file %s\n" "$i" > input/file_${i}.txt
>done
> # create a simple processing program (mon_programme)
> # This program reads stdin (or a filename arg) and writes an output file.
> cat > mon_programme.sh <<'EOF'
> #!/bin/bash
> # mon_programme.sh infile > outfile
> infile="$1"
> # simulate some work: sleep 0-2 seconds, print file contents with header
> sleep $((RANDOM % 3))
> echo "=== processed: $(basename "$infile") ==="
> cat "$infile"
> EOF
> chmod +x mon_programme.sh
> #test one run "standalone" (MANDATORY before using chdb)
> ./mon_programme.sh input/file_01.txt > dev_output/file_01.out
> cat dev_output/file_01.out
>```

Ce script Slurm permet de lancer le code sur tous les fichiers d’entrée.
```
#!/bin/bash
#SBATCH -J chdb_example
#SBATCH -N 1
#SBATCH -n 3
#SBATCH --ntasks-per-node=3
#SBATCH --ntasks-per-core=1
#SBATCH --time=00:30:00
#SBATCH --output=chdb.out

module purge
module load chdb/1.1


# IMPORTANT: ensure out directory does NOT exist
rm -rf out_slurm
mpirun chdb \
  --in-dir ./chdb_test/input \
  --in-type txt \
  --out-dir ./chdb_test/out_slurm \
  --out-files %out-dir%/%path% \
  --sort-by-size \
  --command "./mon_program.sh %in-dir%/%path% > %out-dir%/%path%"
```

Les variables `%in-dir%/%path%` et `%out-dir%/%path%` correspondent aux chemins d’entrée et de sortie définis précédemment dans la commande par (`--out-dir`, `--in-dir`) ; elles seront détectées automatiquement.