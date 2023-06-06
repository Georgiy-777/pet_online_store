const uuid = require('uuid');
const path = require('path');
const { Product } = require('../models/models');
const ApiError = require('../error/ApiError');

class ProductController {
    async postProduct(req, res) {
        // try {
            const { name, price, shopId} = req.body;
            const { image_url } = req.files; // Assuming you have a field named 'image_url' in your request's files

            // Generate a unique filename for the uploaded image
            const fileName = uuid.v4() + path.extname(image_url.name);

            // Move the uploaded image to the desired location
            await image_url.mv(path.resolve(__dirname, '..', 'static', fileName));

            const product = await Product.create({ name, price, shopId, image_url: fileName }); // Assuming you have a 'image' field in your Product model

            return res.json(product);
        // } catch (e) {
        //     // next(ApiError.badRequest(e.message));
        //     console.log(e.message)
        //
        // }
    }

    async getProductAll(req, res) {
        // Implement logic to get all products
    }

    async getProductOne(req, res) {
        // Implement logic to get a single product
    }

    async deleteProduct(req, res) {
        // Implement logic to delete a product
    }
}

module.exports = new ProductController();
