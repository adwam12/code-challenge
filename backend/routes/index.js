const express = require("express");
const router = express.Router();
const data = require("../data/sample.json");

const controller = require("../controller")

router.get("/data", controller.searchController);

router.route("/loanSearch/:id")
  .get(controller.searchController)


module.exports = router;
