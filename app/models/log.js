const mongoose = require('mongoose')
const Schema = mongoose.Schema

const logSchema = new Schema({
  nim: {
    type: String,
    minlength: 12,
    maxlength: 12,
    required: true
  },
  action: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

const Log = mongoose.model('Log',logSchema)

module.exports = Log