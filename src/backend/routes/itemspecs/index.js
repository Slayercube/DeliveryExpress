const Customer = require('./Customer');
const Product = require('./Product');

Customer.hasMany(Product, { foreignKey: 'customerId' });
Product.belongsTo(Customer, { foreignKey: 'customerId' });

module.exports = { Customer, Product };