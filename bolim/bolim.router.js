const express = require("express");
const router = express.Router();
const bolimController = require("./bolim.controller");

// get

router.route("/").get(bolimController.getBolim);

// post

router.route("/").post(bolimController.addBolim);

// put

router.route("/:id").put(bolimController.updateBolim);

// delete

router.route("/:id").delete(bolimController.deleteBolim);

module.exports = router;
