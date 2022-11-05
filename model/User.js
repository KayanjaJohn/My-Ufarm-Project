const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const registerSchema = new mongoose.Schema({
userName:{
    type: String,
},
lastName:{
    type: String,
},
uniqueNumber:{
    type: String,
    require: true,
    trim: true
},
regDate:{
    type:Date,
    trim: true
},
ninNumber:{
    type: String,
    trim: true
},
birthDay:{
    type: String,
    trim: true
},
phoneNumber:{
    type: String,
    require: true,
    trim: true
},
activities:{
    type: String,

    trim: true
},
restype:{
    type: String,
    trim: true
},
pOstay:{
    type: String,
    trim: true
},
wardName:{
    type: String,
    trim: true
},
role:{
    type: String,
    trim: true
},

email:{
    type: String,
    unique: true,
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
registerSchema.plugin(passportLocalMongoose,{
   usernameField: 'uniqueNumber' 
});

module.exports = mongoose.model('Registration', registerSchema);