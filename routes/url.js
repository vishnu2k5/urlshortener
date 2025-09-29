const express = require('express');
// enable mergeParams so params from the parent route (e.g. :shortUrl)
// are available inside this router (req.params.shortUrl)
const router = express.Router({ mergeParams: true });
const ShortUrl = require('../models/shorturl');

const {handleGenerateShortUrl, handelgetredirect} = require('../controllers/url');


router
     .route('/')
     .post(handleGenerateShortUrl)
     .get(handelgetredirect)



module.exports = router;