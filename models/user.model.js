const {Schema, model} = require('mongoose');

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    passwordHash: {
      type: String,
      required: true
    },
    userType: {
      type: String,
      enum: ['gobernanta','empaquetador','admin','revisador','direccion','superdireccion','compras','laundryadmin','superadmin']
    },
    complexes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'complex'
      }
    ],
    disable: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
)

module.exports = model('user', UserSchema)

