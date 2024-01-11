var AuthorValidation = require('../validations/author.validation');

var AuthorMiddleware:any = async (req: any, res: any, next: any) => {
    const { error } = AuthorValidation.validate(req.body);

    if (!error) {
        next();
    }
    else {
        const { details } = error;
        const message = details[0].message;
        res.send({ message });
    }
}

module.exports = AuthorMiddleware;