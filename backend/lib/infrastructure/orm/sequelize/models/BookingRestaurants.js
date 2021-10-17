const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('booking_restaurants', {
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
    id_restaurant: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'restaurants',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'booking_restaurants',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "booking_restaurants_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
