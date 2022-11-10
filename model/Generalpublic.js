const mongoose = require('mongoose');
const gpublicSchema = new mongoose.Schema({
userName:{
    type: String,
},
lastName:{
    type: String,
},
phoneNumber:{
    type: String,
    trim: true
},
role:{
    type: String,
    trim: true
},

email:{
    type: String,
    trim: true
},
sex:{
    type:String
},
direction:{
    type:String,
    trim:true
}

});

module.exports = mongoose.model('GPRegistration', gpublicSchema);