require("dotenv").config();
const { env } = process;
module.exports = {
  MONGODB: env.MONGODB_URL,
  TOKEN: env.TOKEN,
  BaseURL:env.BaseURL,
  PORT:env.PORT

};
