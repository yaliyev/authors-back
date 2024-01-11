var express = require('express');
var multer = require('multer');
var storage = require('../utils/uploadStorage');
var uploaderRouter = express.Router();

var uploaderController =  require('../controllers/uploader.controller');

// const upload = multer({ storage: multer.memoryStorage() });
const upload = multer({storage});


uploaderRouter.post('/uploader/upload',upload.single('file'),uploaderController.upload);

module.exports = uploaderRouter;

