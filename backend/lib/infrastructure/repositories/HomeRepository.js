"use strict";

const HomeRepository = require("../../domain/Home/HomeRepository");
const Product = require("../../domain/Home/Product");
const {
  Sequelize
} = require("sequelize");

const { hotels, restaurants, touristic_places, cities } = require("../orm/sequelize/relationalModel");

module.exports = class extends HomeRepository {
  async findHotels() {
    const seqHotels = await hotels.findAll({
      order: Sequelize.literal('random()'),
      // limit: 6,
      include: [{
        model: cities,
        as: "city",
        attributes: ["city_name"]
      }],
    });
    return seqHotels.map((seqHotel) => {
      return new Product({
        id: seqHotel.id,
        id_city: seqHotel.id_city,
        product_name: seqHotel.hotel_name,
        product_desc: seqHotel.hotel_desc,
        product_photos: seqHotel.hotel_photos,
        product_home_photo: seqHotel.hotel_home_photo,
        product_city: seqHotel.city.city_name,
      });
    });
  }

  async findRestaurants() {
    const seqRestaurants = await restaurants.findAll({
      order: Sequelize.literal('random()'),
      // limit: 4,
      include: [{
        model: cities,
        as: "city",
        attributes: ["city_name"]
      }],
    });
    return seqRestaurants.map((seqRestaurant) => {
      return new Product({
        id: seqRestaurant.id,
        id_city: seqRestaurant.id_city,
        product_name: seqRestaurant.restaurant_name,
        product_desc: seqRestaurant.restaurant_desc,
        product_photos: seqRestaurant.restaurant_photos,
        product_home_photo: seqRestaurant.restaurant_home_photo,
        product_city: seqRestaurant.city.city_name,
      });
    });
  }

  async findTouristicPlaces() {
    const seqTouristicPlaces = await touristic_places.findAll({
      order: Sequelize.literal('random()'),
      // limit: 6,
      include: [{
        model: cities,
        as: "city",
        attributes: ["city_name"]
      }],
    });
    return seqTouristicPlaces.map((seqTouristicPlace) => {
      return new Product({
        id: seqTouristicPlace.id,
        id_city: seqTouristicPlace.id_city,
        product_name: seqTouristicPlace.touristic_place_name,
        product_desc: seqTouristicPlace.touristic_place_desc,
        product_photos: seqTouristicPlace.touristic_place_photos,
        product_home_photo: seqTouristicPlace.touristic_place_home_photo,
        product_city: seqTouristicPlace.city.city_name,
      });
    });
  }
};