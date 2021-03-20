const BookService = require('../controllers/book')
const express = require('express')
const router = express.Router()

router.post('/add-book', BookService.createBook)
//router.put('/change-status',BookService.changeStatus)
module.exports = router