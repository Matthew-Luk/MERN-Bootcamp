const Movie = require('../models/movie.model')

const MovieController = {
    test:(req,res) => {
        res.json({message: "Hello World"})
    },

    //Create
    create:(req,res) => {
        Movie.create(req.body)
        .then((movie)=>{
            res.status(201).json({movie:movie})
        })
        .catch((err)=>{
            res.status(400).json({message:"Something went wrong",error:err})
        })
    },

    //Read
    getOne:(req,res) => {
        Movie.find({_id:req.params.id})
        .then((movie)=>{
            res.status(200).json({movie:movie})
        })
        .catch((err)=>{
            res.status(500).json({message:"Something went wrong",error:err})
        })
    },

    getAll:(req,res) => {
        Movie.find({})
        .then((movies)=>{
            res.status(200).json({movies:movies})
        })
        .catch((err)=>{
            res.status(500).json({message:"Something went wrong",error:err})
        })
    },
    //Update
    updateOne:(req,res) => {
        Movie.findByIdAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
        .then((movie)=>{
            res.status(200).json({updatedMovie:movie})
        })
        .catch((err)=>{
            res.status(400).json({message:"Something went wrong",error:err})
        })
    },


    //Delete
    deleteOne:(req,res) => {
        Movie.findByIdAndDelete({_id:req.params.id})
        .then((movie)=>{
            res.status(200).json({deletedMovie:movie})
        })
        .catch((err)=>{
            res.status(500).json({message:"Something went wrong",error:err})
        })
    }
}

module.exports = MovieController