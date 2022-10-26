const express = require('express');
const router = express.Router();

// Importing Model
const Registration = require("../model/User");

// FARMER REGISTRATION ROUTES.
router.get('/regAdmin', (req, res) => {
    res.render('adminReg');
});

//Farmer One Registration
router.get('/foReg', (req, res) => {
    res.render('FO-Register');
});

router.post('/foReg', async (req, res) =>{
    console.log(req.body);
    try {
        const user = new Registration(req.body);
        let uniqueExist = await Registration.findOne({uniqueNumber:req.body.uniqueNumber});
        let ninNumberExist = await Registration.findOne({ ninNumber: req.body.ninNumber });
        if (uniqueExist) {
            return res.status(400).send("Sorry this Number is already taken");
		} else if (ninNumberExist) {
            return res.status(400).send("Sorry this NIN Number is already taken");
		} else {
			await Registration.register(user, req.body.password, (error) => {
				if (error) {
					throw error;
				}
				res.redirect("/login");
			});
		}
        
    } catch (error) {
        res.status(400).send('Sorry, it seems there is trouble accessing this page');
        console.log(error);
    }
});

//Urban farmer Registration
router.get('/ufReg', (req, res) => {
    res.render('UfarmerReg');
});

router.post("/ufReg", async (req, res) => {
	const signup = new Registration(req.body);
	console.log(req.body);
	await Registration.register(signup, req.body.password, (err) => {
		if (err) {
			res.status(400).render("uFreg");
			console.log(err);
		} else {
			res.redirect("");
		}
	});
});







router.get("/FarmerOneList", async (req, res) => {
    try {
        let farmerones = await Registration.find({ role: "farmerOne" });
        res.render("FOList", {farmerones:farmerones});
    } catch (error) {
        res.status(400).send("Unable to find Farmer Ones in the Database");
		console.log(error);
    }
	
});

// Export this file in the server file, for it to be read(executed)
module.exports = router;