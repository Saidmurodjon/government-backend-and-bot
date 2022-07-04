const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const TashkilotModel = require("../tashkilot/tashkilot.model");
const UserModel = require("../users/user.model");
const config = require("./config");
router.route("/").post(async (req, res) => {
  try {
    let tash = await TashkilotModel.findOne({
      login: req.body.login,
      parol: req.body.password,
    });
    let user = await UserModel.findOne({
      tel: req.body.tel,
      parol: req.body.password,
    });

    if (tash) {
      const jwtToken = jwt.sign(
        { message: "token created" },
        config.secretKey,
        {
          expiresIn: config.expiresAt,
        }
      );
      return res.status(200).json({
        jwt_token: jwtToken,
        message: tash,
      });
    } else if (user) {
      const jwtToken = jwt.sign(
        { message: "token created" },
        config.secretKey,
        {
          expiresIn: config.expiresAt,
        }
      );
      return res.status(200).json({
        jwt_token: jwtToken,
        user: user,
      });
    } else {
      return res.status(401).json({
        jwt_token: "Unauthorized",
      });
    }
  } catch (err) {
    return res.status(400).send(err);
  }
});
module.exports = router;
