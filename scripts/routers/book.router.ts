var express = require('express');

var bookRouter = express.Router();

var bookController = require('../controllers/book.controller');

bookRouter.get('/books/getAll/',bookController.getAll);

bookRouter.get('/books/:id',bookController.getById);

bookRouter.post("/books/post",bookController.post);

bookRouter.delete("/books/:id",bookController.delete);



module.exports = bookRouter;