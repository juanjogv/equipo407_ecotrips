import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    places: null,
    hotels: null,
    restaurants: null,
    productToShow: {},
    productType: null,
    imageLoader: require("../assets/loading.gif"),
    alertMessage: '',
    alertToShow: '',
  },
  mutations: {
    addProductToShow(state, product) {
      state.productToShow = product;
    },
    setPlaces(state, places) {
      if (!state.places) state.places = places;
    },
    setHotels(state, hotels) {
      if (!state.hotels) state.hotels = hotels;
    },
    setRestaurants(state, restaurants) {
      if (!state.restaurants) state.restaurants = restaurants;
    },
    setProductType(state, productType) {
      state.productType = productType;
    },
    showAlert(state, alert) {
      state.alertMessage = alert.message;
      state.alertToShow = alert.alertToShow;
      setTimeout(() => {
        state.alertMessage = "";
        state.alertToShow = "";
      }, 5000);
    },
  },
  getters: {},
  actions: {
    loadProducts({ commit }) {
      setTimeout(() => {
        axios
          .get(`${process.env.VUE_APP_BACKEND_URL}/home/touristic_places`)
          .then((res) => commit("setPlaces", res.data))
          .catch((error) => console.error(error));
      }, 1000);
      setTimeout(() => {
        axios
          .get(`${process.env.VUE_APP_BACKEND_URL}/home/hotels`)
          .then((res) => commit("setHotels", res.data))
          .catch((error) => console.error(error));
      }, 1000);
      setTimeout(() => {
        axios
          .get(`${process.env.VUE_APP_BACKEND_URL}/home/restaurants`)
          .then((res) => commit("setRestaurants", res.data))
          .catch((error) => console.error(error));
      }, 1000);
    },
    showAlert({ commit },alert) {
      commit("showAlert", alert);
    },
  },
  modules: {},
});
