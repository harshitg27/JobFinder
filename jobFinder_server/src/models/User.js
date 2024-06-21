const mongoose = require('mongoose')

// schema of users(name , email  , password)
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true
    },
    email: {
        type: String, // regex to parse for validate email
        required : true,
        unique: true ,
        lowercase : true
    },
    mobileNum:{
        type: Number,
        unique: true ,
        required : true
    },
    password: {
        type: String,
        required:true
    }
})

module.exports = mongoose.model('User' , userSchema) ;