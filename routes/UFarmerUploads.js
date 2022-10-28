const express = require("express");
const router = express.Router();
const multer = require("multer");
const connectEnsureLogin = require("connect-ensure-login");

// Importing Model
const UrbanFarmerProdUpload = require('../model/UrbanFarmerUpload');
const Registration = require('../model/User')

// image upload
var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/uploads");
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});

// instantiate variable upload to store multer functionality to upload image
var upload = multer({ storage: storage });

router.get("/prodUpload", async (req, res) => {
let urbanFarmerList = await Registration.find({role: 'Farmer One'})
	res.render("produceUpload", {urbanfarmers:urbanFarmerList});
});


router.post("/prodUpload", upload.single("prodImage"), async (req, res) => {
	console.log(req.body);
	try {
		const product = new UrbanFarmerProdUpload(req.body);
		product.prodImage = req.file.path;
		console.log("This is my produce", product);
		await product.save();
		res.redirect("/prodList");
	} catch (error) {
		res.status(400).send("Sorry image not saved");
		console.log(error);
	}
});

// router.get("/prodList", async (req, res) => {
// 	try {
// 		let produces = await UrbanFarmerProdUpload.find({role: 'urban Farmer'});
// 		res.render("produce-list", { product: produces });
// 	} catch (error) {
// 		res.status(400).send("Unable to get Produce list");
// 	}
// }); 

router.get("/prodList", async (req, res) => {
	const ufprodlist = await UrbanFarmerProdUpload.find({ role: "Urban Farmer" });
	console.log(ufprodlist);
	res.render("produce-list", { products: ufprodlist });
});

router.get("/prodList", async (req, res) => {
	try {
		let products = await Produce.find();
		res.render("produce-list", { products: products });
	} catch (error) {
		res.status(400).send("Unable to get Produce list");
	}
});

// router.get("/uploadproduce", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
// 	console.log("This is the Current User ", req.session.user);
// 	res.render("produce", { currentUser: req.session });
// });
// Updating Produce
router.get("/produce/update/:id", async (req, res) => {
	try {
		const updateProduct = await Produce.findOne({ _id: req.params.id });
		res.render("produce-update", { product: updateProduct });
	} catch (error) {
		res.status(400).send("Unable to update produce");
	}
});

// Return approved list
router.get("/approvedList", async (req, res) => {
	try {
		const updateProduct = await Produce.findOne({ _id: req.params.id });
		res.render("approvedlist", { goods: updateProduct });
	} catch (error) {
		res.status(400).send("Unable to update produce");
	}
});

router.post("/produce/update", async (req, res) => {
	try {
		await Produce.findOneAndUpdate({ _id: req.query.id }, req.body);
		res.redirect("/producelist");
	} catch (error) {
		res.status(400).send("Unable to update produce");
	}
});

// Approve get and post Routes
router.get("/produce/approve/:id", async (req, res) => {
	try {
		const approveProduct = await Produce.findOne({ _id: req.params.id });
		res.render("approve", { product: updateProduct });
		console.log('Product approved',updateProduct)
	} catch (error) {
		res.status(400).send("Unable to approve produce");
	}
});

router.post("/produce/approve", async (req, res) => {
	try {
		await Produce.findOneAndUpdate({ _id: req.query.id }, req.body);
		res.redirect("/producelist");
	} catch (error) {
		res.status(400).send("Unable to update produce");
	}
});

//Available get and post Routes
router.get("/produce/available/:id", async (req, res) => {
	try {
		const sellProduce = await Produce.findOne({ _id: req.params.id });
		res.render("approvedlis", { item: updateProduct });
		console.log('Product approved',sellProduce)
	} catch (error) {
		res.status(400).send("Unable to find produce");
	}
});

router.post("/produce/available", async (req, res) => {
	try {
		await Produce.findOneAndUpdate({ _id: req.query.id }, req.body);
		res.redirect("/producelist");
	} catch (error) {
		res.status(400).send("Unable to find produce");
	}
});

module.exports = router;
