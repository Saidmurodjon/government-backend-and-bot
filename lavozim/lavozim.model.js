const mongoose = require("mongoose");

const lavozimSchema = mongoose.Schema({
  name: String,
  tashkilot_id: String,
  date: Date,
});

const LavozimModel = mongoose.model("LavozimModel", lavozimSchema);

module.exports = LavozimModel;
