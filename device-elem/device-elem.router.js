const express = require("express");
const router = express.Router();
const deviceElemController = require("./device-elem.controller");

// get

router.route("/:id").get(deviceElemController.getDeviceElem);

// post

router.route("/").post(deviceElemController.addDeviceElem);

// put

router.route("/:id").put(deviceElemController.updateDeviceElem);

// delete

router.route("/:id").delete(deviceElemController.deleteDeviceElem);

module.exports = router;
