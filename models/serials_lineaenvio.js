const {Schema, model} = require('mongoose');

const SerialslineaEnvioSchema = new Schema(
  {
    lineaenvio1_id: Number,
    serials_id: Number
  },
  {
    timestamps: true
  }
)
module.exports = model('serials_lineaenvio',SerialslineaEnvioSchema)