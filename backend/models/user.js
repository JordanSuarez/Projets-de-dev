/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "L’identifiant de l’utilisateur"
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: false,
      comment: "Adresse email de l’utilisateur",
      unique: "name"
    },
    email: {
      type: DataTypes.STRING(64),
      allowNull: false,
      comment: "Pseudo de l’utilisateur",
      unique: "email"
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Mot de passe de l’utilisateur"
    },
    admin: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "L’utilisateur est il un admin ?"
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
    tableName: 'user',
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
        name: "email",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "name",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
    ]
  });
};
