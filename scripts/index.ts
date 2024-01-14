

var express = require('express');
const app = express();
var authorRouter = require('./routers/author.router');
var uploaderRouter  =require('./routers/uploader.router');
var bookRouter = require('./routers/book.router');
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
app.use(bookRouter);

const imagesDir = 'images';
const booksDir = 'books';

if(!fs.existsSync(imagesDir)){
  console.log("Images directory created");
  fs.mkdirSync(imagesDir);
}
if(!fs.existsSync(booksDir)){
  console.log("Books directory created");
  fs.mkdirSync(booksDir);
}


app.listen(PORT,()=>{
    console.log(`App listening on ${PORT}`);
})
