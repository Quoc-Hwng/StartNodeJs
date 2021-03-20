const mongoose = require('mongoose')
const users = require('./User')
const product = require('./Product')
const books = require('./Book')
const Schema = mongoose.Schema

const createSchema = (schema) => {
    const model = new Schema(schema,{timestamps:true})
    return model
}

const User = mongoose.model('User',createSchema(users))
const Product = mongoose.model('Product',createSchema(product))
const Book = mongoose.model('Book',createSchema(books))
module.exports = {User, Product, Book}