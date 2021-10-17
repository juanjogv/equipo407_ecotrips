const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cities', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    city_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    id_department: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'departments',
        key: 'id'
      }
    },
    city_desc: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    city_photos: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: true
    },
    city_home_photo: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cities',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "cities_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
