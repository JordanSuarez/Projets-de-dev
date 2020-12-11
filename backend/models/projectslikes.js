'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProjectsLikes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.User.belongsToMany(models.Project, {
        through: models.ProjectsLikes,
        foreignKey: 'userId',
        otherKey: 'projectId',
      });

      models.Project.belongsToMany(models.User, {
        through: models.ProjectsLikes,
        foreignKey: 'projectId',
        otherKey: 'userId',
      });

      models.ProjectsLikes.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });

      models.ProjectsLikes.belongsTo(models.Project, {
        foreignKey: 'projectId',
        as: 'project',
      });
    }
  };
  ProjectsLikes.init({
    projectId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Project',
        key: 'id',
      }
    }, 
    
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      }
    },
  }, {
    sequelize,
    modelName: 'ProjectsLikes',
  });
  return ProjectsLikes;
};