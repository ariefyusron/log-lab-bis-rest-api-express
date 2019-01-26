const logModel = require('../models/log')

exports.index = async (req,res) => {
  const log = await logModel.find().sort([['_id',-1]])
  res.json(log)
}

exports.show = async (req,res) => {
  const log = await logModel.find({
    nim: req.params.nim
  }).sort([['_id',-1]])
  res.json(log)
}

exports.store = async (req,res) => {
  try{
    const storeLog = await logModel.create(req.body)
    res.json(storeLog)
  } catch(err){
    res.status(400).json({
      message: err.message
    })
  }
}