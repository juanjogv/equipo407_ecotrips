const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('review_votes_hotels', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    id_review: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'review_hotels',
        key: 'id'
      }
    },
    useful_review: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'review_votes_hotels',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "review_votes_hotels_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
