import ProductRepository from '../repositories/product.repository.js';
import ServiceError from '../errors/service.error.js';
import { Op, literal } from 'sequelize';

class ProductService {
    async create(createProductDto) {
        try {
            return await ProductRepository.create(createProductDto);
        } catch (e) {
            throw new ServiceError(e.errors.reduce((acc, cur) => acc + `? ${cur.message} ? `, ''));
        }
    }

    async getAll(getProductDto) {
        const { limit, page, search } = getProductDto;
        const offset = limit * (page - 1) || 0;

        const whereCondition = search ? {
            [Op.or]: [
                {
                    name: {
                        [Op.iLike]: `%${search}%`
                    }
                },
                literal(`CAST("Product"."plu" AS TEXT) LIKE '%${search}%'`)
            ]
        } : {};

        return await ProductRepository.findAll({
            where: whereCondition,
            limit: limit,
            offset: offset,
        });
    }

    async getById(id) {
        const product = await ProductRepository.findByPk(id);
        if (!product) {
            throw new ServiceError('Product not found');
        }
        return product;
    }

    async update(id, updateProductDto) {
        const product = await ProductRepository.update(updateProductDto, { where: { 'plu': id } });
        if (!product || product.length === 0) {
            throw new ServiceError('Product not found');
        }
        return product;
    }

    async delete(id) {
        const deletedProduct = await ProductRepository.delete({ where: { 'plu': id } });
        if (!deletedProduct) {
            throw new ServiceError('Product not found');
        }
        return deletedProduct;
    }
}

export default new ProductService();