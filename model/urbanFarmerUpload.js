const mongoose = require('mongoose');
const prodUploadSchema = new mongoose.Schema({
SupplierName:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Registration',
    require: true
},

uniqueNumber:{
    type: String,
    require: true,
    trim: true
},

regDate:{
    type: Date,
    require: true,
    trim: true
},
prodCategory:{
    type:String,
    require: true,
},
prodName:{
    type:String,
    require: true,
    trim:true
},
prodImage:{
    type:String,
    require: true,
    trim:true
},
wardName:{
    type:String,
    require: true,
    trim:true
},
prodType:{
    type:String,
    require: true,
    trim:true
},
prodStock:{
    type:String,
    require: true,
    trim:true
},
prodQuantity:{
    type:Number,
    require: true,
    trim:true
},
paymentMode:{
    type:String,
    require: true,
    trim:true
},
deliveryMode:{
    type:String,
    require: true,
    trim:true
},
direction:{
    type:String,
    require: true,
    trim:true
},
price:{
    type:Number,
    require: true,
    trim:true
},
status:{
    type: String,
       default: 'Pending',
       enum: ['Pending', 'Approved']
  },
  
availability: {
    type: String, 
    default: "available",
    enum: ["available", "booked", "N/A"] 
}
})

module.exports = mongoose.model('UrbanFarmerProdUpload', prodUploadSchema);