const Player = require('../models/player.model')

const PlayerController = {

    create:(req,res) => {
        Player.create(req.body)
        .then((player)=>{
            res.status(201).json({player:player})
        })
        .catch((err)=>{
            res.status(400).json({message:"Something went wrong",error:err})
        })
    },

    getAll:(req,res) => {
        Player.find()
        .then((allPlayers) => {
            res.json({players:allPlayers})
        })
        .catch((err)=>{
            res.status(400).json({message:"Something went wrong",error:err})
        })
    },

    getOne:(req,res) => {
        Player.find({_id:req.params.id})
        .then((player) => {
            res.json({player:player})
        })
        .catch((err)=>{
            res.status(400).json({message:"Something went wrong",error:err})
        })
    },

    update:(req,res) => {
        Player.updateOne({_id:req.params.id},req.body,{new:true})
        .then((player) => {
            res.json({updatedPlayer:player})
        })
        .catch((err)=>{
            res.status(400).json({message:"Something went wrong",error:err})
        })
    },

    deleteOne:(req,res) => {
        Player.findByIdAndDelete({_id:req.params.id})
        .then((player)=>{
            res.status(200).json({deletedPlayer:player})
        })
        .catch((err)=>{
            res.status(500).json({message:"Something went wrong",error:err})
        })
    },

    deleteAll:(req,res) => {
        Player.deleteMany({})
        .then((players)=>{
            res.status(200).json({deletedPlayers:players})
        })
        .catch((err)=>{
            res.status(500).json({message:"Something went wrong",error:err})
        })
    }
}

module.exports = PlayerController