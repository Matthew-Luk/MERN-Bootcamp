const express = require('express')
const app = express()
app.use(express.json())
const port = 8000

//Config
require("./config/mongoose.config")


//Routes
require("./routes/movie.routes")(app)

app.listen(port,()=>{console.log(`Listening on port: ${port}`)})