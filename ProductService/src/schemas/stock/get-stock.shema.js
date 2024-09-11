import paginationSchema from '../pagination.schema.js';
import Joi from 'joi';

const getStockSchema = paginationSchema.keys({
    product_plu: Joi.string().optional(),
    shop_id: Joi.number().integer().optional(),
    shelfAmountMin: Joi.number().positive().optional(),
    shelfAmountMax: Joi.number().positive().optional(),
    orderAmountMin: Joi.number().positive().optional(),
    orderAmountMax: Joi.number().positive().optional(),
});

export default getStockSchema;