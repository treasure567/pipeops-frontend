const express = require('express')
const router = express.Router()
// const {authMiddleware, authAdmin, notAdmin} = require('../middleware/authentication.js')

const {
    home,
    postLogin
} = require('../controllers/main.js')

router.get('/home', home)

// auth
router.post('/auth/login', postLogin)
module.exports = router

