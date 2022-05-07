const mongoose = require('mongoose')

const usersSchema = mongoose.Schema({
    tash:String,
    lavoz:String,
    fish:String,
    ismi:String,
    tel:String,
    parol:String
})

const UserModel = mongoose.model('UserModel' , usersSchema)

module.exports = UserModel