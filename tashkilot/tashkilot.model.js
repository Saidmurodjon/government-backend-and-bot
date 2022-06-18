const mongoose = require("mongoose");

const tashkilotSchema = mongoose.Schema({
  name: String,
  admin: String,
  login: String,
  parol: String,
  date: Date,
});

const TashkilotModel = mongoose.model("TashkilotModel", tashkilotSchema);

module.exports = TashkilotModel;
