const mongoose = require('mongoose');

// schema
const userSchema = new mongoose.Schema({
    fullName: String ,
    email: String ,
    password: String 
});

// model
const UserModel = mongoose.model('Users' , userSchema)

module.exports =  UserModel;
