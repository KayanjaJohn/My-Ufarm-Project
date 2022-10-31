const express = require("express");
const router = express.Router();
const passport = require("passport");
// const connectEnsureLogin = require("connect-ensure-login");




router.get("/login", (req, res) => {
	res.render("login");
});

router.post('/login', passport.authenticate('local', {failureRedirect:'/login'}), (req,res)=>{
        req.session.user = req.user
        const user = req.session.user
        console.log(req.body);
            if(user.role == 'Agricultural Officer'){
                res.redirect('/home')
            }else if(user.role == 'Farmer One'){
                res.redirect('/home')
            }else if(user.role == 'Urban Farmer'){
                res.redirect('/home')
            } else{
                res.send('You are not a registered user')
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
