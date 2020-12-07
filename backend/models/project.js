'use strict';
const {
  Model
} = require('sequelize');

const Tag = require('./index').Tag;

module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

     static associate(models) {
      models.Project.belongsTo(models.User)
      models.Project.belongsTo(models.Tag)
      models.Project.belongsTo(models.Tag, {as: 'Tag2'})
      models.Project.belongsTo(models.Tag, {as: 'Tag3'})
      models.Project.belongsTo(models.Tag, {as: 'Tag4'})
      models.Project.belongsTo(models.Tag, {as: 'Tag5'})
      models.Project.belongsTo(models.Tag, {as: 'Tag6'})
      models.Project.hasMany(models.Comment);


    }
  };
  Project.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    vote: DataTypes.INTEGER,
    image: DataTypes.STRING,
    github_link: DataTypes.STRING,
    project_link: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};