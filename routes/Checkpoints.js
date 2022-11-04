const express = require('express');
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login");



//Homepage Route
router.get('/home', (req, res) => {
    res.render('homepage');
});

//Not found page
router.get("/notFound", (req, res) => {
	res.render("Not found");
});

//About page
router.get("/about", (req, res) => {
	res.render("About");
});

//Landing Page Route
router.get('/land', (req, res) => {
    res.render('landing-page');
});

//PRODUCTS ROUTES
// ********Customer Products**********************************************************************************
router.get("/products", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
    req.session.user = req.body;
	if (req.user.role == "General Public") {
		res.render("product");
	} else {
		res.send("This page is only accessed by the General Public");
	}
});


//************Projects*************/

router.get("/dairy", (req, res) => {
	res.render("Dairy");
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
    req.session.user = req.body;
	if (req.user.role == "Agricultural Officer") {
    res.render('aODashboard');
} else {
    res.send("This page is only accessed by the Agricultural Officer");
}
});

//FO Dasboard

router.get("/fOdashboard", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
    req.session.user = req.body;
	if (req.user.role == "Farmer One") {
		res.render("foDashboard");
	} else {
		res.send("This page is only accessed by farmer one");
	}
});

//Urban farmer Dasboard

router.get("/uFdashboard", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
    req.session.user = req.body;
	if (req.user.role == "Urban Farmer") {
		res.render("uFDashboard");
	} else {
		res.send("This page is only accessed by the Urban farmer");
	}
});


// Export this file in the server file, for it to be read(executed)
module.exports = router;