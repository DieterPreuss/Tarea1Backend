var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PasturaSchema = new Schema({
  id: {
    type: String,
  },
  Familia: {
    type: String,
    validate: [
      function(nombre) {
        return nombre.length <= 200;
      },
      'El nombre no deberia exceder los 200 caracteres '],
  },
  GRAMINEAS: {
    type: String,
    /*
    enum: ['Agrostis montevidensis', 'Andropogon lateralis', 'Andropogon selloanus', 'Andropogon ternatus', 'Aristida filifolia', 'Aristida laevis', 'Aristida murina', 'Aristida uriguayensis', 'Aristida venustula', 'Axonopus affinis', '-']
    */
  },
  Especie: {
    type: String,
    validate: [
      function(Especie) {
        return Especie.length <= 200;
      },
      'La Especie no deberia exceder los 200 caracteres '],
  },
  Tipo_Vegetativo: {
    type: String,
    enum: ['Cespitoso', 'Estolonifero', 'Rizomatozo', 'Estolonifero-rizomatozo', 'Estolonifero-rizomatiforme', '-']
  },
  Rizoma_engrozado: {
    type: String,
    enum: ['Si', 'No', '-']
  },
  Macollo1: {
    type: String,
    enum: ['Semi rollizo', 'Comprimido', 'Semi Rolliza', 'Rollizo', 'Semi Comprimido', 'Semi Rollizo o rollizo', 'Muy Comprimido', 'Semi comprimido-Rollizo', '-']
  },
  Macollo2: {
    type: String,
    enum: ['Intravaginal', 'Extravaginal', 'Extravaginal principalmente', 'Intra o extra', '-', 'Intravaginal o Extravaginal', 'Extravaginal(Intra en gral)']
  },
  Consistecia_de_la_ligula: {
    type: String,
    enum: ['Membranacea', 'Disuelta en pelos', 'Mixta', '-', 'No visible']
  },
  Forma_de_la_ligula: {
    type: String,
    enum: ['Truncada y dientada', 'Truncada', 'Aguda', 'Redondeada', '-']
  },
  Tamaño: {
    type: String,
    enum: ['-', 'Chica', 'Largos', 'Muy chica', 'Mas ancha que alta', 'Muy aguda', 'No visible', 'Alta',
      'Corta', 'Grande', 'Visible']
  },
  Otra_caracteristica_ligula: {
    type: String,
    validate: [
      function(Especie) {
        return Especie.length <= 200;
      },
      'La caracteristica no deberia exceder los 200 caracteres '],
  },
  Color_de_la_ligula: {
    type: String,
    enum: ['Cataño', 'Blanca o castaño', 'Castaño', 'Castaña', 'Castaño en hojas maduras', '-']
  },
  Forma_de_la_lamina: {
    type: String,
    enum: ['-', 'Linear', 'Navicular', 'Linear-Lanceolada', 'Lanceolada', 'Lanceolada ', 'Linear']
  },
  Canaliculada: {
    type: String,
    enum: ['Canaliculada', 'Acanalada', 'Ligeramente canaliculada', '-']
  },
  Tipo_de_lamina: {
    type: String,
    enum: ['Plana', 'Navicular-Plegada', 'Navicular', 'Plegada', 'Navicular a plana', '-', 'Navicular', 'Plegada', 'Plegada o aveces plana']
  },
  Apice: {
    type: String,
    enum: ['Agudo', 'Obtuso', '-']
  },
  Nervadura_central_marcada: {
    type: String,
    enum: ['Si', 'No', '-']
  },
  Observaciones_Lamina: {
    type: String,
  },
  Pelos: {
    type: String,
    enum: ['Glabra', 'Glabra o Pubecente', 'Pubecente', 'Pubescente', '-', 'Glabra o Pubescente', 'Poco a nada']
  },
  Ubicación_de_pelos: {
    type: String,
  },
  Observaciones_pelos: {
    type: String,
  },
  Observaciones_Generales: {
    type: String,
  },
  Ciclo_de_Vida: {
    type: String,
    enum: ['Anual', 'Perene', '-']
  },
  Ciclo_productivo: {
    type: String,
    enum: ['Invernal', 'Estival', '-']
  },
  Tipo_productivo: {
    type: String,
    enum: ['Tierno', 'Duro', 'Ordinario', 'Tierno-Ordinario', 'Tierno-Ordinario', 'Ordinaria', 'Ordinara', 'Fino', 'Tierno antes de emitir fruto', 'Ordinario-Tierno', 'Tierno-Fino', 'Muy enano', 'Ordinario a tierno', 'Ordinario-Duro', '-']
  },
  Tipo_de_Campo: {
    type: String,
  },
  Imagen: {
    type: Buffer,
  }
});

// Exportar el modelo
module.exports = mongoose.model('Pastura', PasturaSchema);
