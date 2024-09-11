import sequelize from '../config/db.js'
import { DataTypes } from 'sequelize';

const Product = sequelize.define('Product', {
    plu: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

export default Product;