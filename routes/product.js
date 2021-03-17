const ProductService = require('../controllers/product')
const express = require('express')
const router = express.Router()

router.post('/add-product', ProductService.createProduct)
router.put('/change-status',ProductService.changeStatus)
module.exports = router