import sequelize from '../config/db.js'
import { DataTypes } from 'sequelize';

const StockLog = sequelize.define('Stock_log', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    product_plu: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    shop_id: {
        type: DataTypes.INTEGER,
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

export default StockLog;