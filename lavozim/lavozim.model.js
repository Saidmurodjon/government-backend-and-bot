const mongoose = require("mongoose");

const lavozimSchema = mongoose.Schema({
  name: String,
  date: Date,
});

const LavozimModel = mongoose.model("LavozimModel", lavozimSchema);

module.exports = LavozimModel;
