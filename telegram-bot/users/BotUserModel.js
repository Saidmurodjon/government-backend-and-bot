const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  chatID: String,
  date: Date,
  phone:String,
  step:{
    type:Number,
    default:1
  }

});
const BotUserModel = mongoose.model("BotUserModel", UserSchema);
module.exports = BotUserModel;