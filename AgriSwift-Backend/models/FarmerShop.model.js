const { ENUM } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

const FarmStore = sequelize.define('farmStore', {
  id: {
    type:DataTypes.UUID,
    defaultValue:DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  farmer_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  rating: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: ENUM('active', 'inactive'),
    allowNull: false
  }
})

return FarmStore;
}