const ApiError = require('../error/ApiError')
class BasketController{
    async postBasket(req, res){
        res.json('jhhjgjhgjgjhg')

    }
    async getBasket(req, res, next){
//         const {id} = req.query
//         if (!id) {
//            return  next(ApiError.badRequest('vfdfjsvndfjkv'))
//         }
// res.json(id)
    }
}
module.exports = new BasketController()