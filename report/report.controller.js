const ReportModel = require('./report.model')


// get

async function getReport(req, res) {
    try {
        const contact = await ReportModel.find({})
        return res.status(200).send(contact)
    } catch (err) {
        res.status(400).send(err)
    }
}

// post 

async function addReport(req, res) {
    try {
        const contact = await ReportModel.create(req.body)
        return res.status(200).send(contact)
    } catch (err) {
        res.status(400).send(err)
    }
}

// update / put

async function updateReport(req, res){
    try{
        let userId = req.params.id
        let result = await ReportModel.findByIdAndUpdate(userId, req.body)
        return res.status(200).send(result)
    } catch(err){
        res.status(400).send(err)
    }
}

// delete


async function deleteReport(req, res){
    try{
        let userId = req.params.id
        let result = await ReportModel.findByIdAndRemove(userId)
        return res.status(200).send(result)
    } catch(err){
        res.status(400).send(err)
    }
}

module.exports = {
    getReport,
    addReport,
    updateReport,
    deleteReport
}