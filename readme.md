# Gestión de archivos upload/delete mediante las librerias multer y fs-extra #



## SESIÓN 20220614 - Endpoint para borrar archivos mediante la librería fs-extra ##
1. cargamos express
2. cargamos la libreria multer para gestionar subidas de archivos

3. creamos objeto express
4. implementamos una ruta general para verificar api

5. definimos el nombre de los archivos (con su extensión) y donde (ruta) se van a subir mediante el método diskStorage

### Ruta para subir archivos ###
6. Creamos el objeto **multer** con la ubicación y nombre (*storage*)
7. Creamos la ruta `/api/files` usando upload.single (o .array o .fields dependiendo del número de archivos que queramos subir) como middleware usando en la función callback try/catch para gestionar errores de subida

> No olvidar crear la carpeta destino antes de usar postman para las peticiones

---

## SESIÓN 20220616 - Endpoint para borrar archivos mediante la librería fs-extra ##

8.  instalamos la librería **fs**
9.  creamos endpoint `app.delete('files/:file)` para pasar el nombre del archivo por parámetro
10. con `fs.remove(ruta+nombreArchivo)` borramos archivo.

#### Tareas pendientes:
- [ ] Gestionar errores cuando el archivo no existe
