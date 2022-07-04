const UserModel = require("./user.model");

// get
async function getUser(req, res) {
  try {
    const user = await UserModel.find({});
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

async function addUser(req, res) {
  try {
    const user = await UserModel.create(req.body);
    return res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
}

// update / put

async function updateUser(req, res) {
  try {
    let userId = req.params.id;
    let result = await UserModel.findByIdAndUpdate(userId, req.body);
    return res.status(205).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
}

// delete

async function deleteUser(req, res) {
  try {
    let userId = req.params.id;
    let result = await UserModel.findByIdAndRemove(userId);
    return res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
}

async function chackUser(req, res) {
  try {
    let result = await UserModel.findOne({ parol: req.body.parol });
    if (result) {
      return res.status(200).send(result);
    }
    return res.status(401).send("ushbu foydalanuvchi mavjud emas");
  } catch (err) {
    res.status(400).send(err);
  }
}

module.exports = {
  getUser,
  addUser,
  updateUser,
  deleteUser,
  chackUser,
};
