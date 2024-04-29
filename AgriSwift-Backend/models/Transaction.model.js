const { ENUM } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

  const Transaction = sequelize.define('transaction', {
    id: {
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    paymentMethod: {
      type: DataTypes.STRING,
      allowNull: false
    },
    transactionStatus: {
      type: DataTypes.ENUM('completed', 'pending', 'refunded'),
      allowNull: false
    }
  })

  return Transaction
}