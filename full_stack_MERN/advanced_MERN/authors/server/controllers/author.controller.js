const Author = require('../models/author.model')

const AuthorController = {

    create:(req,res) => {
        Author.create(req.body)
        .then((author)=>{
            res.status(201).json({author:author})
        })
        .catch((err)=>{
            res.status(400).json({message:"Something went wrong",error:err})
        })
    },

    getAll:(req,res) => {
        Author.find()
        .then((allAuthors) => {
            res.json({authors:allAuthors})
        })
        .catch((err)=>{
            res.status(400).json({message:"Something went wrong",error:err})
        })
    },

    getOne:(req,res) => {
        Author.find({_id:req.params.id})
        .then((author) => {
            res.json({author:author})
        })
        .catch((err)=>{
            res.status(400).json({message:"Something went wrong",error:err})
        })
    },

    update:(req,res) => {
        Author.updateOne({_id:req.params.id},req.body,{new:true})
        .then((author) => {
            res.json({updatedAuthor:author})
        })
        .catch((err)=>{
            res.status(400).json({message:"Something went wrong",error:err})
        })
    },

    deleteOne:(req,res) => {
        Author.findByIdAndDelete({_id:req.params.id})
        .then((author)=>{
            res.status(200).json({deletedAuthor:author})
        })
        .catch((err)=>{
            res.status(500).json({message:"Something went wrong",error:err})
        })
    },

    deleteAll:(req,res) => {
        Author.deleteMany({})
        .then((authors)=>{
            res.status(200).json({deletedAuthors:authors})
        })
        .catch((err)=>{
            res.status(500).json({message:"Something went wrong",error:err})
        })
    }
}

module.exports = AuthorController