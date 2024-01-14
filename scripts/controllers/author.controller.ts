var AuthorModel = require('../models/author.model');

var AuthorController: any = {
    getAll: async (req: any, res: any) => {
        const authors = await AuthorModel.find({});

        res.send(authors);
    },
    getById: async (req: any, res: any) => {
        var { id } = req.params;
        try {
            const author = await AuthorModel.findById(id);
            res.status(200).send(author);
        } catch (error) {
            res.status(404).send({ message: 'Not Found' });
        }

    },
    post: async (req: any, res: any) => {
        const newAuthor = new AuthorModel(req.body);

        await newAuthor.save();
        res.status(201).send(newAuthor);
    },
    delete: async (req: any, res: any) => {
        const { id } = req.params;

        const author =  await AuthorModel.findById(id);
        await AuthorModel.findByIdAndDelete(id);

        res.send(author);

    },
    update: async (req: any, res: any) => {
        const { id, name, birthYear, genre, isDead, gender, authorImage,bio } = req.body;

        try {
            const data = await AuthorModel.findById(id);
            let updatedAuthor = {
                id: data.id,
                name:'',
                birthYear:'',
                genre:'',
                isDead:false,
                gender:'',
                authorImage:'',
                bio:''
            }

            if(name !== undefined){
                updatedAuthor.name = name;
            }
            if(birthYear !== undefined){
                updatedAuthor.birthYear = birthYear;
            }
            if(genre !== undefined){
                updatedAuthor.genre = genre;
            }
            if(isDead!== undefined){
                updatedAuthor.isDead = isDead;
            }
            if(gender !== undefined){
                updatedAuthor.gender = gender;
            }
            if(authorImage !== undefined){
                updatedAuthor.authorImage = authorImage;
            }
            if(bio !== undefined){
                updatedAuthor.bio = bio;
            }

            await AuthorModel.findByIdAndUpdate(id,updatedAuthor);

            res.status(200).send(updatedAuthor);
        } catch (error) {
            res.status(404).send({ message: 'Not Found' });
        }



    }

}

module.exports = AuthorController;