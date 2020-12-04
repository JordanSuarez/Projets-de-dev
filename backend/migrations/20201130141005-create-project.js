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
      tag1:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Tags',
          key: 'id',
        }
      },
      tag2: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Tags',
          key: 'id',
        }
      },
      tag3: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Tags',
          key: 'id',
        }
      },
      tag4: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Tags',
          key: 'id',
        }
      },
      tag5: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Tags',
          key: 'id',
        }
      },
      tag6: {
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