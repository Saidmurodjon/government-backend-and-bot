const express = require("express");
const router = express.Router();
const xonaController = require("./xona.controller");

// get

router.route("/").get(xonaController.getXona);

// post

router.route("/").post(xonaController.addXona);

// put

router.route("/:id").put(xonaController.updateXona);

// delete

router.route("/:id").delete(xonaController.deleteXona);

module.exports = router;
