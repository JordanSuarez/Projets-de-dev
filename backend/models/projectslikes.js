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
      onDelete: 'CASCADE',      
    });

      models.Project.belongsToMany(models.User, {
       through: models.ProjectsLikes,
       foreignKey: 'projectId',
       otherKey: 'userId',
       onDelete: 'CASCADE',
     });

      models.ProjectsLikes.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
        onDelete: 'CASCADE',
      });

      models.ProjectsLikes.belongsTo(models.Project, {
        foreignKey: 'projectId',
        as: 'project',
        onDelete: 'CASCADE',
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

    isLike: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'ProjectsLikes',
  });
  return ProjectsLikes;
};
