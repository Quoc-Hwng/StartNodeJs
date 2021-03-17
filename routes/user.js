const UserService = require('../controllers/user')
const express = require('express')
const router = express.Router()

router.post('/register', UserService.createUser)
router.post('/login', UserService.login)
router.put('/changePassword', UserService.changePassword)
router.delete('/deleteUser',UserService.deleteUser)
module.exports = router