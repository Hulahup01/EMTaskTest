import CreateShopDto from '../dtos/shop/create-shop.dto.js';
import UpdateShopDto from '../dtos/shop/update-shop.dto.js';
import GetShopDto from '../dtos/shop/get-shop.dto.js';
import ShopService from '../services/shop.service.js';
import httpStatus from 'http-status';

class ShopController {
    async create(req, res, next) {
        const createShopDto = new CreateShopDto(req.body);
        const result = await ShopService.create(createShopDto);
        return res.status(httpStatus.OK).send(result);
    }

    async getAll(req, res, next) {
        const getShopDto = new GetShopDto(req.query);
        const result = await ShopService.getAll(getShopDto);
        return res.status(httpStatus.OK).send(result);
    }

    async getById(req, res, next) {
        const { id } = req.params;
        const result = await ShopService.getById(id);
        return res.status(httpStatus.OK).send(result);
    }

    async update(req, res, next) {
        const { id } = req.params;
        const updateShopDto = new UpdateShopDto(req.body);
        const result = await ShopService.update(id, updateShopDto);
        return res.status(httpStatus.OK).send(result);
    }

    async delete(req, res, next) {
        const { id } = req.params;
        const result = await ShopService.delete(id);
        return res.status(httpStatus.OK).send(result);
    }
}

export default new ShopController();