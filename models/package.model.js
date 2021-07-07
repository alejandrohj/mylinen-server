const {Schema, model} = require('mongoose');

const PackageSchema = new Schema(
  { 
    linen: [
      {
        laundry: {
          type: Schema.Types.ObjectId,
          ref: 'laundry'
        },
        count: Number
      }
    ],
    shipping: {
      type: Schema.Types.ObjectId,
      ref: 'customershipping'
    }
  }
)

module.exports = model('package', PackageSchema)