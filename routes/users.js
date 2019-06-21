var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource sss");
});

router.post("/register", function(req, res, next) {
  // console.log(req.body);
  res.send("register user function");
  console.log("register user function");
});
module.exports = router;
