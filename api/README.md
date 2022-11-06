# API Books

<hr />

## Instalación

- Clonar el proyecto con SSH o Http.
- En la carpeta raiz del proyecto ejecutar: _docker-compose build_ para crear la base de datos en un contenedor Docker y _docker-compose up_ para correr la base de datos. **NOTA:** Procurar no tener utilizado el puerto 27017.
- Dentro de la carpeta _api_ ejecutar npm i para instalar los modulos de NodeJS.
- Descargar la data de los CSV desde el link https://www.kaggle.com/datasets/saurabhbagchi/books-dataset?resource=download. Una vez descargados copiarlos en el directorio _api/archives_ para que luego se pueda inicializar la base de datos.

## Iniciar API

- _npm run dev_ para correr en modo desarrollo.
- _npm start_ para correr en producción.

## Inicializar Base de Datos

- Una vez instalado el proyecto, las dependecias, base de datos, podemos correr la api y comenzar con las pruebas
- Para precargar de datos la base se deberá consultar los siguientes endpoints:
- http://localhost:3300/mongo/init-books inicializa directorio de libros
- http://localhost:3300/mongo/init-ratings inicializa directorio de ratings
- http://localhost:3300/mongo/init-users inicializa directorio de usuarios
- _NOTA:_ Los siguientes endpoints demorarán unos minutos debido a la gran cantidad de datos a cargar.

## Endpoints

- Se adjuntaran al mail los endpoints a consultar con postman

API lista para utilizar :)
