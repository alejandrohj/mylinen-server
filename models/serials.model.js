const {Schema, model} = require('mongoose');

const SerialsSchema = new Schema(
  {
    clave: String,
    activo: Boolean,
    diasespeciales: Boolean,
    enviado: Boolean,
    exportado: Boolean,
    fechaalta: Date,
    fechabaja: Date,
    fechacompra: Date,
    info: String,
    limpio: Boolean,
    nciclosrealizados: Number,
    numerociclos: Number,
    serial: String,
    baja_id: Number,
    cicloactual_id: Number,
    cliente_id: Number,
    clienteenviado_id: Number,
    estadoserial_id: Number,
    serialexterno: String,
    id: Number,
    articulo_id: Number,
    contenedor_id: Number,
    appClienteId: {
      type: Schema.Types.ObjectId,
      ref: 'complex'
    }
  },
  {
    timestamps: true
  }
)
module.exports = model('serials',SerialsSchema)