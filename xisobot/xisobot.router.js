const express = require("express");
const router = express.Router();
const xisobotController = require("./xisobot.controller");

// get

router.route("/").get(xisobotController.getXisobot);

// post

router.route("/").post(xisobotController.addXisobot);

// put

router.route("/:id").put(xisobotController.updateXisobot);

// delete

router.route("/:id").delete(xisobotController.deleteXisobot);

module.exports = router;
