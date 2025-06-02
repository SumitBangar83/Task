const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email:{type:String,
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    verificationCode:{
        type:String
    },
    
},{timestamps:true})

module.exports = mongoose.model('User',UserSchema);