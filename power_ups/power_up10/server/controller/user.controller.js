const User = require('../models/user.model')

const UserController = {

    // Create
    create:(req,res)=>{    
        User.create(req.body)
        .then((user)=>{
            res.json({user:user})
        })
        .catch((err)=>{
            res.json({message:"There has been an error",error:err})
        })},

    // Read
    getAll:(req, res) => {
        User.find({})
        .then((users)=>{
            res.json({users:users})
        })
        .catch((err)=>{
            res.json({message:"There has been an error",error:err})
        })},

    getOne:(req, res) => {
        User.find({_id:req.params.id})
        .then((user)=>{
            res.json({user:user})
        })
        .catch((err)=>{
            res.json({message:"There has been an error",error:err})
        })},

    // Update
    update:(req, res) => {
        User.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        .then((user)=>{
            res.json({updatedUser:user})
        })
        .catch((err)=>{
            res.json({message:"There has been an error",error:err})
        })},

    // Delete
    destroy:(req,res) => {
        User.findOneAndDelete(req.params.id)
        .then((user) => {
            res.json({deletedUser:user})
        })
        .catch((err) => {
            res.json({message:"There has been an error",error:err})
        })
    }
}

module.exports = UserController