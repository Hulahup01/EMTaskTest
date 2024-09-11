import paginationSchema from '../pagination.schema.js';
import Joi from 'joi';

const getStockLogSchema = paginationSchema.keys({
    product_plu: Joi.string().optional(),
    shop_id: Joi.number().integer().optional(),
    date: Joi.date().optional(),
    action: Joi.string().optional(),
});

export default getStockLogSchema;