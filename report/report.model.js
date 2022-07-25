const mongoose = require("mongoose");

// product uchun

const reportSchema = mongoose.Schema({
  userName: String,
  userFish: String,
  userLavozim: String,
  services: [Object],
  cilientFish: String,
  cilientBolim: String,
  cilientKabinet: String,
  tasdiq: Boolean,
  chatID: String,
  state: String,
  countYear: Number,
  countMonth: Number,
  tashkilot_id: String,
  date: Date,
});

const ReportModel = mongoose.model("ReportModel", reportSchema);

module.exports = ReportModel;
