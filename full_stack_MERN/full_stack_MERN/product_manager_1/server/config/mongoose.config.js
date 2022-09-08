const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/product")
.then(()=>{
    console.log("Successfully connected to the DB")
})
.catch((err)=>{
    console.log(`There was an error: ${err}`)
})