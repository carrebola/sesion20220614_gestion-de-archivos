# Gestión de archivos upload/delete mediante las librerias multer y fs-extra #
## SESIÓN 20220616 - Endpoint para borrar archivos mediante la librería fs-extra ##
* cargamos expres
* cargamos la libreria multer para gestionar subidas de archivos

* creamos objeto express
* implementamos una ruta general para verificar api

* definimos el nombre de los archivos (con su extensión) y donde (ruta) se van a subir mediante el método diskStorage

### Ruta para subir archivos ###
* Creamos el objeto multer con la ubicación y nombre (storage)
* Creamos la ruta '/api/files' usando upload.single (o .array o .fields dependiendo del número de archivos que queramos subir) como middleware usando en la función callback try/catch para gestionar errores de subida

No olvidar crear la carpeta destino antes de usar postman para las peticiones

---

## SESIÓN 20220616 - Endpoint para borrar archivos mediante la librería fs-extra ##

* instalamos la librería fs
* creamos endpoint app.delete('files/:file) para pasar el nombre del archivo por parámetro
* con `fs.remove(ruta+nombreArchivo)` borramos archivo.