const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('touristic_places', {
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
    touristic_place_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    touristic_place_desc: {
      type: DataTypes.STRING(2500),
      allowNull: true
    },
    touristic_place_photos: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: true
    },
    touristic_place_home_photo: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    touristic_place_longitude: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    touristic_place_latitude: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'touristic_places',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "touristic_places_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
