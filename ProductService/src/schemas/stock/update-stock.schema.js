import Joi from 'joi';
import baseSchema from '../base.schema.js';

const createStockSchema = baseSchema.keys({
    product_plu: Joi.number().positive().optional(),
    shop_id: Joi.number().positive().optional(),
    quantity_on_shelf: Joi.number().positive().optional(),
    quantity_on_order: Joi.number().positive().optional(),
});

export default createStockSchema;