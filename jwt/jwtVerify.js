const jwt = require("jsonwebtoken");
const config = require("./config");
module.exports = (req, res, next) => {
  let token = req.headers["jwt-token"];

  jwt.verify(token, config.secretKey, (err, a) => {
    if (err) {
      return res.status(401).send("Token eskirgan");
    }
    return next();
  });
};
