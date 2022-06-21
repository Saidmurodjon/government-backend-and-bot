const mongoose = require("mongoose");

const ishSchema = mongoose.Schema({
  name: String,
  date: Date,
});

const IshModel = mongoose.model("IshModel", ishSchema);

module.exports = IshModel;
