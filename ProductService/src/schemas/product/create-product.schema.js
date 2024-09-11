import Joi from 'joi';
import baseSchema from '../base.schema.js';

const createProductSchema = baseSchema.keys({
    plu: Joi.number().positive().required(),
    name: Joi.string().min(1).max(255).required(),
});

export default createProductSchema;