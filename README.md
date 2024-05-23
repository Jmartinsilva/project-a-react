## Aplicación One-Page con React (SPA)

[![alt text](src/assets/projectA.png)](https://github.com/tu-usuario/nombre-del-proyecto)

[![Deploy](https://img.shields.io/badge/Deploy-Netlify-blue)](https://project-a-spa-formulario-react-js.netlify.app)
Sitio web..☝️

### Descripción

Este proyecto es una aplicación de una sola página (one-page responsive) construida con React y JavaScript, utilizando la herramienta de desarrollo Yarn Create Vite. Permite navegar entre diferentes secciones sin recargar la página

## Tecnologías Utilizadas

- **React.js**: Biblioteca de JavaScript para construir interfaces de usuario.
- **React Router Dom**: Para manejar la navegación entre las diferentes secciones de la aplicación.
- **React-hook-form**: Se utilizo para el manejo de formulario.
- **React-redux**: Para meanejar los estados de Auth.
- **Firebase**:  Proporciona bases de datos en tiempo real alojadas en la nube.

## Estructura del Proyecto

- `src/` 

    - `components/`: 

	#Componentes pequeños y reutilizables de la aplicación.

    - `containers/`: 

	#Componentes grandes y principales de la aplicación.

    -`router/`

        -`AppRouter/`:

	#Archivo principal que configura las rutas, <AuthRoutes/> y <App/>

    *********************

    -`journal/routes/` : 
        -`App/` : 

			#Archivo que contiene la ruta <App/>, principal.

    -`auth/routes/` : 

        -`AuthRoutes/`: 
			
			#Archivo que contiene la ruta <AuthRoutes/>, autenticación del proyecto

## Uso

1- Instalar vite con yar : yarn create vite my-vue-app
2-Instalar dependencias: yarn install
3-Ejecuta la aplicación: yarn dev
Página de inicio : Accesible en la URL raíz ( http://localhost:3000).





