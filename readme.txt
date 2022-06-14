//cargamos express
// cargamos la libreria multer para gestionar subidas de archivos

//creamos objeto express
//implementamos una ruta general para verificar api

//definimos el nombre de los archivos (con su extensión) y donde (ruta) se van a subir mediante el método diskStorage

**ruta para subir archivos**
//Creamos el objeto multer con la ubicación y nombre (storage)
//Creamos la ruta '/api/files' usando upload.single (o .array o .fields dependiendo del número de archivos que queramos subir) como middleware usando en la función callback try/catch para gestionar errores de subida

//levantamos servidor

**No olvidar crear la carpeta destino antes de usar postman para las peticiones