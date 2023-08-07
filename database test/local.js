
const express = require('express');
const app = express();
require('dotenv').config();
const router = require('./Routes/adminRoutes');


// const PORT = 3030;
app.listen(3030, () => {
    console.log(`Server is running on http://localhost:3030/data`);
});

app.use('/routes', router);
