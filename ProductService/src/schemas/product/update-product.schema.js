import Joi from 'joi';
import baseSchema from '../base.schema.js';

const updateProductSchema = baseSchema.keys({
    name: Joi.string().min(1).max(255).optional(),
});

export default updateProductSchema;