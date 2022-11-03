const express = require("express");
const router = express.Router();
const passport = require("passport");


router.get("/gplogin", (req, res) => {
	res.render("gplogin");
});

router.post("/gplogin", passport.authenticate("local", { failureRedirect: "/gplogin" }),  (req, res) => {
    req.session.user = req.user;
    console.log("This is the current user",   req.session.user);
    console.log(req.body);                                     
    if (req.user.role == 'General Public') {
        res.redirect("/products");
    } else {
      res.send('Sorry either your session has expired or you are not a registered user.')
    }
    });

module.exports = router;
