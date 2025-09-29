const express = require('express');
const router = express.Router();
const ShortUrl = require('../models/shorturl');

const {handleGenerateShortUrl, handelgetredirect} = require('../controllers/url');


router
     .route('/')
     .post(handleGenerateShortUrl)
     .get(handelgetredirect)



module.exports = router;