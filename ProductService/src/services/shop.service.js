import ShopRepository from "../repositories/shop.repository.js";
import ServiceError from "../errors/service.error.js";

class ShopService {
    async create(createShopDto) {
        return await ShopRepository.create(createShopDto);
    }

    async getAll(getShopDto) {
        const { limit, page } = getShopDto;
        const offset = limit * (page - 1) || 0;
        return await ShopRepository.findAll({
            limit: limit,
            offset: offset,
        });
    }

    async getById(id) {
        const product = await ShopRepository.findByPk(id);
        if (!product) {
            throw new ServiceError('Shop not found');
        }
        return product;
    }

    async update(id, updateShopDto) {
        const shop = await ShopRepository.update(updateShopDto, { where: { id } });
        if (!shop || shop.length === 0) {
            throw new ServiceError('Shop not found');
        }
        return shop;
    }

    async delete(id) {
        const deletedShop = await ShopRepository.delete({ where: { id } });
        if (!deletedShop) {
            throw new ServiceError('Shop not found');
        }
        return deletedShop;
    }
}

export default new ShopService();