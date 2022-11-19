const express = require('express');
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login");
const UrbanFarmerProdUpload = require('../model/UrbanFarmerUpload');
const Registration = require("../model/User");



router.get("/report", connectEnsureLogin.ensureLoggedIn(), async(req, res) => {
    req.session.user = req.user;
    if(req.user.role == 'Agricultural Officer'){
        try {
            let totalPoultry = await UrbanFarmerProdUpload.aggregate([
            { $match: { prodCategory: "Poultry" } },
            { $group: { _id: "$all", 
            totalQuantity: { $sum: "$prodQuantity" },
            totalCost: { $sum: { $multiply: [ "$price", "$prodQuantity" ] } },             
            }}
            ])

            let totalHort = await UrbanFarmerProdUpload.aggregate([
                { $match: { prodCategory: "Horticulture" } },
                { $group: { _id: "$all", 
                totalQuantity: { $sum: "$prodQuantity" },
                totalCost: { $sum: { $multiply: [ "$price", "$prodQuantity" ] } },            
                }}
            ])
			let totalDairy = await UrbanFarmerProdUpload.aggregate([
                { $match: { prodCategory: "Dairy" } },
                { $group: { _id: "$all", 
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
                { $match: { "$and":[{wardName:req.user.wardName}, {prodCategory: "Poultry"}]  } },
                { $group: { _id: "$all", 
                totalQuantity: { $sum: "$prodQuantity" },
                totalCost: { $sum: { $multiply: [ "$price", "$prodQuantity" ] } },            
                }}
            ])

            let totalHort = await UrbanFarmerProdUpload.aggregate([
                { $match: { "$and":[{wardName:req.user.wardName}, {prodCategory: "Horticulture"}]  } },
                { $group: { _id: "$all", 
                totalQuantity: { $sum: "$prodQuantity" },
                totalCost: { $sum: { $multiply: [ "$price", "$prodQuantity" ] } },            
                }}
            ])
			let totalDairy = await UrbanFarmerProdUpload.aggregate([
                { $match: { "$and":[{wardName:req.user.wardName}, {prodCategory: "Dairy"}]  } },               
                {$group: { _id: "$all", 
                totalQuantity: { $sum: "$prodQuantity" },
                totalCost: { $sum: { $multiply: [ "$price", "$prodQuantity" ] } },            
                }}
            ])
            
            console.log("Poultry collections", totalPoultry)
            console.log("Hort collections", totalHort)
            console.log("Dairy collections", totalDairy)

            res.render("foReport", { 
            title: 'Reports', 
            currentUser:req.session.user,
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

//Ufarm farmers report
// router.get("/report", connectEnsureLogin.ensureLoggedIn(), async(req, res) => {
//     req.session.user = req.user;
//     if(req.user.role == 'Agricultural Officer'){
//         try {
//             let allFarmerOnes = await Registration.aggregate({$match:{'role': 'Farmer One','_id': 
//             'wardName' } },{"$project":{"count":1,"percentage":{"$multiply":
//             [{"$divide":[100,allFarmerOnes]},"$count"]}}})

//             let allUrbanFarmers = await Registration.aggregate([
//                 { $match: { role: "Urban Farmer" } },
//                 { $group: { _id: "$wardName", 
//                 }}
//             ])
            
//             console.log("farmerone collections", allFarmerOnes)
//             console.log("Urban farmer collections", allUrbanFarmers)

//             res.render("aoReport", { 
//             title: 'Reports', 
//             // allfO:allFarmerOnes[1],
//             // allUf:allUrbanFarmers[1],
//             });
//         } catch (error) {
//             res.status(400).send("unable to find items in the database");
//         }
        
//     }else {
//         res.redirect("/aoOnly")
//     }
// });

// ********************************************************
// let totalPoultry = await Pdtupload.aggregate([
//     { $match: { "$and":[{ward:req.user.ward}, {productcategory: "Poultry"}]  } },
//     { $group: { _id: "$all", 
//     totalQuantity: { $sum: "$quantity" },
//       }}
//     ])

module.exports = router;