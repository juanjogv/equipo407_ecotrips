const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('booking_hotels', {
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
    }
  }, {
    sequelize,
    tableName: 'booking_hotels',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "booking_hotels_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
