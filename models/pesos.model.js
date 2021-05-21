const {Schema, model} = require('mongoose');

const PesoSchema = new Schema(
  {
    id: Number,
    peso: Number,
    envio_id:Number,
    clienteId: {
      type: Schema.Types.ObjectId,
      ref: 'complex'
    }
  },
  {
    timestamps: true
  }
)
module.exports = model('peso',PesoSchema)