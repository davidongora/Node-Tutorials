const db = require('../Views/viewsdb');


const shops = async(req, res) => {
    try{
//     // const data = 'SELECT * FROM shops WHERE Country=?'; // where country
    // const data = 'SELECT * FROM shops WHERE country= kenya';
    const data = 'SELECT * FROM shops';
    const[rows]= await db.query(data,[req.query.country]);
    if (rows.length < 1){
        return res.json("No shops found");
    }
    res.json(rows);
}
catch(err){res.json(err.message)}
};

//specific route for country
const getShopsByCountry = async(req, res) => {
    try{
        // const country = req.params 
        // const coun = 'SELECT * FROM shops WHERE location LIKE `%k%`';
        const coun = 'SELECT * FROM shops WHERE country = ?'; 
        // const coun = 'SELECT * FROM shops WHERE country LIKE ?';
        //  `SELECT * FROM shops WHERE Country LIKE 'k%'`;
        // const[results]= await db.query(coun, ["kenya"]);
        const[rows]= await db.query(coun, [req.params.country]);
        // if (results.length < 1){
        //      return res.json("there is no such country")
        // }
        // res.json(req.query);
        // res.json(req.query.country);
        res.json(rows);
        // res.json(req.params);
    }
catch(err){res.json(err.message)}
};

const town = async (req, res)=> {
    try{
        const towns = 'SELECT * FROM shops WHERE town LIKE ?';
        const[rows] = await db.query(towns, ["%u"]); //ends with
        // const[rows] = await db.query(towns, ["k%"]); //stsrts with
        // const[rows] = await db.query(towns, ["kiambu"]); //particular town 
        if (rows.length < 1){
            return res.json("no such town")
        }
        res.json(rows)
    }
    catch(err){
        res.json(err.message);
    }
};

const location = async(req, res)=> {
    try{
        const loc = 'SELECT * FROM shops WHERE location LIKE ?';
        const[rows] = await db.query(loc, ["liverpool"]);
        if (rows > 1){
           return res.json("no such location");
        }
        res.json(rows);
    }
    catch(err){
        res.json(err.message);
    };
};


module.exports = {location,
town,
shops,
getShopsByCountry,
};
