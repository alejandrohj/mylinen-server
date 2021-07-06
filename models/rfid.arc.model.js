const {Schema, model} = require('mongoose');

const ArchSchema = new Schema(
  { 
    archNumber: Number,
    complex: {
      type: Schema.Types.ObjectId,
      ref: 'complex'
    },
    rfidComplexId: {
      type: Number
    }
  }
)

module.exports = model('arch', ArchSchema)