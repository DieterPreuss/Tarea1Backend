// Conexion a mongo
var mongoose = require('mongoose');

var dev_db_url = 'mongodb+srv://Usuario:bIoKQSWZyOVBy5g3@cluster-tareas.xvmmwes.mongodb.net/?retryWrites=true&w=majority';

var mongoDB = dev_db_url;

mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;