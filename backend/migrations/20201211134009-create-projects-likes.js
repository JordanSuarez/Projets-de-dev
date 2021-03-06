'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ProjectsLikes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      projectId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete:'CASCADE',
        references: {
          model: 'Projects',
          key: 'id',
        }
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete:'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
        }
      },
      isLike: {
        allowNull: false, 
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ProjectsLikes');
  }
};