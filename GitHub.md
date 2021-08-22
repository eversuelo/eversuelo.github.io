#  GIT & GIT HUB & GIT LAB | Curso 

Un acercamiento a Git:
*Autor:* José Everardo Torres Orozco

***

## ¿Que es Git?
- Git es un software de control de versiones creado por linus tolvards bajo las licencias GNU sirve para ayudar a los programadores como herramienta para registrar los cambios.

- Además nos ayuda a sincronizar código entre programadores y sus colaboradores.
  - Contribuciones en Equipo.
  - Control de Versiones.
- Contiene una Linea de Comandos.
- Git mantiene el proyecto completo en un Repositorio.
- Facilita el desarrollo y mantenimiento de aplicaciones.
- Guarda registro de todos los cambios que sufren los archivos y los va renombrando.
- Damos Formato al Fondo (revertimos cambios atreves del tiempo).
- Es capas de hacer todo lo anterior con múltiples archivos.
- Nos permite hacer múltiples instantáneas en múltiples archivos.
- Contiene Ramas.
### ¿Que es un repositorio?
**Git Respositoirio** Contiene el proyecto original en codigo fuente.
### ¿Que es Git Hub?
**GitHub** es una plataforma de internet para desarrollar software y controlar versiones usando **Git**.

Muchas Veces trabajando en el proyecto necesitas restaurarlo a una parte crononologica especifica del tiempo, git sirve para esto para restaurarlo de una manera especifica, y nombrarlo como sigue: Utiliza una Instantanea (SnapSHot) y le da un codigo (un CheckSum MD5) Y  una breve descripcion de lo que es el archivo, le da un formato y lo guarda en el registro interno de GIT.

Ramas: Trabajar sobre el Mismo Archivo en equipo o en flujos de trabajo, sobre un mismo archivo como programadores dentro del proyecto. Pueden trabajar multiples programadores con multiples instantaneas y con su propia copia del producto. 

##### Nota debemos de tener un directorio de trabajo

### Instalar Git

### Git Clone



Primeros Comandos de Consola:

```bash
git init	# Inicializa una nueva base de datos en Git
git clone	# Copia una base de datos existente
git status	# Checa el estatus del proyecto local
git diff	# Revisa los cambios hechos en el proyecto
git add		# Le dice a git que rastre todo los cambios de un archivo
git commit	# Guarda el estado actual del proyecto a la Base de Datos
git push	# Copia el proyecto local de la base de datos para el servidor remoto.
git pull	# Copia de la base de datos remota a la maquina local.
git log		# Checa la historia del proyecto
git branch	# Enlista, Crea o elimina branches (ramas).
git merge	# Mezcla la historia de dos ramas juntas. branches
git stash	# Manten los cambios actuales escondidos para usar despues
```
Se crean dos areas, area de ensayo (Stagin Area) y repositorio local que es donde se almacenan los snapshots