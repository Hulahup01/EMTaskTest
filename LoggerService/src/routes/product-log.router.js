import Router from 'express';
import asyncHandler from 'express-async-handler';
import isValid from '../middlewares/validation.middleware.js';
import idSchema from '../schemas/id.schema.js';
import getProductLogSchema from "../schemas/product-log/get-product-log.schema.js";
import productLogController from '../controllers/product-log.controller.js';
import consumeFromQueue from "../middlewares/rabbitmq.middleware.js";
import productLogService from '../services/product-log.service.js';
import CreateProductLogDto from "../dtos/product-log/create-product-log.dto.js";

const router = Router();

router.get(
    '/',
    isValid(getProductLogSchema, 'query'),
    asyncHandler(productLogController.getAll)
);

router.get(
    '/:id',
    isValid(idSchema, 'params'),
    asyncHandler(productLogController.getById)
);

consumeFromQueue(
    'products',
    async (message) => {
        const data = JSON.parse(message);
        const object = {
            action: data.action,
            ...data.data,
            date: data.data.updatedAt,
            details: { ...data.data }
        }
        await productLogService.create(new CreateProductLogDto(object));
});

export default router;