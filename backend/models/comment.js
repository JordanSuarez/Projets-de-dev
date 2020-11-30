/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comment', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "L’identifiant du commentaire"
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "Le texte du commentaire"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "La date de création du commentaire"
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "La date de modification du commentaire"
    }
  }, {
    sequelize,
    tableName: 'comment',
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
    ]
  });
};
