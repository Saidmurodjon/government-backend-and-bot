const XisobotModel = require("./xisobot.model");

// get

async function getXisobot(req, res) {
  try {
    const user = await XisobotModel.find({});
    return res.status(200).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
}

// post

async function addXisobot(req, res) {
  try {
    const user = await XisobotModel.create(req.body);
    return res.status(200).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
}

// update / put

async function updateXisobot(req, res) {
  try {
    let userId = req.params.id;
    let result = await XisobotModel.findByIdAndUpdate(userId, req.body);
    return res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
}

// delete

async function deleteXisobot(req, res) {
  try {
    let userId = req.params.id;
    let result = await XisobotModel.findByIdAndRemove(userId);
    return res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
}

module.exports = {
  getXisobot,
  addXisobot,
  updateXisobot,
  deleteXisobot,
};
