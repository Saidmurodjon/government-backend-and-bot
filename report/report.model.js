const mongoose = require("mongoose");

// product uchun

const reportSchema = mongoose.Schema({
  userName: String,
  userFish: String,
  userlav: String,
  services: [Object],
  cilientFish: String,
  cilientBolim: String,
  cilientKabinet: String,
  tasdiq: Boolean,
  chatID: String,
  fullFData: Date,
  chatID: String,
  countYear: Number,
  countMonth: Number,
});

const ReportModel = mongoose.model("ReportModel", reportSchema);

module.exports = ReportModel;
