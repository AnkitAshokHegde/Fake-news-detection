const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
    newsTitle:String,
    newsContent:String,
    newsStatus:Number
    // newsStatus:String
});

module.exports = mongoose.model("news", newsSchema);