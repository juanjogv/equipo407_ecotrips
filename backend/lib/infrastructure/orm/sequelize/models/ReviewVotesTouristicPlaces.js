const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('review_votes_touristic_places', {
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
        model: 'review_touristic_places',
        key: 'id'
      }
    },
    useful_review: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'review_votes_touristic_places',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "review_votes_touristic_places_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
