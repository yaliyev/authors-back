

var express = require('express');
const app = express();

let bodyParser = require('body-parser');

require('dotenv').config();
app.use(bodyParser.json());

let PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`App listening on ${PORT}`);
})
