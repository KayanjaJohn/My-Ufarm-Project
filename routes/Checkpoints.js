const express = require('express');
const router = express.Router();


//Homepage Route
router.get('/home', (req, res) => {
    res.render('homepage');
});

//Landing Page Route
router.get('/land', (req, res) => {
    res.render('landing-page');
});

//PRODUCTS ROUTES
// ********Customer Products**********************************************************************************
router.get('/products', (req, res) => {
    // console.log("productsUpload")
    res.render("product");
});


//************Projects*************/

router.get("/diary", (req, res) => {
	res.render("Diary");
});

router.get("/horticulture", (req, res) => {
	res.render("Horticulture");
});

router.get("/poultry", (req, res) => {
	res.render("Poultry");
});

//career page
router.get('/carAccess', (req,res) =>{
    res.render('career');
});

//***Admin Reg */
router.get('/adminDash', (req, res) => {
    res.render('adminReg');
});
//AO Dasboard
router.get('/aOdashboard', (req, res) => {
    res.render('aODashboard');
});

//FO Dasboard
router.get('/fOdashboard', (req, res) => {
    res.render('foDashboard');
});



// Export this file in the server file, for it to be read(executed)
module.exports = router;