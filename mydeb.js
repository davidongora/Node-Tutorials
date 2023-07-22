var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Address_Book"
});

con.connect(function(err) {
//   if (err) throw err;
  console.log("Connected!");
  // con.query("CREATE DATABASE myd1b", function (err, result) {
  con.query("SELECT * FROM Address", function (err, result) {
    // if (err) throw err;
    console.log("Database created");
    console.log(result);
  });
});