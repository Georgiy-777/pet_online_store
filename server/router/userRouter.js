const Router =require('express')
const router = new Router();
const UserController = require('../controllers/userController')
router.post('/', UserController.postUser)

module.exports = router