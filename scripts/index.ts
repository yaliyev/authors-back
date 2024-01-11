

var express = require('express');
const app = express();
var authorRouter = require('./routers/author.router');
let bodyParser = require('body-parser');

require('dotenv').config();
app.use(bodyParser.json());

let PORT = process.env.PORT || 5000;

require('./config/db');

app.use(authorRouter);

app.listen(PORT,()=>{
    console.log(`App listening on ${PORT}`);
})
