const mysql = require('mysql2');
const db = mysql.createPool({
    host:process.env.hostname,
    user:process.env.username,
    password:process.env.password,
    database:process.env.database,
    port:process.env.mysqlport,
    // ssl: {
    //   ca: fs.readFileSync("./DigiCertGlobalRootCA.crt.pem")
    // }
  }).promise();
module.exports = db;