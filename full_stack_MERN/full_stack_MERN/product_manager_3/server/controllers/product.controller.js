const Product = require('../models/product.model');

const ProductController = {

    create:(req,res) => {
        Product.create(req.body)
        .then((product)=>{
            res.status(201).json({product:product})
        })
        .catch((err)=>{
            res.status(400).json({message:"Something went wrong",error:err})
        })
    },

    getAll:(req,res) => {
        Product.find()
        .then((allProducts) => {
            res.json({products:allProducts})
        })
        .catch((err)=>{
            res.status(400).json({message:"Something went wrong",error:err})
        })
    },

    getOne:(req,res) => {
        Product.find({_id:req.params.id})
        .then((product) => {
            res.json({product:product})
        })
        .catch((err)=>{
            res.status(400).json({message:"Something went wrong",error:err})
        })
    },

    update:(req,res) => {
        Product.updateOne({_id:req.params.id},req.body,{new:true})
        .then((product) => {
            res.json({updatedProduct:product})
        })
        .catch((err)=>{
            res.status(400).json({message:"Something went wrong",error:err})
        })
    },

    deleteOne:(req,res) => {
        Product.findByIdAndDelete({_id:req.params.id})
        .then((products)=>{
            res.status(200).json({deletedProduct:products})
        })
        .catch((err)=>{
            res.status(500).json({message:"Something went wrong",error:err})
        })
    },

    deleteAll:(req,res) => {
        Product.deleteMany({})
        .then((products)=>{
            res.status(200).json({deletedProducts:products})
        })
        .catch((err)=>{
            res.status(500).json({message:"Something went wrong",error:err})
        })
    }
}

module.exports = ProductController