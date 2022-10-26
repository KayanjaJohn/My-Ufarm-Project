const express = require('express');
const router = express.Router();
// const connectEnsureLogin = require("connect-ensure-login");


// Importing Model
const Registering  = require("../model/User");

// ******Produce Upload**************************************************************************************
router.get('/prodUpload', (req,res) =>{
    res.render('produceUpload');
});



module.exports = router;