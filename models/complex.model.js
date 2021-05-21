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
        laundry: {
          type: Schema.Types.ObjectId,
          ref: 'laundry'
        },
        price: Number,
        EPC: Number
      }
    ],
    services:{
      type: String,
      enum: ['laundry','renting'],
      default: 'laundry'
    },
    typeOfQuote: {
      type: String,
      enum: ['kilo','prenda']
    },
    klgPrice: Number,
    AtipicalKlgPrice: Number,
    rfidId: Number
  },
  {
    timestamps: true
  }
)

module.exports = model('complex',ComplexSchema)