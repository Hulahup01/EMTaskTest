import BaseRepository from './base.repository.js';
import StockLog from '../models/stock-log.model.js';

class StockLogRepository extends BaseRepository {
    constructor() {
        super();
        this.model = StockLog;
    }
}

export default new StockLogRepository();