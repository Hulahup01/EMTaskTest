import Joi from 'joi';
import baseSchema from '../base.schema.js';

const createStockSchema = baseSchema.keys({
    product_plu: Joi.number().positive().required(),
    shop_id: Joi.number().positive().required(),
    quantity_on_shelf: Joi.number().positive().required(),
    quantity_on_order: Joi.number().positive().required(),
});

export default createStockSchema;