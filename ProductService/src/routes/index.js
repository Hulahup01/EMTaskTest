import Router from 'express';
import productRouter from './product.router.js';
import shopRouter from './shop.router.js';
import stockRouter from './stock.router.js';

const router = new Router();

router.use('/products', productRouter);
router.use('/shops', shopRouter);
router.use('/stocks', stockRouter);

export default router;