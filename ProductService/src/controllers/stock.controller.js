import CreateStockDto from '../dtos/stock/create-stock.dto.js';
import StockService from '../services/stock.service.js';
import httpStatus from 'http-status';
import UpdateStockDto from '../dtos/stock/update.stock.dto.js';
import AdjustStockDto from '../dtos/stock/adjust-stock.dto.js';
import GetStockDto from "../dtos/stock/get-stock.dto.js";
import sendToQueue from "../middlewares/rabbitmq.middleware.js";

class StockController {
    async create(req, res, next) {
        const createStockDto = new CreateStockDto(req.body);
        const result = await StockService.create(createStockDto);
        await sendToQueue('stocks', 'create', result);
        return res.status(httpStatus.OK).send(result);
    }

    async getAll(req, res, next) {
        const getStockDto = new GetStockDto(req.query);
        const result = await StockService.getAll(getStockDto);
        return res.status(httpStatus.OK).send(result);
    }

    async getById(req, res, next) {
        const { id } = req.params;
        const result = await StockService.getById(id);
        return res.status(httpStatus.OK).send(result);
    }

    async update(req, res, next) {
        const { id } = req.params;
        const updateStockDto = new UpdateStockDto(req.body);
        const result = await StockService.update(id, updateStockDto);
        await sendToQueue('stocks', 'update', result);
        return res.status(httpStatus.OK).send(result);
    }

    async delete(req, res, next) {
        const { id } = req.params;
        const result = await StockService.delete(id);
        await sendToQueue('stocks', 'delete', result);
        return res.status(httpStatus.OK).send(result);
    }

    async increase(req, res, next) {
        const { id } = req.params;
        const adjustStockDto = new AdjustStockDto(req.body);
        const result = await StockService.increase(id, adjustStockDto);
        await sendToQueue('stocks', 'increase', result);
        return res.status(httpStatus.OK).send(result);
    }

    async decrease(req, res, next) {
        const { id } = req.params;
        const adjustStockDto = new AdjustStockDto(req.body);
        const result = await StockService.decrease(id, adjustStockDto);
        await sendToQueue('stocks', 'decrease', result);
        return res.status(httpStatus.OK).send(result);
    }
}

export default new StockController();