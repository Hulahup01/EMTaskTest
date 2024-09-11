import Joi from 'joi';
import baseSchema from '../base.schema.js';

const adjustStockSchema = baseSchema.keys({
    shelfAmount: Joi.number().positive().optional(),
    orderAmount: Joi.number().positive().optional()
}).or('shelfAmount', 'orderAmount');

export default adjustStockSchema;