const mongoose = require('mongoose')


// product uchun

const reportSchema = mongoose.Schema({
    userName:String,
    userFish:String,
    userlar:String,
    services:[Object],
    cilientFish:String,
    cilientBolim:String,
    cilientKabinet:String,
    tasdiq:String,
    fullFData:String
})

const ReportModel = mongoose.model('ReportModel' , reportSchema)



module.exports = ReportModel