const {Shop} = require('../models/models')
const ApiError = require('../error/ApiError')
class ShopController{
    async getShop(req, res){
        const shops = await Shop.findAll()
        return res.json(shops)
    }
    async postShop(req, res){
        const {name} = req.body
        const shop = await Shop.create({name})
        return res.json(shop)
    }
}
module.exports = new ShopController()