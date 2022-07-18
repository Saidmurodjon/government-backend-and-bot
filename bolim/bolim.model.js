const mongoose = require("mongoose");

const bolimSchema = mongoose.Schema({
  name: String,
  date: Date,
  tashkilot_id: String,
});

const BolimModel = mongoose.model("BolimModel", bolimSchema);

module.exports = BolimModel;
