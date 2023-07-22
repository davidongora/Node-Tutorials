var mysql = require("mysql");
var con = mysql.createConnection({
    servername: "localhost",
    hostname: "root",
    password: "",
    Database: "Address"
});
con.connect(function(err){
    if(err) {
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection Established');
})
con.end(function(err) { 
});