const XonaModel = require("./xona.model");

// get

async function getXona(req, res) {
  try {
    const user = await XonaModel.find({})
    if (user.length > 0) {
      return res.status(200).send(user);
    } else {
      return res.status(404).send(user);
    }
  } catch (err) {
    res.status(400).send(err);
  }
}

// post

async function addXona(req, res) {
  try {
    for (let i = 0; i < 100; i++) {
      const s ={
        name: i + 1 + "-xona",
        date: new Date(),
      }
      const user = await XonaModel.create(s);
      console.log(user);
    }
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
