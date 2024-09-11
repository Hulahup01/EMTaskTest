import BaseRepository from './base.repository.js';
import Stock from '../models/stock.model.js';

class ProductRepository extends BaseRepository {
    constructor() {
        super();
        this.model = Stock;
    }
}

export default new ProductRepository();