import Joi from 'joi'
import baseSchema from './base.schema.js';

const paginationSchema = baseSchema.keys({
    page: Joi.number()
        .integer()
        .min(1)
        .optional()
        .allow(null),

    limit: Joi.number()
        .integer()
        .min(1)
        .optional()
        .allow(null),
});



export default paginationSchema;