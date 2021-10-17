"use strict";

const HomeController = require("../controllers/HomeController");

module.exports = {
  name: "Home",
  version: "1.0.0",
  register: async (server) => {
    server.route([
      {
        method: "GET",
        path: "/home/hotels",
        handler: HomeController.findHotels,
        options: {
          description: "Return a list of hotels for the home page",
          tags: ["api"],
        },
      },
      {
        method: "GET",
        path: "/home/restaurants",
        handler: HomeController.findRestaurants,
        options: {
          description: "Return a list of restaurants for the home page",
          tags: ["api"],
        },
      },
      {
        method: "GET",
        path: "/home/touristic_places",
        handler: HomeController.findTouristicPlace,
        options: {
          description: "Return a list of touristic places for the home page",
          tags: ["api"],
        },
      },
    ]);
  },
};
