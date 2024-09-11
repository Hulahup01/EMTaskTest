import sequelize from '../config/db.js'
import { DataTypes } from 'sequelize';
import Product from './product.model.js';
import Shop from "./shop.model.js";

const Stock = sequelize.define('Stock', {
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
    quantity_on_shelf: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    quantity_on_order: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

Stock.belongsTo(Shop, { foreignKey: 'shop_id', onDelete: 'CASCADE' });
Shop.hasMany(Stock, { foreignKey: 'shop_id', onDelete: 'CASCADE' });

Stock.belongsTo(Product, { foreignKey: 'product_plu', onDelete: 'CASCADE' });
Product.hasMany(Stock, { foreignKey: 'product_plu', onDelete: 'CASCADE' });

export default Stock;