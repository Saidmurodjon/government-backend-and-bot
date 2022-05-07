require("dotenv").config();
const { env } = process;
module.exports = {
  MONGODB: env.MONGODB_URL,
  secretKey: "azizbek",
  expiresAt: 3600,
};
