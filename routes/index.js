const router = require('koa-router')()
const controller = require('../controllers/Home')
router.get('/', controller.index)
router.get('/list/:id', controller.list)
router.get('*', controller.error)

module.exports = router
