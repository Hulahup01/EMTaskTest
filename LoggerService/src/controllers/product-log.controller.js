import httpStatus from 'http-status';
import ProductLogService from "../services/product-log.service.js";
import GetProductLogDto from "../dtos/product-log/get-product-log.dto.js";


class ProductLogController {
    async getById(req, res, next) {
        const { id } = req.params;
        const result = await ProductLogService.getById(id);
        return res.status(httpStatus.OK).json(result);
    }

    async getAll(req, res, next) {
        const getProductLogDto = new GetProductLogDto(req.query);
        const result = await ProductLogService.getAll(getProductLogDto);
        return res.status(httpStatus.OK).send(result);
    }
}

export default new ProductLogController();