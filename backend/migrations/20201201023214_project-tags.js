const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable() => "Tags", deps: []
 * createTable() => "Users", deps: []
 * createTable() => "Comments", deps: [Users]
 * createTable() => "Projects", deps: [Users]
 * createTable() => "ProjectTags", deps: [Projects, Tags]
 *
 */

const info = {
  revision: 1,
  name: "project-tags",
  created: "2020-12-01T02:32:14.642Z",
  comment: "",
};

const migrationCommands = (transaction) => {
  return [
    {
      fn: "createTable",
      params: [
        "Tags",
        {
          id: {
            type: Sequelize.INTEGER,
            field: "id",
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
          },
          name: { type: Sequelize.STRING, field: "name" },
          image: { type: Sequelize.STRING, field: "image" },
          createdAt: {
            type: Sequelize.DATE,
            field: "createdAt",
            allowNull: false,
          },
          updatedAt: {
            type: Sequelize.DATE,
            field: "updatedAt",
            allowNull: false,
          },
        },
        { transaction },
      ],
    },
    {
      fn: "createTable",
      params: [
        "Users",
        {
          id: {
            type: Sequelize.INTEGER,
            field: "id",
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
          },
          name: { type: Sequelize.STRING, field: "name" },
          email: { type: Sequelize.STRING, field: "email" },
          password: { type: Sequelize.STRING, field: "password" },
          isAdmin: { type: Sequelize.BOOLEAN, field: "isAdmin" },
          createdAt: {
            type: Sequelize.DATE,
            field: "createdAt",
            allowNull: false,
          },
          updatedAt: {
            type: Sequelize.DATE,
            field: "updatedAt",
            allowNull: false,
          },
        },
        { transaction },
      ],
    },
    {
      fn: "createTable",
      params: [
        "Comments",
        {
          id: {
            type: Sequelize.INTEGER,
            field: "id",
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
          },
          content: { type: Sequelize.STRING, field: "content" },
          user_id: { type: Sequelize.INTEGER, field: "user_id" },
          createdAt: {
            type: Sequelize.DATE,
            field: "createdAt",
            allowNull: false,
          },
          updatedAt: {
            type: Sequelize.DATE,
            field: "updatedAt",
            allowNull: false,
          },
          UserId: {
            type: Sequelize.INTEGER,
            field: "UserId",
            onUpdate: "CASCADE",
            onDelete: "NO ACTION",
            references: { model: "Users", key: "id" },
            allowNull: false,
          },
        },
        { transaction },
      ],
    },
    {
      fn: "createTable",
      params: [
        "Projects",
        {
          id: {
            type: Sequelize.INTEGER,
            field: "id",
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
          },
          title: { type: Sequelize.STRING, field: "title" },
          description: { type: Sequelize.STRING, field: "description" },
          vote: { type: Sequelize.INTEGER, field: "vote" },
          image: { type: Sequelize.STRING, field: "image" },
          github_link: { type: Sequelize.STRING, field: "github_link" },
          project_link: { type: Sequelize.STRING, field: "project_link" },
          user_id: { type: Sequelize.INTEGER, field: "user_id" },
          createdAt: {
            type: Sequelize.DATE,
            field: "createdAt",
            allowNull: false,
          },
          updatedAt: {
            type: Sequelize.DATE,
            field: "updatedAt",
            allowNull: false,
          },
          UserId: {
            type: Sequelize.INTEGER,
            field: "UserId",
            onUpdate: "CASCADE",
            onDelete: "NO ACTION",
            references: { model: "Users", key: "id" },
            allowNull: false,
          },
        },
        { transaction },
      ],
    },
    {
      fn: "createTable",
      params: [
        "ProjectTags",
        {
          createdAt: {
            type: Sequelize.DATE,
            field: "createdAt",
            allowNull: false,
          },
          updatedAt: {
            type: Sequelize.DATE,
            field: "updatedAt",
            allowNull: false,
          },
          project_id: {
            type: Sequelize.INTEGER,
            field: "project_id",
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
            references: { model: "Projects", key: "id" },
            primaryKey: true,
          },
          tag_id: {
            type: Sequelize.INTEGER,
            field: "tag_id",
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
            references: { model: "Tags", key: "id" },
            primaryKey: true,
          },
        },
        { transaction },
      ],
    },
  ];
};

const rollbackCommands = (transaction) => {
  return [
    {
      fn: "dropTable",
      params: ["Comments", { transaction }],
    },
    {
      fn: "dropTable",
      params: ["Projects", { transaction }],
    },
    {
      fn: "dropTable",
      params: ["Tags", { transaction }],
    },
    {
      fn: "dropTable",
      params: ["Users", { transaction }],
    },
    {
      fn: "dropTable",
      params: ["ProjectTags", { transaction }],
    },
  ];
};

const pos = 0;
const useTransaction = true;

const execute = (queryInterface, sequelize, _commands) => {
  let index = pos;
  const run = (transaction) => {
    const commands = _commands(transaction);
    return new Promise((resolve, reject) => {
      const next = () => {
        if (index < commands.length) {
          const command = commands[index];
          console.log(`[#${index}] execute: ${command.fn}`);
          index++;
          queryInterface[command.fn](...command.params).then(next, reject);
        } else resolve();
      };
      next();
    });
  };
  if (this.useTransaction) {
    return queryInterface.sequelize.transaction(run);
  }
  return run(null);
};

module.exports = {
  pos,
  useTransaction,
  up: (queryInterface, sequelize) => {
    return execute(queryInterface, sequelize, migrationCommands);
  },
  down: (queryInterface, sequelize) => {
    return execute(queryInterface, sequelize, rollbackCommands);
  },
  info,
};
