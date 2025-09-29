const mongoose = require('mongoose');
const schama = mongoose.Schema;

const shorturlSchema = new schama({
    fullurl:{
        type:String,
        required:true
    },
    shorturl:{
        type:String,
        required:true,
        unique:true
    },
   visitehistory:[{timestamps:{type:Number,default:Date.now}}]
},{timestamps:true});

const ShortUrl = mongoose.model('ShortUrl',shorturlSchema);
module.exports = ShortUrl;