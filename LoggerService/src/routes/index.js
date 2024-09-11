import Router from 'express';
import productLogRouter from './product-log.router.js';
import stockLogRouter from './stock-log.router.js';

const router = new Router();

router.use('/product-logs', productLogRouter);
router.use('/stock-logs', stockLogRouter);

export default router;