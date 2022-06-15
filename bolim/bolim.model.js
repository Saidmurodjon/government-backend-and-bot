const mongoose = require("mongoose");

const bolimSchema = mongoose.Schema({
  name: String,
  date: Date,
});

const BolimModel = mongoose.model("BolimModel", bolimSchema);

module.exports = BolimModel;
