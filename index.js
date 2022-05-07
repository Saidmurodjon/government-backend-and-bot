const express = require("express");
const app = express();
const mongoose = require("mongoose");
const appRouter = require("./router");
const cors = require("cors");
const { MONGODB } = require("./config");
app.use(express.json());
app.use(cors());

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

app.use("/", appRouter);

app.listen(5000, () => {
  console.log("5000 port ishga tushdi");
});
