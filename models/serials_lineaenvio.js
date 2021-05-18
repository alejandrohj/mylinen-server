const {Schema, model} = require('mongoose');

const SerialslineaEnvioSchema = new Schema(
  {
    lineaenvio1_id: Number,
    cantidad: Number
  },
  {
    timestamps: true
  }
)
module.exports = model('serials_lineaenvio',SerialslineaEnvioSchema)