const express = require("express");
const app = express();
const port = 8000;
const mongoose = require('mongoose')

app.use(express.json())

require("./config/mongoose.config.js")

require('./routes/user.routes')(app)

app.listen( port, () => console.log(`Listening on port: ${port}`) );