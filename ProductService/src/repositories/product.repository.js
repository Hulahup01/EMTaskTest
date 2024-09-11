import BaseRepository from './base.repository.js';
import Product from '../models/product.model.js';

class ProductRepository extends BaseRepository {
    constructor() {
        super();
        this.model = Product;
    }
}

export default new ProductRepository();