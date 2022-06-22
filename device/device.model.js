const mongoose = require("mongoose");

const deviceSchema = mongoose.Schema({
  name: String,
  date: Date,
});

const DeviceModel = mongoose.model("DeviceModel", deviceSchema);

module.exports = DeviceModel;
