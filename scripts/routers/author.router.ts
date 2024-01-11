var express = require('express');

var authorRouter = express.Router();

var authorController = require('../controllers/author.controller');

var AuthorMiddleware = require('../middlewares/author.middleware');

authorRouter.get('/',authorController.getAll);

authorRouter.get('/:id',authorController.getById);

authorRouter.post('/',AuthorMiddleware,authorController.post);

authorRouter.delete('/:id',authorController.delete);

authorRouter.put('/',authorController.update);

module.exports = authorRouter;