module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    // Your category model definition
  });

  return Category;
};