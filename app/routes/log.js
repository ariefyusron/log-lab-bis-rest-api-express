const express = require('express')
const router = express.Router()

const controller = require('../controllers/log')
const middleware = require('../middlewares/auth')

router.get('/',middleware.checkAuth,controller.index)
router.get('/:nim',middleware.checkAuth,controller.show)
router.post('/',middleware.checkAuth,controller.store)

module.exports = router