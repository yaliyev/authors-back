const Joi = require('joi');

var AuthorValidation = Joi.object({
    name: Joi.string().min(3),
    birthYear: Joi.number().integer(),
    genre: Joi.string().required(),
    isDead: Joi.boolean(),
    gender: Joi.string().required(),
    authorImage:Joi.optional().allow(''),
    bio: Joi.string().optional().allow('')
})

module.exports = AuthorValidation;