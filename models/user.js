var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new mongoose.Schema({
        username: String,
        password: String,
        email:String,
        phone:String,
        first_name:String,
        last_name:String,
        gender:String,
    address_information:
        {
        address: String,
        province: String,
        district:String,
        postcode:String,
        }
    
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);