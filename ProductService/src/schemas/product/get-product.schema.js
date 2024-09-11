import paginationSchema from '../pagination.schema.js';
import Joi from "joi";

const getProductSchema = paginationSchema.keys({
    search: Joi.string()
        .optional()
        .insensitive()
        .min(1)
        .max(255)
        .allow(null)
});

export default getProductSchema;