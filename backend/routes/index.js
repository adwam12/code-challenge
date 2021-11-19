const express = require("express");
const router = express.Router();
const data = require("../data/sample.json");
// const searchController = require('../controller/searchController.js')
const controller = require("../controller")

/* GET home page. */
// router.get("/", function(req, res, next) {
// 	res.render("index", {
// 		title: "Express"
// 	});
// });


// router.get("/data", function(req, res, next) {
// 	res.json(data);
//   print(data)
// })

router.get("/data", controller.searchController);


// router.route("/lopi")
//   .get(controller.search)

router.route("/loanSearch/:id")
  .get(controller.searchController)




module.exports = router;