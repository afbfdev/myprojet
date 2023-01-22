const mongoose = require('mongoose')
const {Schema} = mongoose;

const User = new Schema({

    pseudo: {
        type: String,
        required: true
    },

      email: {
        type: String,
        required: true,
        unique: true
      },

      password: {
        type: String,
        required: true
      },

      confirmPassword: {
        type: String,
        required: true
      }
})

const SignupModel = mongoose.model("signup",User)
module.exports = SignupModel
