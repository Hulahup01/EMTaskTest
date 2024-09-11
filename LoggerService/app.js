import 'dotenv/config';
import express from 'express';
import router from './src/routes/index.js';
import sequelize from './src/config/db.js';
import errorHandler from './src/middlewares/error-handling.middleware.js';

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use('/logger-service', router);
app.use(errorHandler);

const start = () => {
    sequelize.sync().then(r => app.listen(PORT));
};

start();