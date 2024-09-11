import BaseRepository from './base.repository.js';
import ProductLog from '../models/product-log.model.js';

class ProductLogRepository extends BaseRepository {
    constructor() {
        super();
        this.model = ProductLog;
    }
}

export default new ProductLogRepository();