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


//Testing page 
router.get("/test", (req, res) => {
	res.render("Testing");
});

//Testing page 
router.get("/copy2", (req, res) => {
	res.render("copy2");
});

//Image Not found page
router.get("/noImage", (req, res) => {
	res.render("Image Not found");
});

//No access to AO dashboard
router.get("/aoOnly", (req, res) => {
	res.render("NoAccessAoD");
});

//No access to FO dashboard
router.get("/foOnly", (req, res) => {
	res.render("NoAccessFoD");
});

//No access to UF dashboard
router.get("/ufOnly", (req, res) => {
	res.render("NoAccessUfD");
});

//About page
router.get("/about", (req, res) => {
	res.render("About");
});

//Help page
router.get("/help", (req, res) => {
	res.render("Help");
});

//Landing Page Route
router.get('/land', (req, res) => {
    res.render('landing-page');
});

//PRODUCTS ROUTES
// ********Customer Products**********************************************************************************
// router.get("/products",  async (req, res) => {
// 	res.render("product");
// });


//************Projects*************/

// router.get("/dairy", (req, res) => {
// 	res.render("Dairy");
// });

// router.get("/horticulture", (req, res) => {
// 	res.render("Horticulture");
// });

// router.get("/poultry", (req, res) => {
// 	res.render("Poultry");
// });

//career page
router.get('/carAccess', (req,res) =>{
    res.render('career');
});

//***Admin Reg */
router.get('/adminDash', (req, res) => {
    res.render('adminReg');
});
//AO Dasboard
router.get('/aOdashboard', connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
    req.session.user = req.body;
	if (req.user.role == "Agricultural Officer") {
    res.render('aODashboard');
} else {
    res.redirect('/aoOnly');
}
});

//FO Dasboard

router.get("/fOdashboard", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
    req.session.user = req.body;
	if (req.user.role == "Farmer One") {
		res.render("foDashboard");
	} else {
		res.redirect("/foOnly");
	}
});

//Urban farmer Dasboard

router.get("/uFdashboard", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
    req.session.user = req.body;
	if (req.user.role == "Urban Farmer") {
		res.render("uFDashboard");
	} else {
		res.redirect("/ufOnly");
	}
});


// Export this file in the server file, for it to be read(executed)
module.exports = router;