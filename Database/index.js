const express = require("express");
const mongoose = require("mongoose");

const app = express();

const ConnectDB = async()=>{
    mongoose.connect("mongodb://localhost:27017/News");
    const newsSchema = new mongoose.Schema({});
    const newsCollection = mongoose.model("news",newsSchema)
    const data = await newsCollection.find();
    console.log(data);
}

ConnectDB();
app.listen(5000);

