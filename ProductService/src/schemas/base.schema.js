import Joi from 'joi';

const baseSchema = Joi.object().options({
    convert: true,
    abortEarly: false,
});

export default baseSchema;
