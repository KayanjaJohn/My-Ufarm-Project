const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const registerSchema = new mongoose.Schema({
userName:{
    type: String,
    require: true
},
lastName:{
    type: String,
    require: true
},
uniqueNumber:{
    type: String,
    require: true,
    trim: true
},
regDate:{
    type:Date,
    require: true,
    trim: true
},

ninNumber:{
    type: String,
    require: true,
    trim: true
},
password:{
    type: String,
    require: true,
    trim: true
},
birthDay:{
    type: String,
    require: true,
    trim: true
},
phoneNumber:{
    type: String,
    require: true,
    trim: true
},
activities:{
    type: String,
    require: true,
    trim: true
},
restype:{
    type: String,
    require: true,
    trim: true
},
pOstay:{
    type: String,
    require: true,
    trim: true
},
wardName:{
    type: String,
    require: true,
    trim: true
},
Role:{
    type: String,
    require: true,
    trim: true
},
sex:{
    type:String,
    require: true,
}

});
registerSchema.plugin(passportLocalMongoose,{
   usernameField:'uniqueNumber' 
})

module.exports = mongoose.model('Registration', registerSchema);