const express = require("express");
const router = express.Router();

const userRouter = require("./users/user.router");
const cilientsRouter = require("./cilients/cilient.router");
const reportRouter = require("./report/report.router");
const serviceRouter = require("./services/services.router");
const bolimRouter = require("./bolim/bolim.router");
const xonaRouter = require("./xona/xona.router");
const lavozimRouter=require("./lavozim/lavozim.router")
const xisobotRouter=require("./xisobot/xisobot.router")
const tashkilotRouter=require("./tashkilot/tashkilot.router")
// router
router.use("/cilient", cilientsRouter);
router.use("/report", reportRouter);
router.use("/user", userRouter);
router.use("/service", serviceRouter);
router.use("/bolim", bolimRouter);
router.use("/xona", xonaRouter);
router.use("/lavozim", lavozimRouter);
router.use("/xisobot", xisobotRouter);
router.use("/tashkilot", tashkilotRouter);



module.exports = router;
