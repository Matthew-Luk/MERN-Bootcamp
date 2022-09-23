const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"A name is required"],
        minLength:[2, "*Name must be at least 2 characters in length."]
    },
    position:{
        type:String,
    }
},{timestamps:true})


const Player = mongoose.model('Player',PlayerSchema)

module.exports = Player