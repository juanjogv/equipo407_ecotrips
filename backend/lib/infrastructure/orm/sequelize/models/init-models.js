var DataTypes = require("sequelize").DataTypes;
var _booking_hotels = require("./BookingHotels");
var _booking_restaurants = require("./BookingRestaurants");
var _cities = require("./Cities");
var _departments = require("./Departments");
var _hotels = require("./Hotels");
var _restaurants = require("./Restaurants");
var _review_cities = require("./ReviewCities");
var _review_hotels = require("./ReviewHotels");
var _review_restaurants = require("./ReviewRestaurants");
var _review_touristic_places = require("./ReviewTouristicPlaces");
var _review_votes_cities = require("./ReviewVotesCities");
var _review_votes_hotels = require("./ReviewVotesHotels");
var _review_votes_restaurants = require("./ReviewVotesRestaurants");
var _review_votes_touristic_places = require("./ReviewVotesTouristicPlaces");
var _touristic_places = require("./TouristicPlaces");
var _users = require("./Users");
var _users_trip_city = require("./UsersTripCity");

function initModels(sequelize) {
  var booking_hotels = _booking_hotels(sequelize, DataTypes);
  var booking_restaurants = _booking_restaurants(sequelize, DataTypes);
  var cities = _cities(sequelize, DataTypes);
  var departments = _departments(sequelize, DataTypes);
  var hotels = _hotels(sequelize, DataTypes);
  var restaurants = _restaurants(sequelize, DataTypes);
  var review_cities = _review_cities(sequelize, DataTypes);
  var review_hotels = _review_hotels(sequelize, DataTypes);
  var review_restaurants = _review_restaurants(sequelize, DataTypes);
  var review_touristic_places = _review_touristic_places(sequelize, DataTypes);
  var review_votes_cities = _review_votes_cities(sequelize, DataTypes);
  var review_votes_hotels = _review_votes_hotels(sequelize, DataTypes);
  var review_votes_restaurants = _review_votes_restaurants(sequelize, DataTypes);
  var review_votes_touristic_places = _review_votes_touristic_places(sequelize, DataTypes);
  var touristic_places = _touristic_places(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var users_trip_city = _users_trip_city(sequelize, DataTypes);

  hotels.belongsTo(cities, { as: "city", foreignKey: "id_city" });
  cities.hasMany(hotels, { as: "hotels", foreignKey: "id_city" });
  restaurants.belongsTo(cities, { as: "city", foreignKey: "id_city" });
  cities.hasMany(restaurants, { as: "restaurants", foreignKey: "id_city" });
  review_cities.belongsTo(cities, { as: "id_city_city", foreignKey: "id_city" });
  cities.hasMany(review_cities, { as: "review_cities", foreignKey: "id_city" });
  touristic_places.belongsTo(cities, { as: "city", foreignKey: "id_city" });
  cities.hasMany(touristic_places, { as: "touristic_places", foreignKey: "id_city" });
  users_trip_city.belongsTo(cities, { as: "id_city_city", foreignKey: "id_city" });
  cities.hasMany(users_trip_city, { as: "users_trip_cities", foreignKey: "id_city" });
  cities.belongsTo(departments, { as: "id_department_department", foreignKey: "id_department" });
  departments.hasMany(cities, { as: "cities", foreignKey: "id_department" });
  booking_restaurants.belongsTo(restaurants, { as: "id_restaurant_restaurant", foreignKey: "id_restaurant" });
  restaurants.hasMany(booking_restaurants, { as: "booking_restaurants", foreignKey: "id_restaurant" });
  review_restaurants.belongsTo(restaurants, { as: "id_restaurant_restaurant", foreignKey: "id_restaurant" });
  restaurants.hasMany(review_restaurants, { as: "review_restaurants", foreignKey: "id_restaurant" });
  booking_hotels.belongsTo(review_hotels, { as: "id_hotel_review_hotel", foreignKey: "id_hotel" });
  review_hotels.hasMany(booking_hotels, { as: "booking_hotels", foreignKey: "id_hotel" });
  review_hotels.belongsTo(hotels, { as: "id_hotel_hotel", foreignKey: "id_hotel" });
  review_hotels.hasMany(review_hotels, { as: "review_hotels", foreignKey: "id_hotel" });
  review_votes_hotels.belongsTo(review_hotels, { as: "id_review_review_hotel", foreignKey: "id_review" });
  review_hotels.hasMany(review_votes_hotels, { as: "review_votes_hotels", foreignKey: "id_review" });
  review_votes_cities.belongsTo(review_touristic_places, { as: "id_review_review_touristic_place", foreignKey: "id_review" });
  review_touristic_places.hasMany(review_votes_cities, { as: "review_votes_cities", foreignKey: "id_review" });
  review_votes_restaurants.belongsTo(review_touristic_places, { as: "id_review_review_touristic_place", foreignKey: "id_review" });
  review_touristic_places.hasMany(review_votes_restaurants, { as: "review_votes_restaurants", foreignKey: "id_review" });
  review_votes_touristic_places.belongsTo(review_touristic_places, { as: "id_review_review_touristic_place", foreignKey: "id_review" });
  review_touristic_places.hasMany(review_votes_touristic_places, { as: "review_votes_touristic_places", foreignKey: "id_review" });
  review_touristic_places.belongsTo(touristic_places, { as: "id_touristic_place_touristic_place", foreignKey: "id_touristic_place" });
  touristic_places.hasMany(review_touristic_places, { as: "review_touristic_places", foreignKey: "id_touristic_place" });
  booking_hotels.belongsTo(users, { as: "id_user_user", foreignKey: "id_user" });
  users.hasMany(booking_hotels, { as: "booking_hotels", foreignKey: "id_user" });
  booking_restaurants.belongsTo(users, { as: "id_user_user", foreignKey: "id_user" });
  users.hasMany(booking_restaurants, { as: "booking_restaurants", foreignKey: "id_user" });
  review_cities.belongsTo(users, { as: "id_user_user", foreignKey: "id_user" });
  users.hasMany(review_cities, { as: "review_cities", foreignKey: "id_user" });
  review_hotels.belongsTo(users, { as: "id_user_user", foreignKey: "id_user" });
  users.hasMany(review_hotels, { as: "review_hotels", foreignKey: "id_user" });
  review_restaurants.belongsTo(users, { as: "id_user_user", foreignKey: "id_user" });
  users.hasMany(review_restaurants, { as: "review_restaurants", foreignKey: "id_user" });
  review_touristic_places.belongsTo(users, { as: "id_user_user", foreignKey: "id_user" });
  users.hasMany(review_touristic_places, { as: "review_touristic_places", foreignKey: "id_user" });
  review_votes_cities.belongsTo(users, { as: "id_user_user", foreignKey: "id_user" });
  users.hasMany(review_votes_cities, { as: "review_votes_cities", foreignKey: "id_user" });
  review_votes_hotels.belongsTo(users, { as: "id_user_user", foreignKey: "id_user" });
  users.hasMany(review_votes_hotels, { as: "review_votes_hotels", foreignKey: "id_user" });
  review_votes_restaurants.belongsTo(users, { as: "id_user_user", foreignKey: "id_user" });
  users.hasMany(review_votes_restaurants, { as: "review_votes_restaurants", foreignKey: "id_user" });
  review_votes_touristic_places.belongsTo(users, { as: "id_user_user", foreignKey: "id_user" });
  users.hasMany(review_votes_touristic_places, { as: "review_votes_touristic_places", foreignKey: "id_user" });
  users_trip_city.belongsTo(users, { as: "id_user_user", foreignKey: "id_user" });
  users.hasMany(users_trip_city, { as: "users_trip_cities", foreignKey: "id_user" });

  return {
    booking_hotels,
    booking_restaurants,
    cities,
    departments,
    hotels,
    restaurants,
    review_cities,
    review_hotels,
    review_restaurants,
    review_touristic_places,
    review_votes_cities,
    review_votes_hotels,
    review_votes_restaurants,
    review_votes_touristic_places,
    touristic_places,
    users,
    users_trip_city,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
