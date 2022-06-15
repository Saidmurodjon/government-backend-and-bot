const XonaModel = require("./xona.model");

// get

async function getXona(req, res) {
  try {
    const user = await XonaModel.find({});
    return res.status(200).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
}

// post

async function addXona(req, res) {
  try {
    const user = await XonaModel.create(req.body);
    return res.status(200).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
}

// update / put

async function updateXona(req, res) {
  try {
    let userId = req.params.id;
    let result = await XonaModel.findByIdAndUpdate(userId, req.body);
    return res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
}

// delete

async function deleteXona(req, res) {
  try {
    let userId = req.params.id;
    let result = await XonaModel.findByIdAndRemove(userId);
    return res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
}

module.exports = {
  getXona,
  addXona,
  updateXona,
  deleteXona,
};
