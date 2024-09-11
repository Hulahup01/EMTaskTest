import Router from 'express';
import isValid from '../middlewares/validation.middleware.js';
import idSchema from '../schemas/id.schema.js';
import asyncHandler from 'express-async-handler';
import getStockLogSchema from "../schemas/stock-log/get-stock-log.schema.js";
import stockLogController from '../controllers/stock-log.controller.js';
import consumeFromQueue from "../middlewares/rabbitmq.middleware.js";
import stockLogService from "../services/stock-log.service.js";
import CreateStockLogDto from "../dtos/stock-log/create-stock-log.dto.js";

const router = Router();

router.get(
    '/',
    isValid(getStockLogSchema, 'query'),
    asyncHandler(stockLogController.getAll)
);

router.get(
    '/:id',
    isValid(idSchema, 'params'),
    asyncHandler(stockLogController.getById)
);

consumeFromQueue(
    'stocks',
    async (message) => {
        const data = JSON.parse(message);
        const object = {
            action: data.action,
            ...data.data,
            date: data.data.updatedAt,
            details: { ...data.data }
        }
        await stockLogService.create(new CreateStockLogDto(object));
    });

export default router;