const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('departments', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    department_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'departments',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "departments_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
