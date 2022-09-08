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
            console.log(allProducts)
        })
        .then(res => res.json())
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