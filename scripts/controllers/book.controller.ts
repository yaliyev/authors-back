import express from 'express';

var BookModel = require('../models/book.model');

var BookController = {
    getAll: async(req:express.Request,res: express.Response)=>{
       const books = await BookModel.find({});

       res.status(200).send(books);
    },
    getById: async(req:express.Request,res: express.Response)=>{
        var { id } = req.params;
        try {
            const book = await BookModel.findById(id);
            res.status(200).send(book);
        } catch (error) {
            res.status(404).send({ message: 'Not Found' });
        }
    },
    post: async(req:express.Request,res:express.Response)=>{
        const newBook = await BookModel(req.body);

        

        try {
            await newBook.save();
        }catch (error:any) {
            if(error.name == 'ValidationError'){
                
                let errors:any = {};
    
                Object.keys(error.errors).forEach((key) => {
                    errors[key] = error.errors[key].message;
                  });
            
                  return res.status(400).send(errors);
            }
            res.status(500).send('Server error');
        }

        res.status(201).send(newBook);
    },
    delete: async(req:express.Request,res:express.Response)=>{
        const { id } = req.params;

        const book =  await BookModel.findById(id);
        await BookModel.findByIdAndDelete(id);

        res.send(book);
    }
}

module.exports = BookController;