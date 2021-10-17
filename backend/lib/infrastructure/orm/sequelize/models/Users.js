const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_first_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    user_last_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    user_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "users_user_id_key"
    },
    user_email: {
      type: DataTypes.STRING(60),
      allowNull: false,
      unique: "users_user_email_key"
    },
    user_password: {
      type: DataTypes.STRING(160),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'users',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "users_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "users_user_email_key",
        unique: true,
        fields: [
          { name: "user_email" },
        ]
      },
      {
        name: "users_user_id_key",
        unique: true,
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
