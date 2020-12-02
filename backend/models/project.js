'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Project.belongsToMany(models.Tag, {
        foreignKey: 'project_id',
        as: 'tags',
        through: 'ProjectTags',
      });
      models.Project.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      })
    }
  };
  Project.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    vote: DataTypes.INTEGER,
    image: DataTypes.STRING,
    github_link: DataTypes.STRING,
    project_link: DataTypes.STRING,
    //userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};