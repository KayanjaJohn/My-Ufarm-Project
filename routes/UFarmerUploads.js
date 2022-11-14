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

router.get("/prodUpload", connectEnsureLogin.ensureLoggedIn(), async  (req, res) => {
	let urbanFarmerList = await Registration.find({role: 'Urban Farmer'})
	res.render("produceUpload", {urbanfarmers:urbanFarmerList});
});


router.post("/prodUpload", connectEnsureLogin.ensureLoggedIn(), upload.single("prodImage"), async (req, res) => {
	console.log(req.body);
	try {
		const product = new UrbanFarmerProdUpload(req.body);
		product.prodImage = req.file.path;
		console.log("This is my produce", product);
		await product.save();
		res.redirect("/prodList");
	} catch (error) {
		res.status(400).redirect("/noImage");
		console.log(error);
	}
});

  
//Produce list 

router.get("/prodList", async (req, res) => {
	try {
		const ufprodlist = await UrbanFarmerProdUpload.find({ role: "Urban Farmer" });
		console.log(ufprodlist);
		res.render("produce-list", { products: ufprodlist });
	} catch (error) {
	res.status(400).res.send('Unable to get product');	
	}
});

// Updating Produce
router.get("/produce/update/:id", async (req, res) => {
	try {
		const updateProduct = await UrbanFarmerProdUpload.findOne({ _id: req.params.id });
		res.render("produce-update", { products: updateProduct });
	} catch (error) {
		res.status(400).send("Unable to update produce");
	}
});

router.post("/produce/update", async (req, res) => {
	try {
		await UrbanFarmerProdUpload.findOneAndUpdate({ _id: req.query.id }, req.body);
		res.redirect("/prodList");
	} catch (error) {
		res.status(400).send("Unable to update produce");
	}
});

//Delete Product
router.post("/produce/delete", async (req, res) => {
	try {
		await UrbanFarmerProdUpload.deleteOne({ _id: req.body.id });
		res.redirect("back");
	} catch (error) {
		res.status(400).send("Sorry unable to delete product");
	}
});


// Return approved list
router.get("/approvedList", async (req, res) => {
	try {
		const prodOrder = {_id:-1}
		let approvedProducts = await UrbanFarmerProdUpload.find({ role: "Urban Farmer" }).sort(prodOrder);
		res.render("approvedlist", { approvedGoods:approvedProducts});
	} catch (error) {
		res.status(400).send("Unable to approve produce");
	}
});


// Approve get and post Routes
router.get("/produce/approve/:id", async (req, res) => {
	try {
	  const approveProduct = await UrbanFarmerProdUpload.findOne({_id: req.params.id});
	  res.render("approve", { products: approveProduct });
	  console.log('Product approved',approveProduct)
	} catch (error) {
		res.status(400).send("Unable to approve produce");
	}
});

router.post("/produce/approve", async (req, res) => {
	try {
	  await UrbanFarmerProdUpload.findOneAndUpdate({_id:req.query.id }, req.body);
	  res.redirect("/approvedList");
	} catch (error) {
		res.status(400).send("Unable to approve produce");
	}
});


// Return Dairy list
router.get("/dairy", async (req, res) => {
	try {
		let dairyProducts = await UrbanFarmerProdUpload.find({ role: "Urban Farmer" });
		res.render("Dairy", { dairyGoods:dairyProducts });
	} catch (error) {
		res.status(400).send("Unable to find produce");
	}
});

// Return Poultry list
router.get("/poultry", async (req, res) => {
	try {
		let poultryProducts = await UrbanFarmerProdUpload.find({ role: "Urban Farmer" });
		res.render("Poultry", { poultryGoods:poultryProducts });
	} catch (error) {
		res.status(400).send("Unable to find produce");
	}
});

// Return Horticulture list
router.get("/horticulture", async (req, res) => {
	try {
		let horticultureProducts = await UrbanFarmerProdUpload.find({ role: "Urban Farmer" });
		res.render("Horticulture", { horticultureGoods:horticultureProducts });
	} catch (error) {
		res.status(400).send("Unable to find produce");
	}
});

// Return availability list
router.get("/products", async (req, res) => {
	try {
		let availableProducts = await UrbanFarmerProdUpload.find({ role: "Urban Farmer" });
		res.render("product", { availableGoods:availableProducts });
	} catch (error) {
		res.status(400).send("Unable to find produce");
	}
});


//Available get and post Routes
router.get("/produce/available/:id", async (req, res) => {
	try {
		const sellProduce = await UrbanFarmerProdUpload.findOne({ _id: req.params.id });
		res.render("availability", { items: sellProduce });
		console.log('Product available',sellProduce)
	} catch (error) {
		res.status(400).send("Unable to find produce");
	}
});

router.post("/produce/available", async (req, res) => {
	try {
		await UrbanFarmerProdUpload.findOneAndUpdate({ _id: req.query.id }, req.body);
		res.redirect("approvedList");
	} catch (error) {
		res.status(400).send("Unable to find produce");
	}
});


//Ordering routes -----------/
// router.get('/produce/order/:id', async (req, res) =>{
// 	try {
// 		const saleProduct = await UrbanFarmerProdUpload.findOne({_id:req.params.id});
// 		res.render('order',{item:saleProduct});
// 		console.log('Ordered list', saleProduct)
// 	} catch (error) {
// 		res.status(400).send('Unable to order produce.');
// 	}
// });

// router.post('/produce/order', async (req,res) => {
// 	try {
// 	  await UrbanFarmerProdUpload.findOneAndUpdate({_id:req.query.id}, req.body);
// 	  res.redirect('/orders');
// 	} catch (error) {
// 	  res.status(400).send('Sorry order not successful.');
// 	}
//   });


//Order get and post Routes
router.get("/produce/order/:id", async (req, res) => {
	try {
		const ordering = await UrbanFarmerProdUpload.findOne({ _id: req.params.id });
		res.render("order", { order: ordering });
		console.log('Order product',ordering)
	} catch (error) {
		res.status(400).send("Can't order product");
	}
});

router.post("/produce/order", async (req, res) => {
	try {
		await UrbanFarmerProdUpload.findOneAndUpdate({ _id: req.query.id }, req.body);
		res.redirect("/product");
	} catch (error) {
		res.status(400).send("Unable to find produce");
	}
});

// Return Order list
router.get("/orders", async (req, res) => {
	try {
		let ordered = await UrbanFarmerProdUpload.find({ role: "Urban Farmer" });
		res.render("orderList", { orderedGoods:ordered });
	} catch (error) {
		res.status(400).send("No product booked yet!");
	}
});

module.exports = router;
