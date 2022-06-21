const express = require("express");
const router = express.Router();
const ishController = require("./ish.controller");

// get

router.route("/").get(ishController.getIsh);

// post

router.route("/").post(ishController.addIsh);

// put

router.route("/:id").put(ishController.updateIsh);

// delete

router.route("/:id").delete(ishController.deleteIsh);

module.exports = router;
