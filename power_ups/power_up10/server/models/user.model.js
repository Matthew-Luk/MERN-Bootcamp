const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"You need a name"],
        minLength:[2,"Your name must be at least 2 characters."],
        maxLength:[4,"Your name must be a max of 4 characters."]
    },
    email:{
        type:String
    },
},
    {timestamps:true})

const User = mongoose.model("User", UserSchema)

module.exports = User