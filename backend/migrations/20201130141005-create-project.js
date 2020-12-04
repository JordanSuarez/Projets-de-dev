'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      vote: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      github_link: {
        type: Sequelize.STRING,
      },
      project_link: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        }
      },
      tagId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Tags',
          key: 'id',
        }
      },
      tag2Id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Tags',
          key: 'id',
        }
      },
      tag3Id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Tags',
          key: 'id',
        }
      },
      tag4Id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Tags',
          key: 'id',
        }
      },
      tag5Id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Tags',
          key: 'id',
        }
      },
      tag6Id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Tags',
          key: 'id',
        }
      },
      createdAt: {
        allowNull: false,
        type: 'DATETIME(3) DEFAULT CURRENT_TIMESTAMP(3)'
      },
      updatedAt: {
        allowNull: true,
        type: 'DATETIME(3) DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(3)'
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Projects');
  }
};