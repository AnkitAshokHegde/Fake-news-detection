const mongoose = require("mongoose");

var Schema = mongoose.Schema, 

ObjectId = Schema.ObjectId;

const newsSchema = new mongoose.Schema({
    // _id:ObjectId,
    newsTitle:String,
    newsContent:String,
    newsStatus:Number    
});

module.exports = mongoose.model("news", newsSchema);