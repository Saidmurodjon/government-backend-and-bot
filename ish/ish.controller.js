const IshModel = require("./ish.model");

// get

async function getIsh(req, res) {
  try {
    const user = await IshModel.find({});
    return res.status(200).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
}

// post

async function addIsh(req, res) {
  try {
    const user = await IshModel.create(req.body);
    return res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
}

// update / put

async function updateIsh(req, res) {
  try {
    let userId = req.params.id;
    let result = await IshModel.findByIdAndUpdate(userId, req.body);
    return res.status(205).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
}

// delete

async function deleteIsh(req, res) {
  try {
    let userId = req.params.id;
    let result = await IshModel.findByIdAndRemove(userId);
    return res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
}

module.exports = {
  getIsh,
  addIsh,
  updateIsh,
  deleteIsh,
};
