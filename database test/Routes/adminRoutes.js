const express = require('express');
const router = express.Router();
const importRoutes = require('../Controllers/adminController');


router.get('/town', importRoutes.town);
router.get('/country/:country', importRoutes.getShopsByCountry);
router.get('/data', importRoutes.shops);
router.get('/location', importRoutes.location);

module.exports = router;

//route with a separate page for users fetching data about users (usersroutes) route and controller page.json 