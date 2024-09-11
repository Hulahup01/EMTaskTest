import Router from 'express';
import asyncHandler from 'express-async-handler';
import isValid from '../middlewares/validation.middleware.js';
import createShopSchema from '../schemas/shop/create-shop.schema.js';
import updateShopSchema from '../schemas/shop/update-shop.schema.js';
import getShopSchema from "../schemas/shop/get-shop.schema.js";
import idSchema from "../schemas/id.schema.js";
import shopController from '../controllers/shop.controller.js';

const router = new Router();

router.get(
    '/',
    isValid((getShopSchema), 'query'),
    asyncHandler(shopController.getAll)
);

router.get(
    '/:id',
    isValid((idSchema), 'params'),
    asyncHandler(shopController.getById)
);

router.post(
    '/',
    isValid((createShopSchema), 'body'),
    asyncHandler(shopController.create)
);

router.delete(
    '/:id',
    isValid((idSchema), 'params'),
    asyncHandler(shopController.delete)
);

router.put(
    '/:id',
    isValid((idSchema), 'params'),
    isValid((updateShopSchema), 'body'),
    asyncHandler(shopController.update)
);

export default router;
