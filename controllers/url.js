const short = require('../models/shorturl');
const {nanoid}= require('nanoid');
const handleGenerateShortUrl = async (req, res) => {
    const {fullUrl} = req.body;
    if(!fullUrl) {
        return res.status(400).json({error: ' URL is required'});
    }
    let shortUrl = nanoid(8);
    const shorturl =await short.create({fullurl:fullUrl, shorturl:shortUrl, visitehistory:[]});
    res.status(201).json({shorturl});
}


const handelgetredirect = async (req, res) => {
    const {shortUrl} = req.params;
    const shorturl = await short.findOne({shorturl:shortUrl});
    if(!shorturl) {
        return res.status(404).json({error: 'Short URL not found'});
    }
    const entry  = await short.findOneAndUpdate({shorturl:shortUrl}, {$push:{visitehistory:{timestamps:Date.now()}}});
    res.redirect(shorturl.fullurl);
};

module.exports = {handleGenerateShortUrl, handelgetredirect};