const {Schema, model} = require('mongoose');


const OrderSchema = new Schema(
  {
    complexId: {
      type: Schema.Types.ObjectId,
      ref: 'complex'
    },
    CreatedBy : {
      type: Schema.Types.ObjectId,
      ref: 'user'
    },
    linenPendingToRewash:[
      {
        laundry: {
          type: Schema.Types.ObjectId,
          ref: 'laundry'
        },
        quantity: Number,
      }
    ],
    linenOrdered: [
      {
        laundry: {
          type: Schema.Types.ObjectId,
          ref: 'laundry'
        },
        quantity: Number,
        subtotal: Number
      }
    ],
    allLinenSendedToHotel: [
      {
        laundry: {
          type: Schema.Types.ObjectId,
          ref: 'laundry'
        },
        quantity: Number,
      }
    ],
    linenToRewash: [
      {
        laundry: {
          type: Schema.Types.ObjectId,
          ref: 'laundry'
        },
        quantity: Number,
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