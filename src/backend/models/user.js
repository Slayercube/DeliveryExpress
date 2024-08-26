const { DataTypes } = require('sequelize')
const sequelize = require('../db/database')

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userName: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(60),
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    password: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
  },
  {
    tableName: 'customers', // specify the table name
    timestamps: true,
  },
)

module.exports = User
