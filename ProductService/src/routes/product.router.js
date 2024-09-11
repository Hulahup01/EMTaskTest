import Router from 'express';
import asyncHandler from 'express-async-handler';
import isValid from '../middlewares/validation.middleware.js';
import productController from '../controllers/product.controller.js';
import createProductSchema from '../schemas/product/create-product.schema.js';
import getProductSchema from '../schemas/product/get-product.schema.js';
import idSchema from '../schemas/id.schema.js';
import updateProductSchema from "../schemas/product/update-product.schema.js";

const router = Router();

router.get(
    '/',
    isValid(getProductSchema, 'query'),
    asyncHandler(productController.getAll)
);

router.get(
    '/:id',
    isValid(idSchema, 'params'),
    asyncHandler(productController.getById)
);

router.post(
    '/',
    isValid(createProductSchema, 'body'),
    asyncHandler(productController.create)
);

router.put(
    '/:id',
    isValid(idSchema, 'params'),
    isValid(updateProductSchema, 'body'),
    asyncHandler(productController.update)
);

router.delete(
    '/:id',
    isValid(idSchema, 'params'),
    asyncHandler(productController.delete)
);

export default router;