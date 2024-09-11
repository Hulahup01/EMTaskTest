import ProductLogRepository from '../repositories/product-log.repository.js';
import ServiceError from '../errors/service.error.js';
import { Op, literal } from 'sequelize';

class ProductLogService {
    async create(createProductLogDto) {
        try {
            return await ProductLogRepository.create(createProductLogDto);
        } catch (e) {
            throw new ServiceError(e.errors.reduce((acc, cur) => acc + `? ${cur.message} ? `, ''));
        }
    }

    async getAll(getProductLogDto) {
        const { limit, page, plu, action, date } = getProductLogDto;
        const offset = limit * (page - 1) || 0;
        const whereCondition = {
            ...(plu && {
                plu: { [Op.eq]: plu }
            }),
            ...(action && {
                action: { [Op.eq]: action }
            }),
            ...(date && {
                date: { [Op.eq]: date }
            }),
        };

        return await ProductLogRepository.findAll({
            where: whereCondition,
            limit: limit,
            offset: offset,
        });
    }

    async getById(id) {
        const product = await ProductLogRepository.findByPk(id);
        if (!product) {
            throw new ServiceError('Product not found');
        }
        return product;
    }
}

export default new ProductLogService();