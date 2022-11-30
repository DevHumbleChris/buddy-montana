const router = require('express').Router()
const controllers = require('../controllers')

router.get('/hello', controllers.hello)
router.post('/reply', controllers.reply)
router.post('/callback', controllers.callback)

module.exports = router
