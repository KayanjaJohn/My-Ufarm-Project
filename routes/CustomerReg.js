// const express = require('express');
// const router = express.Router();
// const passport = require("passport");


// const Registration =require('../model/User');
// //General PublicRegistration

// router.get("/GPReg", async (req, res) => {
//     res.render('generalPublicReg');
// });

// router.post('/GPReg', async (req, res) =>{
//     console.log(req.body);
//     try {
//         const gpEmail = new Registration(req.body);
//         let emailExist = await Registration.findOne({email:req.body.email});
//         if (emailExist) {
//             return res.status(400).send("Sorry this email is already taken");
// 		} else {
// 			await Registration.register(gpEmail, req.body.password, (error) => {
// 				if (error) {
// 					throw error;
// 				}
// 				res.redirect("/gplogin");
// 			});
// 		} 
        
//     } catch (error) {
//         res.status(400).send('Sorry, it seems there is trouble accessing this page');
//         console.log(error);
//     }
// });


// // Export this file in the server file, for it to be read(executed)
// module.exports = router;