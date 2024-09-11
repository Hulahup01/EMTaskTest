import httpStatus from 'http-status';
import StockLogService from "../services/stock-log.service.js";
import GetStockLogDto from "../dtos/stock-log/get-stock-log.dto.js";


class StockLogController {
    async getById(req, res, next) {
        const { id } = req.params;
        const result = await StockLogService.getById(id);
        return res.status(httpStatus.OK).json(result);
    }

    async getAll(req, res, next) {
        const getStockLogDto = new GetStockLogDto(req.query);
        const result = await StockLogService.getAll(getStockLogDto);
        return res.status(httpStatus.OK).send(result);
    }
}

export default new StockLogController();