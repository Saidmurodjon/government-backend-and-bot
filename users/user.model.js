const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  tash: String,
  lavozim: String,
  fish: String,
  ismi: String,
  tel: String,
  parol: String,
  tashkilot_id: String,
  date: Date,
});

const UserModel = mongoose.model("UserModel", usersSchema);

module.exports = UserModel;
