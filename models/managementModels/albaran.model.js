const {Schema, model} = require('mongoose');

const AlbaranSchema = new Schema(
  {
    ClienteId: Number,
    nAlb: String,
    fecha:Date,
    articulos: [
      {
        articulo: String,
        codigo: String,
        precio: Number
      }
    ]
  }
)

module.exports = model('albaran', AlbaranSchema)

