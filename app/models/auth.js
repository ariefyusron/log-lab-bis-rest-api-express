const mongoose = require('mongoose')
const Schema = mongoose.Schema

const authSchema = new Schema({
  username: {
    type: String,
    minlength: 6,
    maxlength: 12,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  }
})

const Auth = mongoose.model('Auth',authSchema)

module.exports = Auth