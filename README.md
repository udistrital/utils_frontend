# UtilsFrontend

Proyecto para crear librerias de npm transversales para los microfront del Sistema de Gestión Académica. Este proyecto está desarrollado con Angular. 

## Especificaciones Técnicas

- [Angular](https://angular.io/docs) 17.3.0

## Crear una nueva libreria

Para crear una nueva libreria basta con ejecutar el comando `ng generate library nombre-lbreria`.
Este comando generará una subcarpeta dentro de la carpeta projects, así:
```
└── utils_frontend
    └── projects
       └── nombre-libreria
          └──src
             ├──public-api.ts
             └──lib
                └──component files (.ts, .html, etc.)
```

En la subcarpeta `lib` se encuentran todos archivos que se desean integrar a la libreria y en `public-api.ts` se exportan aquellos que se van a publicar.

## Construir y publicar

Para contruir la libreria se debe ejecutar el comando `ng build nombre-lbreria`. Este comando genera `dist/nombre-lbreria`

Una vez se construye el proyecto se debe empaquetar con el comando `cd dist/nombre-lbreria && npm pack`. Este comando genera un archivo `.tgz`

Para cambiar la versión se debe cambiar en el archivo `package.json` de la subcarpeta `projects`.

Para publicar una nueva versión es necesario tener un usuario en `https://www.npmjs.com/` y ejecutar el comando `npm login` y finalmente `npm publish dist/nombre-lbreria/nombre-lbreria-0.0.1.tgz`

## Utilizar libreria

Para utilizar la libreria dentro de un proyecto de angular se instala como cualquier paquete: `npm install nombre-lbreria@0.0.1`
