import Router from 'express';
import isValid from '../middlewares/validation.middleware.js';
import idSchema from '../schemas/id.schema.js';
import asyncHandler from 'express-async-handler';
import stockController from '../controllers/stock.controller.js';
import createStockSchema from '../schemas/stock/create-stock.schema.js';
import updateStockSchema from '../schemas/stock/update-stock.schema.js';
import adjustStockSchema from '../schemas/stock/adjust-stock.schema.js';
import getStockSchema from '../schemas/stock/get-stock.shema.js';

const router = Router();

router.get(
    '/',
    isValid(getStockSchema, 'query'),
    asyncHandler(stockController.getAll)
);

router.get(
    '/:id',
    isValid(idSchema, 'params'),
    asyncHandler(stockController.getById)
);

router.post(
    '/',
    isValid(createStockSchema, 'body'),
    asyncHandler(stockController.create)
);

router.put(
    '/:id',
    isValid(idSchema, 'params'),
    isValid(updateStockSchema, 'body'),
    asyncHandler(stockController.update)
);

router.delete(
    '/:id',
    isValid(idSchema, 'params'),
    asyncHandler(stockController.delete)
);

router.put(
    '/increase/:id',
    isValid(idSchema, 'params'),
    isValid(adjustStockSchema, 'body'),
    asyncHandler(stockController.increase)
);

router.put(
    '/decrease/:id',
    isValid(idSchema, 'params'),
    isValid(adjustStockSchema, 'body'),
    asyncHandler(stockController.decrease)
);

export default router;