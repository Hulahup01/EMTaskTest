import sequelize from '../config/db.js'
import { DataTypes } from 'sequelize';

const ProductLog = sequelize.define('Product_log', {
    plu: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false,
    },
    action: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    details: {
        type: DataTypes.JSON,
    }
});

export default ProductLog;