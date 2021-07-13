const {Schema, model} = require('mongoose');

const CustomerSchema = new Schema(
  {
    ClienteId: Number,
    nombre: String
  }
)

module.exports = model('customers', CustomerSchema)

