import paginationSchema from '../pagination.schema.js';
import Joi from 'joi';

const getProductLogSchema = paginationSchema.keys({
    plu: Joi.string().optional(),
    date: Joi.date().optional(),
    action: Joi.string().optional(),
});

export default getProductLogSchema;