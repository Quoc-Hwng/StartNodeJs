const mongoose = require('mongoose')
const users = require('./User')
const product = require('./Product')
const Schema = mongoose.Schema

const createSchema = (schema) => {
    const model = new Schema(schema,{timestamps:true})
    return model
}

const User = mongoose.model('User',createSchema(users))
const Product = mongoose.model('Product',createSchema(product))
module.exports = {User, Product}