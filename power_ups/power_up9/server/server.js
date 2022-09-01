const express = require("express");
const app = express();
const port = 8000;
const mongoose = require("mongoose")
app.use(express.json())

mongoose.connect("mongodb://localhost/MyCoolDB")
.then((res)=>{
    console.log("successfully connected to the DB")
})
.catch((err)=> {
    console.log("There has been an error connecting to the db")
})


//model

const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
},
    {timestamps:true})

const User = mongoose.model("User", UserSchema)


// Create
app.post('/api/v1/users',(req,res)=>{    
    User.create(req.body)
    .then((user)=>{
        res.json({user:user})
    })
    .catch((err)=>{
        res.json({message:"There has been an error",error:err})
    })
})

// Read
app.get("/api/v1/users", (req, res) => {
    User.find({})
    .then((users)=>{
        res.json({users:users})
    })
    .catch((err)=>{
        res.json({message:"There has been an error",error:err})
    })
});

app.get("/api/v1/users/:id", (req, res) => {
    User.find({_id:req.params.id})
    .then((user)=>{
        res.json({user:user})
    })
    .catch((err)=>{
        res.json({message:"There has been an error",error:err})
    })
});

// Update
app.put("/api/v1/users/:id", (req, res) => {
    User.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
    .then((user)=>{
        res.json({updatedUser:user})
    })
    .catch((err)=>{
        res.json({message:"There has been an error",error:err})
    })
});

// Destroy
app.delete("/api/v1/users/:id",(req,res) => {
    User.findOneAndDelete(req.params.id)
    .then((user) => {
        res.json({deletedUser:user})
    })
    .catch((err) => {
        res.json({message:"There has been an error",error:err})
    })
})


app.listen( port, () => console.log(`Listening on port: ${port}`) );