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
  date: Date,
  chatID: String,
  countYear: Number,
  countMonth: Number,
  xona:String
});

const ReportModel = mongoose.model("ReportModel", reportSchema);

module.exports = ReportModel;
