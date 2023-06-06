const Router =require('express')
const router = new Router();
const BasketController = require('../controllers/basketContoller')
router.get('/', BasketController.getBasket)
router.post('/', BasketController.postBasket)
module.exports = router