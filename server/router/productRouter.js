const Router =require('express')
const router = new Router();
const ProductController = require('../controllers/productController')
router.get('/', ProductController.getProductAll)
router.get('/:id', ProductController.getProductOne)
router.delete('/', ProductController.deleteProduct)
router.post('/', ProductController.postProduct)
module.exports = router
