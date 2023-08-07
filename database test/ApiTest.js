const mysql = require('mysql');
const express = require("express");
const app = express();

const con = mysql.createConnection({
    hostname: 'localhost',
    user: 'root',
    password: '',
    database: 'Address_Book',
});

const shops = (req, res) => {
    const query = 'SELECT * FROM Address';
    con.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Error fetching data' });
        } else {
            console.log(results);
            res.json(results);
        }
    });
};

app.get('/data', shops);

// const PORT = 3000;
app.listen(3030, () => {
    console.log(`Server is running on http://localhost:3030`);
});
