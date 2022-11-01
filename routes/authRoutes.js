const express = require("express");
const router = express.Router();
const passport = require("passport");




router.get("/login", (req, res) => {
	res.render("login");
});

router.post("/login", passport.authenticate("local", { failureRedirect: "/login" }), (req, res) => {
    req.session.user = req.user;
    console.log("This is the current user",   req.session.user);                                      //Notice in effecting the login that the authentication routes file and and the individual dashboard routes work together and important are Line 13, 15, 17 that specify the role as it is in the name attribute of the role fields in the signup forms
    if (req.user.role == 'Agricultural Officer') {
          res.redirect("/aOdashboard");
    } else if (req.user.role == 'Farmer One') {
          res.redirect('/aOdashboard');
    } else if (req.user.role == 'Urban Farmer') {
          res.redirect('/aOdashboard');
    } else {
      res.send('Sorry either your session has expired or you are not a registered user.')
    }
    });
  
    
    
//    Logout route
router.post("/logout", (req, res) => {
    if(req.session){
        req.session.destroy(function(err){
            if(err){
                res.status(400).send('Unable to logout,Please check your Internet connection');
            } else{
                return res.redirect('/login');
            }
        })
    }
	
});

module.exports = router;
