"use strict";

const {
  Sequelize
} = require("sequelize");
const environment = require("../../config/environment");

const sequelize = new Sequelize(environment.database.url);

//sequelize.import("./models/BookingHotels");
// sequelize.import("./models/BookingRestaurants");
// sequelize.import("./models/Cities");
// sequelize.import("./models/Departments");
// sequelize.import("./models/Hotels");
// sequelize.import("./models/Restaurants");
// sequelize.import("./models/ReviewCities");
// sequelize.import("./models/ReviewHotels");
// sequelize.import("./models/ReviewRestaurants");
// sequelize.import("./models/ReviewTouristicPlaces");
// sequelize.import("./models/ReviewVotesCities");
// sequelize.import("./models/ReviewVotesHotels");
// sequelize.import("./models/ReviewVotesRestaurants");
// sequelize.import("./models/ReviewVotesTouristicPlaces");
// sequelize.import("./models/TouristicPlaces");
// sequelize.import("./models/Users");
// sequelize.import("./models/UsersTripCity");

module.exports = sequelize;