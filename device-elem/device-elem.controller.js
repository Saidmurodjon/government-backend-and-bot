const DeviceElemModel = require("./device-elem.model");

// get

async function getDeviceElem(req, res) {
  try {
    let deviceId = req.params.id;
    const device = await DeviceElemModel.find({ deviceId: deviceId });
    if (device.length > 0) {
      return res.status(200).send(device);
    } else {
      return res.status(404).send("not fund");
    }
  } catch (err) {
    res.status(400).send(err);
  }
}

// post

async function addDeviceElem(req, res) {
  try {
    const device = await DeviceElemModel.create(req.body);
    return res.status(200).send(device);
  } catch (err) {
    res.status(400).send(err);
  }
}

// update / put

async function updateDeviceElem(req, res) {
  try {
    let deviceId = req.params.id;
    let result = await DeviceElemModel.findByIdAndUpdate(deviceId, req.body);
    return res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
}

// delete

async function deleteDeviceElem(req, res) {
  try {
    let deviceId = req.params.id;
    let result = await DeviceElemModel.findByIdAndRemove(deviceId);
    return res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
}

module.exports = {
  getDeviceElem,
  addDeviceElem,
  updateDeviceElem,
  deleteDeviceElem,
};
