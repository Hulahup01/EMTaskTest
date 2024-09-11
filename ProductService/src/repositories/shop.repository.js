import BaseRepository from './base.repository.js';
import Shop from '../models/shop.model.js';

class ShopRepository extends BaseRepository {
    constructor() {
        super();
        this.model = Shop;
    }
}

export default new ShopRepository();