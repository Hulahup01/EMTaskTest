import { Sequelize } from 'sequelize';
import 'dotenv/config';

export default new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: process.env.DB,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        logging: process.env.NODE_ENV === 'development' ? console.log : false
    }
);