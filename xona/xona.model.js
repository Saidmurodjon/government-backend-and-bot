const mongoose = require("mongoose");

const xonaSchema = mongoose.Schema({
  name: String,
  date: Date,
});

const XonaModel = mongoose.model("XonaModel", xonaSchema);

module.exports = XonaModel;
