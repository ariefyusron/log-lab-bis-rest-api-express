const express = require('express')
const socket = require('socket.io')
const cors = require('cors')
const bodyParser = require('body-parser')
const validator = require('express-validator')
const app = express()
const server = require('http').Server(app)
const io = socket(server)
const mongoose = require('mongoose')

const port = process.env.PORT || 3000
const route = require('./app/routes')
const corOptions = {
  origin: 'http://18.191.228.64:3000',
  optionsSuccessStatus: 200
}

//setup mongoDb
mongoose.connect('mongodb://admin_lab_bis:log_lab_bis123@ds145184.mlab.com:45184/log_lab_bis')
mongoose.Promise = global.Promise

app.use(cors(corOptions))
app.use((req,res,next) => {
  req.io = io
  next()
})
app.use(bodyParser.json())
app.use(validator())
app.use(route)

server.listen(port, () => {
  console.log('Listening on '+port)
})