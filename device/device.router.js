const express = require("express");
const router = express.Router();
const deviceController = require("./device.controller");

// get

router.route("/").get(deviceController.getDevice);

// post

router.route("/").post(deviceController.addDevice);

// put

router.route("/:id").put(deviceController.updateDevice);

// delete

router.route("/:id").delete(deviceController.deleteDevice);

module.exports = router;
