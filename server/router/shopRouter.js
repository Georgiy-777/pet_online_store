const Router =require('express')
const router = new Router();
const ShopController = require('../controllers/shopController')

router.get('/', ShopController.getShop)

router.post('/', ShopController.postShop)
module.exports = router
