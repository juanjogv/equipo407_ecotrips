const sequelize = require("./sequelize");

var initModels = require("./models/init-models");
var models = initModels(sequelize);

module.exports = models;