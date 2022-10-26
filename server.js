// DEPENDENCIES
const express = require('express');
const path = require('path');
const app = express();
const config = require('./config/db')
const passport = require('passport');
const mongoose = require('mongoose');
const multer = require("multer");
const connectEnsureLogin = require("connect-ensure-login");

// defining expressSession
const expressSession = require("express-session")({
	secret: "secret",
	resave: false,
	saveUninitialized: false,
});


// importing user model
const Registration =require("./model/User");
// const UfProdUploads =require("./model/UrbanFarmerUpload");

// ******* Importing routes *******
const registerRoutes = require("./routes/registerRoutes");
const authen = require('./routes/authRoutes');
const prodUpload = require("./routes/UFarmerUploads");
const checkP = require("./routes/Checkpoints");
const reportD = require("./routes/reports");

// Setting up db connections
mongoose.connect(config.database,{ useNewUrlParser: true });
const db = mongoose.connection;

// Check connection
db.once('open', function(){

console.log('Connected to MongoDB');
});
// Check for db errors
db.on('error', function(err){
  console.error(err);
});

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


// CONFIGURATIONS
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
// app.set('views','views');



//******* MIDDLEWARE************

  // To parse URL encoded data
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public/uploads', express.static(__dirname + '/public/uploads'));
app.use(expressSession);


// app.use((req, res, next) => {
//   console.log("A new request received at " + Date.now());
//   next();  
// });

 // Passport configuration middleware
app.use(passport.initialize());
app.use(passport.session());
passport.use(Registration.createStrategy());
passport.serializeUser(Registration.serializeUser());
passport.deserializeUser(Registration.deserializeUser());

    // This function call tells that more processing is
    // required for the current request and is in the next middleware
    // function/route handler.
  //   next();  
  // });

app.use( "/",registerRoutes);
// app.use("/" ,Registration);
app.use("/" ,authen);
app.use("/" ,prodUpload);
app.use("/" ,checkP);
app.use("/" ,reportD);


// ROUTES
app.get('/home', (req,res) =>{
  res.render('homepage');
})


  // For invalid routes. always  be the last in the server file (index.js)
  app.get('*', (req, res) => { 
    res.send('404! This is an invalid URL.');
  });

  app.listen(3100, () => console.log('listening on port 3100'));
 
