const mongoose = require("mongoose");

const xisobotSchema = mongoose.Schema({
  name: String,
  tashkilot_id: String,
  t1: String,
  t2: String,
  t3: String,
  t4: String,
  t5: String,
  t6: String,
  t7: String,
  t8: String,
  t9: String,
  date: Date,
});

const XisobotModel = mongoose.model("XisobotModel", xisobotSchema);

module.exports = XisobotModel;
