import StockRepository from '../repositories/stock.repository.js';
import ServiceError from '../errors/service.error.js';
import {literal, Op} from 'sequelize';

class StockService {
    async create(createStockDto) {
        return await StockRepository.create(createStockDto);
    }

    async getAll(getStockDto) {
        const { page, limit, product_plu, shop_id, shelfAmountMin, shelfAmountMax, orderAmountMin, orderAmountMax } = getStockDto;
        const offset = limit * (page - 1) || 0;

        const whereCondition = {
            ...(product_plu && {
                [Op.and]: literal(`CAST("Stock"."product_plu" AS TEXT) LIKE '%${product_plu}%'`)
            }),
            ...(shop_id && {
                shop_id: { [Op.eq]: shop_id }
            }),
            ...((shelfAmountMax || shelfAmountMin) && {
                quantity_on_shelf: {
                    ...(shelfAmountMin && { [Op.gte]: shelfAmountMin }),
                    ...(shelfAmountMax && { [Op.lte]: shelfAmountMax })
                }
            }),
            ...((orderAmountMax || orderAmountMin) && {
                quantity_on_order: {
                    ...(orderAmountMin && { [Op.gte]: orderAmountMin }),
                    ...(orderAmountMax && { [Op.lte]: orderAmountMax })
                }
            })
        };

        return await StockRepository.findAll({
            where: whereCondition,
            limit: limit,
            offset: offset,
        });
    }

    async getById(id) {
        const stock = await StockRepository.findByPk(id);
        if (!stock) {
            throw new ServiceError(`Stock not found`);
        }
        return stock;
    }

    async update(id, updateStockDto) {
        const stock = await StockRepository.update(updateStockDto, { where: { id } });
        if (!stock || stock.length === 0) {
            throw new ServiceError(`Stock not found`);
        }
        return stock;
    }

    async delete(id) {
        const deletedStock = await StockRepository.delete({ where: { id } });
        if (!deletedStock) {
            throw new ServiceError(`Stock not found`);
        }
        return deletedStock;
    }

    async increase(id, adjustStockDto) {
        const stock = await StockRepository.findByPk(id);
        if (!stock) {
            throw new ServiceError(`Stock not found`);
        }
        stock.quantity_on_order += adjustStockDto.orderAmount;
        stock.quantity_on_shelf += adjustStockDto.shelfAmount;
        await stock.save();
        return stock;
    }

    async decrease(id, adjustStockDto) {
        const stock = await StockRepository.findByPk(id);
        if (!stock) {
            throw new ServiceError(`Stock not found`);
        }
        if (stock.quantity_on_order < adjustStockDto.orderAmount ||
            stock.quantity_on_shelf < adjustStockDto.shelfAmount) {
            throw new ServiceError(`Exceeded the limit`);
        }
        stock.quantity_on_order -= adjustStockDto.orderAmount;
        stock.quantity_on_shelf -= adjustStockDto.shelfAmount;
        await stock.save();
        return stock;
    }
}

export default new StockService();