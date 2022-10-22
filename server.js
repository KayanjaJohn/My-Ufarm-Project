// DEPENDENCIES
const express = require('express');
const path = require('path');
const app = express();
const config = require('./config/db')
const passport = require('passport');
const mongoose = require('mongoose');

// defining expressSession
const expressSession = require("express-session")({
	secret: "secret",
	resave: false,
	saveUninitialized: false,
});


// importing user model
const forUser =require("./model/User");

// ******* Importing routes *******
const Registration = require("./routes/registerRoutes");
const pUpload = require('./routes/ufUploads')


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

// CONFIGURATIONS
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.set('views','views');



//******* MIDDLEWARE************
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public/css', express.static(__dirname + '/public/css'));
app.use('/public/uploads', express.static(__dirname + '/public/uploads'));
app.use(expressSession);

// app.use((req, res, next) => {
//   console.log("A new request received at " + Date.now());
//   next();  
// });

  // Simple request time logger
  // app.use('/about',(req, res, next) => {
  //   console.log("A new request received at " + Date.now());
  
    // This function call tells that more processing is
    // required for the current request and is in the next middleware
    // function/route handler.
  //   next();  
  // });

  // To parse URL encoded data
app.use(express.urlencoded({ extended: false }));
app.use( "/",Registration);
app.use("/" ,forUser);
app.use('/', pUpload);

// ROUTES
app.get('/home', (req,res) =>{
  res.render('homepage');
})


  // For invalid routes. always  be the last in the server file (index.js)
  app.get('*', (req, res) => { 
    res.send('404! This is an invalid URL.');
  });

  app.listen(3000, () => console.log('listening on port 3000'));
 
