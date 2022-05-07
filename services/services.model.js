const mongoose = require('mongoose')


// product uchun

const servicesSchema = mongoose.Schema({
    category: String,
    type:[String]
})

const ServicesModel = mongoose.model('ServicesModel' , servicesSchema)



module.exports = ServicesModel