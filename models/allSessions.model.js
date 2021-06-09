const {Schema, model} = require('mongoose');

const SessionsSchema = new Schema(
  {
    loggedInUserId: {
      type: Schema.Types.ObjectId,
      ref: 'user'
    },
    when: Date
  }
)

module.exports = model('sessionfeed', SessionsSchema)

