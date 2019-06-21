var express = require("express");
var router = express.Router();

// router.post("/save_record", function(req, res, next) {
//   //   console.log(req.body);
//   res.send("yessss");
// });
router.get("/view_record", function(req, res, next) {
  res.send("yeeeeeeeeeeeeeeeeeeeeee crud contoller hit");
});
module.exports = router;
