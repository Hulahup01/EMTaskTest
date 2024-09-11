import Joi from 'joi';
import baseSchema from '../base.schema.js';

const createShopSchema = baseSchema.keys({
    name: Joi.string().min(1).max(255).required(),
});

export default createShopSchema;