const express = require('express');
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login");
const UrbanFarmerProdUpload = require('../model/UrbanFarmerUpload');



router.get("/report", connectEnsureLogin.ensureLoggedIn(), async(req, res) => {
    req.session.user = req.user;
    if(req.user.role == 'Agricultural Officer'){
        try {
            let totalPoultry = await UrbanFarmerProdUpload.aggregate([
            { $match: { prodCategory: "Poultry" } },
            { $group: { _id: "$prodName", 
            totalQuantity: { $sum: "$prodQuantity" },
            totalCost: { $sum: { $multiply: [ "$price", "$prodQuantity" ] } },             
            }}
            ])

            let totalHort = await UrbanFarmerProdUpload.aggregate([
                { $match: { prodCategory: "Horticulture" } },
                { $group: { _id: "$prodName", 
                totalQuantity: { $sum: "$prodQuantity" },
                totalCost: { $sum: { $multiply: [ "$price", "$prodQuantity" ] } },            
                }}
            ])
			let totalDairy = await UrbanFarmerProdUpload.aggregate([
                { $match: { prodCategory: "Diary" } },
                { $group: { _id: "$prodName", 
                totalQuantity: { $sum: "$prodQuantity" },
                totalCost: { $sum: { $multiply: [ "$price", "$prodQuantity" ] } },            
                }}
            ])
            
            console.log("Poultry collections", totalPoultry)
            console.log("Hort collections", totalHort)
            console.log("Dairy collections", totalDairy)

            res.render("aoReport", { 
            title: 'Reports', 
            totalP:totalPoultry[0],
            totalH:totalHort[0],
            totalD:totalDairy[0],
            });
        } catch (error) {
            res.status(400).send("unable to find items in the database");
        }
        
    }else {
        res.redirect("/aoOnly")
    }
});

//Farmer One Report
router.get("/foReport", connectEnsureLogin.ensureLoggedIn(), async(req, res) => {
    req.session.user = req.user;
    if(req.user.role == 'Farmer One'){
        try {
            let totalPoultry = await UrbanFarmerProdUpload.aggregate([
            { $match: { prodCategory: "Poultry" } },
            { $group: { _id: "$prodName", 
            totalQuantity: { $sum: "$prodQuantity" },
            totalCost: { $sum: { $multiply: [ "$price", "$prodQuantity" ] } },             
            }}
            ])

            let totalHort = await UrbanFarmerProdUpload.aggregate([
                { $match: { prodCategory: "Horticulture" } },
                { $group: { _id: "$prodName", 
                totalQuantity: { $sum: "$prodQuantity" },
                totalCost: { $sum: { $multiply: [ "$price", "$prodQuantity" ] } },            
                }}
            ])
			let totalDairy = await UrbanFarmerProdUpload.aggregate([
                { $match: { prodCategory: "Diary" } },
                { $group: { _id: "$prodName", 
                totalQuantity: { $sum: "$prodQuantity" },
                totalCost: { $sum: { $multiply: [ "$price", "$prodQuantity" ] } },            
                }}
            ])
            
            console.log("Poultry collections", totalPoultry)
            console.log("Hort collections", totalHort)
            console.log("Dairy collections", totalDairy)

            res.render("foReport", { 
            title: 'Reports', 
            totalP:totalPoultry[0],
            totalH:totalHort[0],
            totalD:totalDairy[0],
            });
        } catch (error) {
            res.status(400).send("unable to find items in the database");
        }
        
    }else {
        res.redirect("/foOnly")
    }
});

module.exports = router;