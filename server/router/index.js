const Router =require('express')
const router = new Router();

const productRouter = require('./productRouter')
const basketRouter = require('./basketRouter')
const shopRouter = require('./shopRouter')
const userRouter = require('./userRouter')





router.use('/user', userRouter)
router.use('/product', productRouter)
router.use('/basket', basketRouter)
router.use('/shop', shopRouter)


module.exports = router