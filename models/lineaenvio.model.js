const {Schema, model} = require('mongoose');

const lineaEnvioSchema = new Schema(
  {
    id: Number,
    peso: Number,
    bulto: Number,
    envio_id: Number,
    articulo_id: Number
  },
  {
    timestamps: true
  }
)
module.exports = model('lineaenvio',lineaEnvioSchema)