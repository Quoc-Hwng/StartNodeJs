const {Product} = require('../models/index')
module.exports = class ProductService {
    static async createProduct(req, res) {
       try{
        const result = Product.create({
            id: req.body.id,
            name: req.body.name,
            price: req.body.price,
            status: req.body.status
        })
        res.json(result)
       }
       catch(error){
           res.json(error)
       }
    }
    static async changeStatus(req, res){
        try{
            const result = await Product.findOneAndUpdate({id: req.body.id,status: req.body.oldStatus},{status: req.body.newStatus})
            res.json(result)
        }catch(error){
            res.json(error)
        }
    }
}