const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, () => {
    console.log("Mongoose connected");
})
let UserSchema = require('./models/user.model');

app.use(bodyParser.json());

app.get("/poc/api/user", (req, res) => {
    res.send("Server says hi!!");
})

app.post("/poc/api/user", (req, res) => {
    let body = req.body;
    let user = new UserSchema(body);
    user.save();
    res.json({user});
})

app.listen(3000, () => {
    console.log("Server up on 3000");
})