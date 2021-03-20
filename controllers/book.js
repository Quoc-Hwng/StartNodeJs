const {Book} = require('../models/index')
module.exports = class BookService {
    static async createBook(req, res) {
       try{
        const result = Book.create({
            id: req.body.id,
            bookName: req.body.BookName,
            price: req.body.price,
            status: req.body.status
        })
        res.json(result)
       }
       catch(error){
           res.json(error)
       }
    }
    static async outputBook(req, res){
        try{

        }
        catch(error){
            res.json(error)
        }
    }
}