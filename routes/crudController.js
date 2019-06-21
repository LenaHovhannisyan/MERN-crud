var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var SqlString = require("sqlstring");

var myConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mern_crud"
});

myConnection.connect();

router.get("/view_record", function(req, res, next) {
  myConnection.query("select * from record", function(error, rows, fields) {
    if (error) throw error;
  });
});

//Saving Record
router.post("/add_record", function(req, res, next) {
  var name = req.body.Formdata.fullname;
  var email = req.body.Formdata.email;
  var password = req.body.Formdata.password;

  var inserData = {
    name: req.body.Formdata.fullname,
    email: req.body.Formdata.email,
    password: req.body.Formdata.password
  };

  var inserQuery = SqlString.format("INSERT INTO record SET ?", inserData);
  myConnection.query(inserQuery, function(err, result) {
    if (err) throw err;
    res.send("Record Successfully Inserted!");
  });
});

module.exports = router;
