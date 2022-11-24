/******Modulos******/
import express from 'express';

//Instancia de servidor
const app = express();

/******Middlewares******/
app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));

app.get('/mensaje', (req,res)=>{
    res.send('Hola probando Heroku!')
});

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, ()=>{
    console.log('Servidor express escuchando en el puerto 8080')
});

server.on('error', error => console.log('Error en servidor'));