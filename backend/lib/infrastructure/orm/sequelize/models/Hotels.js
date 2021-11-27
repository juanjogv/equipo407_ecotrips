const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hotels', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_city: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cities',
        key: 'id'
      }
    },
    hotel_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    hotel_desc: {
      type: DataTypes.STRING(2500),
      allowNull: true
    },
    hotel_photos: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: true
    },
    hotel_home_photo: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    hotel_longitude: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    hotel_latitude: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'hotels',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "hotels_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
