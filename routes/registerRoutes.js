const express = require('express');
const router = express.Router();
const passport = require("passport");


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
            return res.status(400).send("Sorry this Unique Number is already taken");
		} else if (ninNumberExist) {
            return res.status(400).send("Sorry this NIN Number is already taken");
		} else {
			await Registration.register(user, req.body.uniqueNumber, (error) => {
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

router.get("/ufReg", async (req, res) => {
	try {
		let items = await Registration.find({ role: "Urban Farmer" });
		console.log(items);
		res.render("UfarmerReg", { urbanfarmers: items });
	} catch (error) {
		res.status(400).send("unable to find urban farmer in the data base");
		console.log(error);
	}
});

router.post("/ufReg", async (req, res) => {
	const signup = new Registration(req.body);
	console.log(req.body);
	await Registration.register(signup, req.body.uniqueNumber, (err) => {
		if (err) {
            res.status(400).render("UfarmerReg");
			console.log(err);
		} else {
			res.redirect("/ufList");
		}
	});
});







router.get("/FarmerOneList", async (req, res) => {
    try {
        let fOnez = await Registration.find({ role: "Farmer One" });
        res.render("FOList", {farmerones:fOnez});
    } catch (error) {
        res.status(400).send("Unable to find Farmer Ones in the Database");
		console.log(error);
    }
	
});

router.get("/ufList", async (req, res) => {
	try {
		let items = await Registration.find({ role: "Urban Farmer" });
		console.log(items);
		res.render("UFarmerList", { urbanfarmers: items });
	} catch (error) {
		res.status(400).send("unable to find urban farmer in the data base");
		console.log(error);
	}
})

// Export this file in the server file, for it to be read(executed)
module.exports = router; 