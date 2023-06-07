const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
    newsTitle:String,
    newsContent:String,
    status:Number
});

module.exports = mongoose.model("news", newsSchema);