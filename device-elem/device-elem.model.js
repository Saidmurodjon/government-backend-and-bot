const mongoose = require("mongoose");

const deviceElemSchema = mongoose.Schema({
  name: String,
  deviceId: String,
  elem: [Object],
  date: Date,
});

const DeviceElemModel = mongoose.model("DeviceElemModel", deviceElemSchema);

module.exports = DeviceElemModel;
