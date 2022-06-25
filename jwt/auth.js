const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
// const AdminModel = require('../admin/admin.model')
// const TeacherModel = require('../teachers/teacher.model')
const config = require("./config");
router.route("/").post(async (req, res) => {
  try {
    // let teacher = await TeacherModel.findOne({
    //   login: req.body.login,
    //   password: req.body.password,
    // });
    // let admin = await AdminModel.findOne({
    //   login: req.body.login,
    //   password: req.body.password,
    //   role: "admin",
    // });
    // if(teacher){
    //         const  jwtToken= jwt.sign(
    //             {message:"tokencreated"},
    //             config.secretKey,
    //             {expiresIn:config.expiresAt}

    //             )
    //             return res.status(200).json({
    //                 jwt_token:jwtToken,
    //                 type:"user"
    //             })
    //         }else if(admin){
    //             const  jwtToken= jwt.sign(
    //                 {message:"tokencreated"},
    //                 config.secretKey,
    //                 {expiresIn:config.expiresAt}

    //         )
    //         return res.status(200).json({
    //             jwt_token:jwtToken,
    //             type:"admin"
    //         })
    // }else
    if ((req.body.login = "admin" && req.body.password == "admin")) {
      const jwtToken = jwt.sign({ message: "tokencreated" }, config.secretKey, {
        expiresIn: config.expiresAt,
      });
      return res.status(200).json({
        jwt_token: jwtToken,
        type: "admin",
      });
    } else {
      return res.status(402).json({
        jwt_token: "hato login",
      });
    }
  } catch (err) {
    return res.status(402).send(err);
  }
});
module.exports = router;
