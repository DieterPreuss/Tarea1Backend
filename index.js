const express = require('express');
const routes = require('./route/pastura.route.js');
const db = require('./db');

db.on('error', (error) => {
    console.log(error)
})

db.once('connected', () => {
    console.log('Database Connected');
})

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

app.use('/api', routes)



/*
const server = http.createServer((req, res) => {

  if (req.url === '/') {
    res.write('Se accedio al path raiz');
    res.end()
  }
  else {
    res.write(`
            <h1> Respuesta default: </h1>
            <p> No se encontro la pagina que estas buscando </p>
            <a href="/"> Volver </a>
    `);
    res.end()
  }
  //res.write('Respuesta al usuario');
})

//console.log("conectado");
server.listen(5000);

*/

