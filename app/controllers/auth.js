const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secret_key = process.env.JWT_SECRET

const authModel = require('../models/auth')

exports.register = async (req,res) => {
  try{
    const newUser = await authModel.create(req.body)
    res.json(newUser)
  } catch(err){
    res.status(400).json({
      message: err.message
    })
  }
}

exports.login = async (req,res) => {
  const user = await authModel.findOne({
    username: req.body.username
  })
  if(user){
    const compare = bcrypt.compareSync(req.body.password,user.password)
    if(compare){
      const token = jwt.sign({user},secret_key)
      res.json({
        userData: user,
        token: token
      })
    } else{
      res.status(400).json({
        message: 'Password invalid'
      })
    }
  } else{
    res.status(400).json({
      message: 'Username invalid'
    })
  }
}