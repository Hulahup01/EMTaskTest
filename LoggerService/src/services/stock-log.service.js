import StockLogRepository from '../repositories/stock-log.repository.js';
import ServiceError from '../errors/service.error.js';
import {literal, Op} from 'sequelize';

class StockLogService {
    async create(createStockLogDto) {
        return await StockLogRepository.create(createStockLogDto);
    }

    async getAll(getStockLogDto) {
        const { page, limit, product_plu, shop_id, action, date } = getStockLogDto;
        const offset = limit * (page - 1) || 0;

        const whereCondition = {
            ...(product_plu && {
                product_plu: { [Op.eq]: product_plu }
            }),
            ...(shop_id && {
                shop_id: { [Op.eq]: shop_id }
            }),
            ...(action && {
                action: { [Op.eq]: action }
            }),
            ...(date && {
                date: { [Op.eq]: date }
            }),
        };

        return await StockLogRepository.findAll({
            where: whereCondition,
            limit: limit,
            offset: offset,
        });
    }

    async getById(id) {
        const stock = await StockLogRepository.findByPk(id);
        if (!stock) {
            throw new ServiceError(`Stock not found`);
        }
        return stock;
    }
}

export default new StockLogService();