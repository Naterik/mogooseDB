
const express = require('express')
const { getHomePage, getAboutPage, getCreateUser, postCreateUser, getUpdateUser, postUpdateUser } = require('../controllers/home.controller')
const router = express.Router()

const webRouter=(app)=>{
router.get('/', getHomePage)
router.get('/about',getAboutPage)
router.get('/create-user',getCreateUser);
router.post('/create-user',postCreateUser)
router.get('/update/:id',getUpdateUser);
router.post('/update',postUpdateUser)


app.use('/',router)
}

module.exports=webRouter



