const mongoose = require('mongoose')


// product uchun

const cilientsSchema = mongoose.Schema({
    fish:String,
    kabinet:String,
    bolim:String,
    lavozim:String,
    texnikBaza:[Object],
    tel:String,
    date:Date
})

const CilientModel = mongoose.model('CilientModel' , cilientsSchema)



module.exports = CilientModel