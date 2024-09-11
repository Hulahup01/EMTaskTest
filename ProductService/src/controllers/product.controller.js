import ProductService from '../services/product.service.js';
import httpStatus from 'http-status';
import GetProductDto from '../dtos/product/get-product.dto.js';
import UpdateProductDto from '../dtos/product/update-product.dto.js';
import CreateProductDto from '../dtos/product/create-product.dto.js';
import sendToQueue from "../middlewares/rabbitmq.middleware.js";

class ProductController {
    async create(req, res, next) {
        const createProductDto = new CreateProductDto(req.body);
        const result = await ProductService.create(createProductDto);
        await sendToQueue('products', 'create', result);
        return res.status(httpStatus.OK).send(result);
    }

    async getAll(req, res, next) {
        const getProductDto = new GetProductDto(req.query);
        const result = await ProductService.getAll(getProductDto);
        return res.status(httpStatus.OK).send(result);
    }

    async getById(req, res, next) {
        const { id } = req.params;
        const result = await ProductService.getById(id);
        return res.status(httpStatus.OK).send(result);
    }

    async update(req, res, next) {
        const { id } = req.params;
        const updateProductDto = new UpdateProductDto(req.body);
        const result = await ProductService.update(id, updateProductDto);
        await sendToQueue('products', 'update', result);
        return res.status(httpStatus.OK).send(result);
    }

    async delete(req, res, next) {
        const { id } = req.params;
        const result = await ProductService.delete(id);
        await sendToQueue('products', 'delete', result);
        return res.status(httpStatus.OK).send(result);
    }
}

export default new ProductController();