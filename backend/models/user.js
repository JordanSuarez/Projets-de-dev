'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.User.hasMany(models.Project);
      models.User.hasMany(models.Comment);
      models.User.hasMany(models.Message);
    }
  };
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    bio: DataTypes.STRING,
    userImage: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};