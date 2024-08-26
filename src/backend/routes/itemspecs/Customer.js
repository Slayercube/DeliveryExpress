// src/back-end/routes/itemspecs/Customer.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../db/database'); // Ensure this path is correct

class Customers extends Model {}

Customers.init({
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Add other fields as needed
}, {
  sequelize, // Ensure this is the correct sequelize instance
  modelName: 'customers',
});

module.exports = Customers;