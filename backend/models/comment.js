'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Comment.belongsTo(models.User),
      models.Comment.belongsTo(models.Project, {
        foreignKey: {
          allowNull: false
        }
      })
    }
  };
  Comment.init({
    content: DataTypes.STRING(1234),
  }, {
    sequelize,
    modelName: 'Comment',
  },)
  return Comment;
};