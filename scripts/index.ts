

var express = require('express');
const app = express();
var authorRouter = require('./routers/author.router');
var uploaderRouter  =require('./routers/uploader.router');
let bodyParser = require('body-parser');

require('dotenv').config();
app.use(bodyParser.json());

let PORT = process.env.PORT || 5000;

require('./config/db');
require('./config/cloudinary');

app.use(authorRouter);
app.use(uploaderRouter);

app.listen(PORT,()=>{
    console.log(`App listening on ${PORT}`);
})
