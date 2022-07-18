const DeviceModel = require("./device.model");

// get

async function getDevice(req, res) {
  try {
    const tashkilot_id = req.headers["tashkilot_id"];
    const device = await DeviceModel.find({ tashkilot_id: tashkilot_id });
    return res.status(200).send(device);
  } catch (err) {
    res.status(400).send(err);
  }
}

// post

async function addDevice(req, res) {
  try {
    const device = await DeviceModel.create(req.body);
    return res.status(200).send(device);
  } catch (err) {
    res.status(400).send(err);
  }
}

// update / put

async function updateDevice(req, res) {
  try {
    let deviceId = req.params.id;
    let result = await DeviceModel.findByIdAndUpdate(deviceId, req.body);
    return res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
}

// delete

async function deleteDevice(req, res) {
  try {
    let deviceId = req.params.id;
    let result = await DeviceModel.findByIdAndRemove(deviceId);
    return res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
}

module.exports = {
  getDevice,
  addDevice,
  updateDevice,
  deleteDevice,
};
