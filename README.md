# Prueba técnica Alejandro Segovia Gallardo

## Descripción

Aplicación desarrollada haciendo uso de la librería React que consta de en un formulario tipo wizzard con varios steps para creación de contraseña:

1. Información y aceptación de términos y condiciones
2. Creación de contraseña y validación de la misma, además de una pregunta opcional.
3. Envío de petición y resultado de la petición.

## Aplicación

## Pre-requisitos

Se requiere tener instalado yarn o npm:

-   [yarn](https://yarnpkg.com/)
-   [npm](https://www.npmjs.com/get-npm)

## Iniciar aplicación

### Arranque inicial

Para el arranque de la aplicación por primera vez es necesario la instalaciión de dependencias de proyecto a través de los comandos proprocionados por npm o yarn.

-   `npm i`
-   `yarn`
    Posteriormente, la aplicación puede ser lanzada mediante el comando `yarn start` o `npm start`, lo cual desplegará la aplicación en un entorno local [http://localhost:3000](http://localhost:3000) a través del puerto 3000 por defecto.

### Arranques posteriores

Una vez las dependencias estan instaladas podremos lanzar la aplicación siempre que lo deseemos a través de los comandos `yarn start` o `npm start` al igual que en apartado anterior.

## Testing

### Herramientas utilizadas

Para la realización de pruebas unitarias se ha utilizado Jest y Enzyme como core, además de ReactTestUtils como complemento para la ejecución de acciones asincronas (visibles en los test de los formularios).

Dichos test unitarios localizados al mismo nivel que los diferentes componentes que testean (ficheros `index.test.tsx`)

### Configuración Jest

La configuración por defecto de Jest es visible en el fichero `jest.config.js` exsistente en el directorio raiz de este proyecto, la cual es:

```
module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    modulePaths: ['<rootDir>'],
    moduleNameMapper: {
        '^@Components(.*)$': '<rootDir>/src/components$1',
        '^@Styles(.*)$': '<rootDir>/src/styles$1',
        '^@Assets(.*)$': '<rootDir>/src/assets$1',
        '^@Utils(.*)$': '<rootDir>/src/utils$1',
        '^@Store(.*)$': '<rootDir>/src/store$1',
        '^@Services(.*)$': '<rootDir>/src/services$1',
        '^@Screen(.*)$': '<rootDir>/src/screen$1',
    },
    testEnvironment: 'jsdom',
}
```

### Ejecución de los test

Para lanzar los test es necesario haber instalado las dependencias del proyecto previamente.

En el caso de que dichas dependencias estén ya instaladas, pueden ejecutarse haciendo uso de los comandos `yarn test` o `npm test`

## Dependencias del proyecto

-   [Babel](https://babeljs.io/): Compilador javascript
-   [TypeScript](https://www.typescriptlang.org/): Superconjunto del lenguaje Javascript para la gestión de tipos
-   [Eslint](https://eslint.org/): Herramienta para definir patrones sobre código JavaScript
-   [Prettier](https://prettier.io/): Formateador de código automático
-   [React](https://es.reactjs.org/): Librería para construir interfaces de usuario/SPAs con JavaScript
-   [React Hook Form](https://react-hook-form.com/): Librería de formularios para React
-   [React Router](https://reactrouter.com/): Gestor de rutas para la navegación de la aplicación
-   [Redux](https://es.redux.js.org/): Gestor de estados de la aplicación
-   [Redux-saga](https://redux-saga.js.org/): Librería de manejo de side-effects a través de funciones generadoras
-   [Deox](https://deox.js.org): Librería para aplicar un enfoque funcional al flujo de Redux.
-   [Ramda](https://ramdajs.com): Librería de funciones diseñada para realizar programación funcional
-   [React-i18next](https://react.i18next.com/): Plugin de internacionalización para el soporte multidioma
-   [Material UI](https://material-ui.com/): Librería de componentes
-   [Styled Components](https://styled-components.com/): Para la estilización de componentes a través de css
-   [enzyme](https://enzymejs.github.io/enzyme/): Librería para ejecutar tests con jest en React
-   [jest](https://jestjs.io/): Librería de test para JavaScript
-   [Rescripts](https://github.com/harrysolovay/rescripts): Framework para ejecución de scripts de configuración
-   [Yup](https://github.com/jquense/yup): Librería para validación de formularios

## Justificaciones sobre las dependencias

### React Hook Form y Yup

Para el manejo de formularios se ha utilizado la librería de React Hook Form, basada en el paradigma de Uncontrolled Components de React para la gestión de fomularios ya que permite una mejor gestión de los estados de los campos del formulario además de una configuración sencilla, intuitiva y eficiente que evita el re-renderizado de componentes que podrían llegar a causar otras librerías de gestión de formularios.

En cuanto a la validación de los campos de los formuilarios, se utiliza Yup ya que permite una creación de esquemas de validación muy legible e intuitivo, además de integrarse perfectamente con React Hook Form

### Redux y Redux Saga

Se ha optado por utilizar Redux como gestor de estados de la aplicación para almacenar la información que se requiera en la aplicación. Esta decisión está tomada en base a la escalabilidad de la librería Redux así como la facilidad para modificar el store a través de las acciones y su capacidad de integración con middlewares.

Para la gestión de side-effects como las llamadas asícocronas se ha optado por usar Redux-Sagas, el cual permite gestionar los flujos de código como si fuera síncrono mediante el uso de funciones generadoras.

### Rescripts

Se ha configurado la librería de Rescripts para permitir el uso de alias en el código a través de las definiciones en los ficheros `tsconfig.paths.json`(embebido en tsconfig.json) y `.babelrc`

### Material UI

Se ha utilizado la librería de componentes MUI debido a que dicha librería cuenta con una gran cantidad de componentes que agilizan el desarrollo de la aplicación además de ser estos componentes altamente configurables tanto a nivel de propiedades como a nivel de estilos.

### Ramda y Deox

Se ha optado por usar ramda y deox debido a que se se le ha dado un enfoque de programación funcional al código para mejorar la legibilidad y comprensión del mismo.

## Estructura del proyecto

    .
    ├── __mocks__                   # Módulos mockeados utilizados para los test
    ├── public
    │   └── locales                 # Traducciones separadas por código de idioma
    ├── src                         # Contenido de nuestra aplicación
    │   ├── assets                  # Imágenes e iconos(svg) usados en la aplicación
    │   ├── components              # Componentes desarrollados
    │   │   └── {ComponentName}
    │   │       ├── index.test.tsx  # Tests del componente
    │   │       ├── index.tsx       # Componente principal
    │   │       ├── styles.ts       # Estilos/componentes estilizados usados de apoyo (en index.tsx) para la creación del componente
    │   │       └── types.ts        # Tipos del componente
    │   ├── router                  # Configuración de rutas
    │   ├── sreens                  # Lista de pantallas de la aplicación
    │   │   ├── Layout              # Layout principal de la petición contiene Header Footer y Contenido de la aplicación
    │   │   └── {ScreenName}
    │   ├── services                # Configuración de servicios
    │   ├── store                   # Configuración de la store de redux
    │   │   ├── actions             # Listado de acciones permitidas por el store
    │   │   ├── constants           # Constantes utilizadas para el store
    │   │   ├── reducers            # Reducers de la aplicación
    │   │   └── sagas               # Manejadores de los side effects
    │   ├── utils                   # Funciones de utilidad usadas en la aplicación
    │   ├── styles                  # Configuración del tema y estilos generales
    │   ├── App.tsx
    │   ├── index.css
    │   ├── index.tsx
    │   └── react-app-env.d.ts
    ├── .babelrc                    # Configuración de babel
    ├── .eslintrc.js                # Configuración de la herramienta eslint
    ├── .gitignore                  # gitignore del proyecto
    ├── .prettierrc                 # Configuración de Prettier para el formateo de código
    ├── .rescriptsrc.js             # Configuración de rescripts para los alias y su integración con babel
    ├── package-lock.json
    ├── package.json
    ├── README.md
    ├── tsconfig.json               # Configuración de Typescript
    └── tsconfig.paths.json         # Listado de alias
