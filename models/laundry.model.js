const {Schema, model} = require('mongoose');

const LaundrySchema = new Schema(
  {
    code: {
      type: String
    },
    name :{
      type: String,
      require: true
    },
    category: {
      type: String,
      enum: ['linen','clothes']
    },
    rfidid: Number
  },
  {
    timestamps: true
  }
)
module.exports = model('laundry',LaundrySchema)