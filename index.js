const express = require('express');
const routes = require('./route/pastura.route.js');
const db = require('./db');
var cors = require('cors');

db.on('error', (error) => {
    console.log(error)
})

db.once('connected', () => {
    console.log('Database Connected');
})

const app = express();

app.use(cors());

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Expose-Headers', 'Content-Range, X-Total-Count');
    //res.header('Access-Control-Expose-Headers', 'X-Total-Count');
    next();
});

app.use('/api', routes)



/*
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
*/

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

