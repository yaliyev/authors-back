

var express = require('express');
const app = express();
var authorRouter = require('./routers/author.router');
var uploaderRouter  =require('./routers/uploader.router');
let bodyParser = require('body-parser');
var fs = require('fs');
require('dotenv').config();
app.use(bodyParser.json());
var cors = require('cors');

let PORT = process.env.PORT || 5000;

require('./config/db');
require('./config/cloudinary');

app.use(cors());
app.use(authorRouter);
app.use(uploaderRouter);

const imagesDir = 'images';
if(!fs.existsSync(imagesDir)){
  console.log("Images directory created");
  fs.mkdirSync(imagesDir);
}

app.listen(PORT,()=>{
    console.log(`App listening on ${PORT}`);
})
