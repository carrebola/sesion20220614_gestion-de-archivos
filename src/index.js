const express = require('express')

// cargamos la libreria multer para gestionar subidas de archivos
const multer = require('multer')

app = express()

//ruta general
app.get('/', (req, res)=>{
    res.send('estas en raiz')
})

//definimos el nombre de los archivos y donde (ruta) se van a subir
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'archivos/')
    },
    filename:  (req, file, cb)=> {
        cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname.split('.')[1])
    }
})

//Creamos el objeto multer con la ubicación y nombre (storage)
var upload = multer({ storage: storage })
//Creamos la ruta usando upload.single como middleware
app.post('/files', upload.single('file'), (req, res)=> {
   try {
        res.json({
            mensaje: 'OK',
            nombreArchivo: req.file.originalname
        })
   } catch (error) {
    res.json({
        mensaje: 'error',error
    })
   }      
})



app.listen(8080, ()=>{
    console.log('Escuchando en 8080');
})