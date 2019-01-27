const bcrypt = require('bcrypt')
const saltRounds = 10
const jwt = require('jsonwebtoken')
const secret_key = process.env.JWT_SECRET

exports.register = (req,res,next) => {
  req.check('username','Username length 6 - 12').isLength({min:6,max:12})
  req.check('password','Password min 8').isLength({min:8}).equals(req.body.confirmPassword).withMessage('Confirm password is different')
  
  const error = req.validationErrors()
  if(error){
    res.status(400).json({
      message: error[0].msg
    })
  } else{
    req.body.password = bcrypt.hashSync(req.body.password, saltRounds)
    next()
  }
}

exports.checkAuth = (req,res,next) => {
  try{
    const token = req.headers.authorization.split(' ')[1]
    const decoded = jwt.verify(token,secret_key)
    req.userData = decoded.showUser
    console.log(secret_key)
    next()
  } catch(error){
    res.status(400).json({message: 'Auth failed'})
  }
}