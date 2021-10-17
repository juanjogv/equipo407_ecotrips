const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('review_touristic_places', {
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
    id_touristic_place: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'touristic_places',
        key: 'id'
      }
    },
    review_title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    review_desc: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    review_points: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'review_touristic_places',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "review_touristic_places_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
