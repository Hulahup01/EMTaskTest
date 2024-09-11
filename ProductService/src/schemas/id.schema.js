import Joi from 'joi';
import baseSchema from './base.schema.js';

const idSchema = baseSchema.keys({
    id: Joi.number()
        .integer()
        .min(0)
});

export default idSchema;