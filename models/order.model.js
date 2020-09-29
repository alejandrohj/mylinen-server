const {Schema, model} = require('mongoose');


const OrderSchema = new Schema(
  {
    complex: {
      type: complexId,
      ref: 'complex'
    },
    linenPendingToRewash:[
      {
        linenName: String,
        linenQuantity: Number,
      }
    ],
    linenOrdered: [
      {
        linenName: String,
        linenQuantity: Number,
        linenPrice: Number,
        subtotal: Number
      }
    ],
    allLinenSendedToHotel: [
      {
        linenName: String,
        linenQuantity: Number,
      }
    ],
    linenToRewash: [
      {
        linenName: String,
        linenQuantity: Number,
      }
    ],
    status: {
      type: String,
      enum:['ordering','ordered','picked','washing','washed','delivering','delivered','re-washings','closed']
    }
  },
  {
    timestamps: true
  }
)

module.exports = model('order',OrderSchema)