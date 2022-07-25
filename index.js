const { Telegraf } = require("telegraf");
const Controllers = require("./telegram-bot/controllers");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const appRouter = require("./router");
const cors = require("cors");
const { MONGODB, TOKEN, BaseURL, PORT } = require("./config");
app.use(express.json());
app.use(cors());
// console.log(PORT);
const connectionParams = {
  useNewUrlParser: true,

  useUnifiedTopology: true,
};
mongoose
  .connect(MONGODB, connectionParams)
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });
// bot uchun
  const bot = new Telegraf(TOKEN);
  app.use(bot.webhookCallback("/"));
  bot.telegram.setWebhook(BaseURL);
app.use("/", appRouter);


app.listen(PORT, () => {
  console.log(`${PORT}'s port is working`);
});
// bot uchun
async function Main() {
  await bot.on(
    "message",
    (ctx) => 
    Controllers.MessageController(ctx)
    // console.log(ctx)
  );
  await bot.on(
    "callback_query",
    (ctx) => Controllers.InlineController(ctx)
    // console.log(ctx)
  );
}
Main();