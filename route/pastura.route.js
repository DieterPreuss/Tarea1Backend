const express = require('express');
const router = express.Router();
const Pastura = require('../model/pastura.model');

// Require al controlador ¿?¿?
const pastura_controller = require('../controller/pastura.controller');

router.post('/create', pastura_controller.pastura_create);

//router.post('/new', pastura_controller.pastura_new);

router.post('/search', pastura_controller.pastura_search);

router.post('/detail', pastura_controller.pastura_detail);


//Post Method (Posting data to Database.)
router.post('/post', async (req, res) => {
  const data = new Pastura({
    Familia: req.body.Familia,
    Especie: req.body.Especie,
    Tipo_Vegetativo: req.body.Tipo_Vegetativo,
    Rizoma_engrozado: req.body.Rizoma_engrozado
  })

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave)
  }
  catch (error) {
    res.status(400).json({ message: error.message })
  }
})

//Get all Method (Getting all the data from the Database)
router.get('/getAll', async (req, res) => {
  try {
    const data = await Pastura.find();
    res.set('Access-Control-Allow-Origin', '*');
    res.json(data)
  }
  catch (error) {
    res.status(500).json({ message: error.message })
  }
})
/*
//Get by ID Method (Getting data based on the ID)
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method (Updating data based on the ID)
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method (Deleting data based on the ID)
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
*/

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Usuario:bIoKQSWZyOVBy5g3@cluster-tareas.xvmmwes.mongodb.net/?retryWrites=true&w=majority";
//var url = "mongodb://localhost:27017/";
//mongodb+srv://Usuario:bIoKQSWZyOVBy5g3@cluster-tareas.xvmmwes.mongodb.net/?retryWrites=true&w=majority
/*
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var query = { Tipo_Vegetativo
: "Cespitoso" };
  dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});*/

router.get('/pasturas', async (req, res) => {
  try {
    //var params = Object.keys(req.query).map(key => req.query[key]);
    //console.log(params);
    
    if(req.query["filter"]==undefined){

    var coso = {};
    for (var propName in req.query) {
      //console.log(propName+':'+req.query[propName]);
      coso[propName] = req.query[propName];
    }
      //console.log(req.query["filter"]);
    //console.log(coso);
    Pastura.find(coso).exec((err, data) => {
      if (err) return handleError(err);
      res.setHeader('X-Total-Count', data.length);
      res.setHeader('Content-Range', 'pasturas 0-20/' + data.length);
      //res.setHeader('X-Total-Count', data.length);
      
      //console.log(data)
      res.send(data)
    });
    }else{
      var coso = {};
      var filter=JSON.parse(req.query["filter"]);
      console.log("filter: ");
      console.log(filter);
    for (var propName in filter) {
      coso[propName] = filter[propName];
    }

    Pastura.find(coso).exec((err, data) => {
      if (err) return handleError(err);
      res.setHeader('X-Total-Count', data.length);
      res.setHeader('Content-Range', 'pasturas 0-20/' + data.length);
      res.send(data)
    });
    }
  }
  catch (error) {
    res.status(500).json({ message: error.message })
  }

});


router.get('/pasturas/:id', async (req, res) => {
    try{
        const data = await Pastura.find({id: req.params.id});
        res.json(data[0])
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.get('/search', async (req, res) => {
  try {
    //var params = Object.keys(req.query).map(key => req.query[key]);
    //console.log(params);
    var coso = {};
    for (var propName in req.query) {
      //console.log(propName+':'+req.query[propName]);
      coso[propName] = req.query[propName];
    }
    //console.log(coso);
    Pastura.find(coso).exec((err, data) => {
      if (err) return handleError(err);
      res.set('Access-Control-Allow-Origin', '*');
      //console.log(data)
      res.json(data)
    });
  }
  catch (error) {
    res.status(500).json({ message: error.message })
  }

});

module.exports = router;
/*
 Pastura.find()
      .where("Tipo_Vegetativo")
      .equals(req.query.tipo_vegetativo)
      .select("_id Tipo_Vegetativo GRAMINEAS")
      .exec((err, data) => {
        if (err) return handleError(err);
          res.set('Access-Control-Allow-Origin', '*');
          res.json(data)
        });


------------------------------------------------------------------------
try {
    Pastura.find({ Tipo_Vegetativo: req.query.tipo_vegetativo, macollo1: req.query.macollo1}, function (err, data) {});
        if (err) return handleError(err);
          res.set('Access-Control-Allow-Origin', '*');
          res.json(data)
  }

------------------------------------------------------------------------
  ,Rizoma_engrozado: req.body.Rizoma_engrozado, macollo1: req.query.macollo1,Macollo2: req.body.Macollo2, Consistecia_de_la_ligula: req.body.Consistecia_de_la_ligula, Forma_de_la_ligula: req.body.Forma_de_la_ligula, Tamaño: req.body.Tamaño, Otra_caracteristica_ligula: req.body.Otra_caracteristica_ligula,Color_de_la_ligula: req.body.Color_de_la_ligula, Tipo_de_Campo: req.body.Tipo_de_Campo
*/