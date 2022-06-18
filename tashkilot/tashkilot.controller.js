const TashkilotModel = require("./tashkilot.model");

// get

async function getTashkilot(req, res) {
  try {
    const user = await TashkilotModel.find({});
    return res.status(200).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
}

// post

async function addTashkilot(req, res) {
  try {
    const user = await TashkilotModel.create(req.body);
    return res.status(200).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
}

// update / put

async function updateTashkilot(req, res) {
  try {
    let userId = req.params.id;
    let result = await TashkilotModel.findByIdAndUpdate(userId, req.body);
    return res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
}

// delete

async function deleteTashkilot(req, res) {
  try {
    let userId = req.params.id;
    let result = await TashkilotModel.findByIdAndRemove(userId);
    return res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
}

module.exports = {
  getTashkilot,
  addTashkilot,
  updateTashkilot,
  deleteTashkilot,
};
