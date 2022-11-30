const router = require('express').Router()
const controllers = require('../controllers')

router.get('/hello', controllers.hello)

module.exports = router
