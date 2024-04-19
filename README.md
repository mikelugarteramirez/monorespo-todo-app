# Prueba Todo List

Esta solo es una prueba técnica, en la cual se pretende demostrar las habilidades de la persona que trabajo por detrás este proyecto. Gracias y espero sea de su agrado


## Proceso de instalación del proyecto

### Clonar el proyecto de este mismo repositorio

Se deberá clonar el proyecto con:

    git clone https://github.com/mikelugarteramirez/monorespo-todo-app.git

### Instalación de las dependencias del proyecto

El proyecto funciona con NX en su última versión, y Angular 17 por lo cual se deberá ejecutar los siguientes comandos:

- El primero es para la instalación de las dependencias del proyecto, para esto necesitaremos NodeJS en su ultima version y NPM: 

```cmd
npm install
```

Una vez instalados los módulos podremos levantar nuestro proyecto.


## Levantar proyecto

Lo primero que debemos hacer es ejecutar el siguiente comando: 

```cmd
npm start
```

Una vez levantado el proyecto, podremos visualizar nuestra aplicación web en:

[http://localhost:4200](http://localhost:4200)

## Arquitectura

Se siguió el patrón de arquitectura Atómica separando en un monorepo todos los componentes reutilizables para el proyecto TodoList, los componentes están divididos de la siguiente forma:

- Atoms
- Molecules
- Organisms

No se creó un sistema de ruteo en la aplicación principal, todo se ejecuta en el mismo componente AppComponent.

### Implementacion con NGRX

Se usó la librería NGRX para la creación de estados en la aplicación, dividiendo las tareas de la siguiente manera:

- Actions
- Reducers
- Selectors