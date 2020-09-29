const {Schema, model} = require('mongoose');


const ComplexSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    adress: {
      type: String
    },
    linen:[
      {
        linenName: String,
        linenPrice : Number
      }
    ],
    services:{
      type: String,
      enum: ['laundry','renting'],
      default: 'laundry'
    }
  },
  {
    timestamps: true
  }
)

module.exports = model('complex',ComplexSchema)