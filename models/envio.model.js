const {Schema, model} = require('mongoose');

const EnvioSchema = new Schema(
  {
    id: Number,
    codigo: String,
    comunicado: String,
    estado: String,
    fecha: Date,
    chofer_id: Number,
    cliente_id: Number,
    turno_id: Number,
    udm_id: Number,
    fechacierre: Date,
    totalprendas: Number,
    totalbultos: Number,
    appClienteId: {
      type: Schema.Types.ObjectId,
      ref: 'complex'
    }
  },
  {
    timestamps: true
  }
)
module.exports = model('envio',EnvioSchema)