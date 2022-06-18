const express = require("express");
const router = express.Router();
const tashkilotController = require("./tashkilot.controller");

// get

router.route("/").get(tashkilotController.getTashkilot);

// post

router.route("/").post(tashkilotController.addTashkilot);

// put

router.route("/:id").put(tashkilotController.updateTashkilot);

// delete

router.route("/:id").delete(tashkilotController.deleteTashkilot);

module.exports = router;
