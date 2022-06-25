const express = require("express");
const router = express.Router();
// const path=require('path')

const auth=require('./jwt/auth')
const jwtVerify=require('./jwt/jwtVerify')
const userRouter = require("./users/user.router");
const cilientsRouter = require("./cilients/cilient.router");
const reportRouter = require("./report/report.router");
const serviceRouter = require("./services/services.router");
// new
const bolimRouter = require("./bolim/bolim.router");
const xonaRouter = require("./xona/xona.router");
const lavozimRouter=require("./lavozim/lavozim.router")
const xisobotRouter=require("./xisobot/xisobot.router")
const tashkilotRouter=require("./tashkilot/tashkilot.router")
const ishRouter=require("./ish/ish.router")
const deviceRouter=require("./device/device.router")
const deviceElemRouter=require("./device-elem/device-elem.router")
// router
router.use('/login',auth)
router.use(jwtVerify)
router.use("/cilient", cilientsRouter);
router.use("/report", reportRouter);
router.use("/user", userRouter);
router.use("/service", serviceRouter);
// new
router.use("/bolim", bolimRouter);
router.use("/xona", xonaRouter);
router.use("/lavozim", lavozimRouter);
router.use("/xisobot", xisobotRouter);
router.use("/tashkilot", tashkilotRouter);
router.use("/ish", ishRouter);
router.use("/device",deviceRouter)
router.use("/device/elem",deviceElemRouter)




module.exports = router;
