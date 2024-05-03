const dbConfig = require('../config/dbConfig')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(dbConfig.DATABASE, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.DIALECT
})

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize

db.models = {}
// Import all model files

// Initialize models with sequelize and DataTypes
db.models.Users = require('./User.model')(sequelize, Sequelize)
db.models.FarmStore = require('./FarmerShop.model')(sequelize, Sequelize)
db.models.Produce = require('./Produce.model')(sequelize, Sequelize)
db.models.Delivery = require('./Delivery.model')(sequelize, Sequelize)
db.models.Cart = require('./Cart.model')(sequelize, Sequelize)
db.models.Order = require('./Order.model')(sequelize, Sequelize)
db.models.Transaction = require('./Transaction.model')(sequelize, Sequelize)
db.models.Category = require('./Category.model')(sequelize, Sequelize)


//associations 
const { Users, Produce, Cart, Order, OrderItem, CartItem , Category, UsersProduceCategory, Transaction, Delivery} = db.models;

Users.hasMany(Transaction);
Users.hasMany(Delivery);
Users.hasMany(Cart);
Users.hasMany(Order);
Users.hasMany(Produce);
Users.belongsToMany(Category, { through: 'UserProduceCategory' });

Transaction.belongsTo(Users);
Transaction.belongsTo(Order);

Produce.belongsTo(Users);
Produce.belongsTo(Category);
Produce.belongsToMany(Cart, { through: 'CartItem' });
Produce.belongsToMany(Order, { through: 'OrderItem' });

Order.belongsTo(Users);
Order.hasMany(Delivery);
Order.belongsToMany(Produce, { through: 'OrderItem' });

Cart.belongsTo(Users);
Cart.belongsToMany(Produce, { through: 'CartItem' });

Category.hasMany(Produce);
Category.belongsToMany(Users, { through: 'UserProduceCategory' });

module.exports = db
