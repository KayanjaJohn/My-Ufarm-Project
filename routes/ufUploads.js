const express = require('express');
const router = express.Router();

// Importing Model
const userSchema  = require("../model/User");

router.get('/plist', (req, res) => {
    res.render('product-list');
});

module.exports = router;