const { ENUM } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

const Order = sequelize.define('order', {
  id: {
    type:DataTypes.UUID,
    defaultValue:DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    
  },
  shippingAddress: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  paymentStatus: {
    type: DataTypes.ENUM('pending', 'paid'),
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('pending', 'completed', 'cancelled'),
    defaultValue: 'pending'
  }
})

return Order;
}