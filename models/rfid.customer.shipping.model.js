const {Schema, model} = require('mongoose');

const CustomerShippingSchema = new Schema(
  {
    id: Number,
    codigo: String,
    estado: String,
    fecha: Date,
    chofer_id: Number,
    cliente_id: Number,
    turno_id: Number,
    udm_id: Number,
    fechacierre: Date,
    totalprendas: Number,
    totalbultos: Number,
    arch: {
      type: Schema.Types.ObjectId,
      ref: 'arch'
    },
    complex: {
      type: Schema.Types.ObjectId,
      ref: 'complex'
    }
  },
  {
    timestamps: true
  }
)
module.exports = model('customershipping',CustomerShippingSchema)