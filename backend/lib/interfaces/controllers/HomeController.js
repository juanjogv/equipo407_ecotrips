"use strict";

const Boom = require("@hapi/boom");
const ListHotels = require("../../application/use_cases/Home/ListHotels");
const ListRestaurants = require("../../application/use_cases/Home/ListRestaurants");
const ListTouristicPlaces = require("../../application/use_cases/Home/ListTouristicPlaces");

module.exports = {
  async findHotels(request) {
    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Treatment
    const hotels = await ListHotels(serviceLocator);

    // Output
    return hotels.map(serviceLocator.productSerializer.serialize);
  },

  async findRestaurants(request) {
    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Treatment
    const restaurants = await ListRestaurants(serviceLocator);

    // Output
    return restaurants.map(serviceLocator.productSerializer.serialize);
  },

  async findTouristicPlace(request) {
    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Treatment
    const touristicPlaces = await ListTouristicPlaces(serviceLocator);

    // Output
    return touristicPlaces.map(
      serviceLocator.productSerializer.serialize
    );
  },
}