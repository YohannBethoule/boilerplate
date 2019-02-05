const Joi = require('joi');

const schemaUser = Joi.object().keys({
    username: Joi.string().alphanum().required(),
    password: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    company: Joi.string(),
    function: Joi.string(),
});

module.exports = schemaUser;
