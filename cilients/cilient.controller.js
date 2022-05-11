const CilientModel = require('./cilient.model')


// get

async function getCilient(req, res) {
    try {
        const user = await CilientModel.find({})
        return res.status(200).send(user)
    } catch (err) {
        res.status(400).send(err)
    }
}

// post 

async function addCilient(req, res) {
    try {
        const user = await CilientModel.create(req.body)
        return res.status(200).send(user)
    } catch (err) {
        res.status(400).send(err)
    }
}

// update / put

async function updateCilient(req, res){
    try{
        let userId = req.params.id
        let result = await CilientModel.findByIdAndUpdate(userId, req.body)
        return res.status(200).send(result)
    } catch(err){
        res.status(400).send(err)
    }
}

// addBaza

async function addBaza(req, res){
    try{
        let userId = req.params.id
        let client = await CilientModel.findOne({_id:userId})
        client.texnikBaza.push(req.body)
        await client.save()
        return res.status(200).send("Qo'shildi")
    } catch(err){
        res.status(400).send(err)
    }
}

// delete

async function deleteCilient(req, res){
    try{
        let userId = req.params.id
        let result = await CilientModel.findByIdAndRemove(userId)
        return res.status(200).send(result)
    } catch(err){
        res.status(400).send(err)
    }
}

module.exports = {
    getCilient,
    addBaza,
    addCilient,
    updateCilient,
    deleteCilient
}