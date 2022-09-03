const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/MyCoolDB")
.then((res)=>{
    console.log("successfully connected to the DB")
})
.catch((err)=> {
    console.log("There has been an error connecting to the db")
})