const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const userSchema = new mongoose.Schema({
userName:{
    type: String,
    require: true
},
email:{
    type:String,
    require: true,
    trim: true
},

password:{
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
userSchema.plugin(passportLocalMongoose,{
   usernameField:'email' 
})

module.exports = mongoose.model('forUser', userSchema);