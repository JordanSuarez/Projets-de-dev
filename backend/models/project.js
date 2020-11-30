/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('project', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "L’identifiant du projet"
    },
    title: {
      type: DataTypes.STRING(64),
      allowNull: false,
      comment: "Titre d’un projet"
    },
    vote: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Note d’un projet"
    },
    image: {
      type: DataTypes.STRING(128),
      allowNull: true,
      comment: DataTypes.BLOB
    },
    github_link: {
      type: DataTypes.STRING(128),
      allowNull: true,
      comment: "Le lien github du projet"
    },
    project_link: {
      type: DataTypes.STRING(128),
      allowNull: true,
      comment: "Le lien du site du projet"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "La description du projet"
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "L’identifiant de l’utilisateur qui a créé le projet",
      references: {
        model: 'user',
        key: 'id'
      }
    },
    partner_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "L’identifiant d’un utilisateur qui a participé au projet"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "La date de création du projet"
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "La date de modification du projet"
    }
  }, {
    sequelize,
    tableName: 'project',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
