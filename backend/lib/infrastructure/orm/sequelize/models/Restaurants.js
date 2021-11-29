const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('restaurants', {
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
    restaurant_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    restaurant_desc: {
      type: DataTypes.STRING(2500),
      allowNull: true
    },
    restaurant_photos: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: true
    },
    restaurant_home_photo: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    restaurant_longitude: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    restaurant_latitude: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'restaurants',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "restaurants_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
