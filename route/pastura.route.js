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
        res.status(400).json({message: error.message})
    }
})

//Get all Method (Getting all the data from the Database)
router.get('/getAll', async (req, res) => {
    try{
        const data = await Pastura.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
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


module.exports = router;
