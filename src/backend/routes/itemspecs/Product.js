const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../db/database');

class Product extends Model {}

Product.init({
  length: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  width: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  height: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  weight: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  typeofiItem: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Product',
});

module.exports = Product;