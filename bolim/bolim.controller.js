const BolimModel = require("./bolim.model");

// get

async function getBolim(req, res) {
  try {
    const user = await BolimModel.find({});
    return res.status(200).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
}

// post

async function addBolim(req, res) {
  try {
    const user = await BolimModel.create(req.body);
    return res.status(200).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
}

// update / put

async function updateBolim(req, res) {
  try {
    let userId = req.params.id;
    let result = await BolimModel.findByIdAndUpdate(userId, req.body);
    return res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
}

// delete

async function deleteBolim(req, res) {
  try {
    let userId = req.params.id;
    let result = await BolimModel.findByIdAndRemove(userId);
    return res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
}

module.exports = {
  getBolim,
  addBolim,
  updateBolim,
  deleteBolim,
};
