import sequelize from '../config/db.js'
import { DataTypes } from 'sequelize';

const Shop = sequelize.define('Shop', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

export default Shop;