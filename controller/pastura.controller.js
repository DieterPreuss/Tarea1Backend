var mongoose = require('mongoose');
const Pastura = require('../model/pastura.model');

exports.pastura_new = function (req, res) {
     res.sendFile('/view/pasturas/add.html', { root: '.' })//-------------------------------------------------------------
};

exports.pastura_create = function (req, res,next) {
	console.log(req.body);
       
  var pastura = new Pastura(
	{
	  _id: new mongoose.Types.ObjectId(),
	  Familia: req.body.Familia,
	  Especie: req.body.Especie,
    Tipo_Vegetativo: req.body.Tipo_Vegetativo,
    Rizoma_engrozado: req.body.Rizoma_engrozado,
    
    Macollo1: req.body.Macollo1,
    Macollo2: req.body.Macollo2,
    
    Consistecia_de_la_ligula: req.body.Consistecia_de_la_ligula,
    Forma_de_la_ligula: req.body.Forma_de_la_ligula,
    Tamaño: req.body.Tamaño,
    Otra_caracteristica_ligula: req.body.Otra_caracteristica_ligula,
    Color_de_la_ligula: req.body.Color_de_la_ligula,
    
    Forma_de_la_lamina: req.body.Forma_de_la_lamina,
    Canaliculada: req.body.Canaliculada,
    Tipo_de_lamina: req.body.Tipo_de_lamina,
    Apice: req.body.Apice,
    Nervadura_central_marcada: req.body.Nervadura_central_marcada,
    Observaciones_Lamina: req.body.Observaciones_Lamina,
    
    Pelos: req.body.Pelos,
    Ubicación_de_pelos: req.body.Ubicación_de_pelos,
    Observaciones_pelos: req.body.Observaciones_pelos,
    
    Observaciones_Generales: req.body.Observaciones_Generales,
    
    Ciclo_de_Vida: req.body.Ciclo_de_Vida,
    
    Rizoma_engrozado: req.body.Rizoma_engrozado,
    
    Ciclo_productivo: req.body.Ciclo_productivo,
    
    Tipo_productivo: req.body.Tipo_productivo,
    
    Tipo_de_Campo: req.body.Tipo_de_Campo
	  //brand: brand._id,
	}
	    );

	    pastura.save(function (err) {
	        if (err) {
	            //return next(err);
	            console.log(err);
	            res.send('Error');
	        }
	        //res.send('Product Created successfully');
	        res.render('add.ejs', {pastura: Pastura})
	    })
}


exports.pastura_detail = function (req, res) {
     res.sendFile('/view/pasturas/view.html', { root: '.' })
};

exports.pastura_search = function (req, res) {

      //Se necesitaria sacar los arghumentos (de la busqueda) del request y luego utilizarlos para hacer una consulta a la base, por ultimo enviamos eso en un json? a la vista
    
     res.sendFile('/view/pasturas/search.html', { root: '.' })
  };
)
};
