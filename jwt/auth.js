const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
// const AdminModel = require('../admin/admin.model')
const TashkilotModel = require("../tashkilot/tashkilot.model");
const config = require("./config");
router.route("/").post(async (req, res) => {
  try {
    let tash = await TashkilotModel.findOne({
      login: req.body.login,
      parol: req.body.password,
    });
    if (tash) {
      const jwtToken = jwt.sign({ message: "tokencreated" }, config.secretKey, {
        expiresIn: config.expiresAt,
      });
      return res.status(200).json({
        jwt_token: jwtToken,
        message: tash,
      });
    } else {
      return res.status(402).json({
        jwt_token: "not found",
      });
    }
  } catch (err) {
    return res.status(402).send(err);
  }
});
module.exports = router;
