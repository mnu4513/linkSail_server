const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    mainUrl : {
        type: String, 
        required: true,
        trim: true, 
        unique: true
    }, 
    urlCode : {
        type: String, 
        required: true
    }, 
    shortUrl : {
        type: String, 
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model("Url", urlSchema);