
module.exports = (sequelize, DataTypes) => {

  const Delivery = sequelize.define('delivery', {
    id: {
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    deliveryDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    deliveryTime: {
      type: DataTypes.TIME,
      allowNull: false
    },
    deliverylocation: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('scheduled', 'in_transit', 'delivered'),
      defaultValue: 'scheduled'
    }
  });

  return Delivery
}