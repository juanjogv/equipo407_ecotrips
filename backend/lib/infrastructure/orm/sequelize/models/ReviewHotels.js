const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('review_hotels', {
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
    id_hotel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'review_hotels',
        key: 'id'
      }
    },
    review_points: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    review_desc: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'review_hotels',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "review_hotels_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
