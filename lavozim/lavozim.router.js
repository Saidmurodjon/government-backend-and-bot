const express = require("express");
const router = express.Router();
const lavozimController = require("./lavozim.controller");

// get

router.route("/").get(lavozimController.getLavozim);

// post

router.route("/").post(lavozimController.addLavozim);

// put

router.route("/:id").put(lavozimController.updateLavozim);

// delete

router.route("/:id").delete(lavozimController.deleteLavozim);

module.exports = router;
