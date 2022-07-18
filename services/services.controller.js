const ServicesModel = require('./services.model')


// get

async function getServices(req, res) {
    try {
    const tashkilot_id = req.headers["tashkilot_id"];
        const servic = await ServicesModel.find({tashkilot_id:tashkilot_id})
        return res.status(200).send(servic)
    } catch (err) {
        res.status(400).send(err)
    }
}

// post 

async function addServices(req, res) {
    try {
        let service = await ServicesModel.findOne({category:req.body.category})
        if(service){
            service.type.push(req.body.type)
            await service.save()
            return res.status(200).send("Ma'lumot qo'shildi")
        }
        let newService = await ServicesModel.create(req.body)
        return res.status(200).send(newService)
    } catch (err) {
        console.log(err)
        res.status(400).send(err)
    }
}


// delete

async function deleteServices(req, res){
    try{
        let id = req.params.id
        let servic = await ServicesModel.findOne({_id:id})
        if(servic && req.body.type){
            let index = servic.type.findIndex((elem)=> elem == req.body.type)
            servic.type.splice(index,1)
            await servic.save()
            return res.status(200).send("Malu'mot o'chirildi")
        }

        if(servic && !req.body.type){
            await ServicesModel.findByIdAndRemove(id)
            return res.status(200).send("Malu'mot o'chirildi")
        }
        return res.status(200).send("bu ma'lumot mavjud emas")
    } catch(err){
        res.status(400).send(err)
    }
}

module.exports = {
    getServices,
    addServices,
    deleteServices
}