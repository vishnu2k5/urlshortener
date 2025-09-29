const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3001;
const urlRoutes = require('./routes/url');
mongoose.connect('mongodb://localhost:27017/shorturl')
.then(()=>{console.log('Database connected')})
.catch((err)=>{console.log('Database connection error:', err)})


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/url', urlRoutes);
app.use('/api/:shortUrl', urlRoutes);

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})