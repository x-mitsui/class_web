const router = require('koa-router')()
const IndexController = require('../controllers/Index')
const ListController = require('../controllers/List')
const ErrorController = require('../controllers/Error')
router.get('/', IndexController.render)
router.get('/list/:kw?', ListController.render)
router.get('*', ErrorController.render)

module.exports = router
