const express = require('express')
const router = express.Router()

const controller = require('../controllers/log')

router.get('/',controller.index)
router.get('/:nim',controller.show)
router.post('/',controller.store)

module.exports = router