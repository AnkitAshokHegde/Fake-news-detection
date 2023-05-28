const mongoose = require('mongoose');

const newsdataSchema = new mongoose.Schema({
    newsId: String,
    newsTitle: String,
    newsContent: String,
    status: Number,

});

module.exports = mongoose.model('news', newsdataSchema);