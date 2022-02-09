<template>
  <div class="pt-4 pb-5 GlobalContainer" v-if="filtrarProducto != ''">
    <div>
      <h1 class="placesTitle">Lugares turísticos</h1>
    </div>
    <div class="elementsContainer justify-content-start align-items-center mt-5">
      <div class="elementIsText" v-if="findByCity == ''">
        <h3 style="font-size: 25px; width: 80%">Creemos que te podrían interesar estos lugares.</h3>
      </div>
      <div v-for="(place, index) in places ? filtrarProducto.slice(0, 6) : 6" :key="index" class="element">
        <img
          :src="places ? place.home_photo : imageLoader"
          alt=""
          class="img-fluid"
          style="border-radius: 15px"
          v-on:click="storeProduct(place)"
        />
        <p class="elementName">
          {{ places ? place.name : "Loading..." }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router/index";
import { mapState } from "vuex";
export default {
  name: "Places",
  props: ["places", "findByCity"],
  data() {
    return {};
  },
  mounted() {},
  methods: {
    storeProduct(product) {
      this.$store.commit("addProductToShow", product);
      this.$store.commit("setProductType", "place");
      router.push("/product");
    },
  },
  computed: {
    ...mapState(["imageLoader"]),
    filtrarProducto() {
      if (this.findByCity === "" || !this.places) return this.places;
      return this.places.filter((place) => place.city.toLowerCase().includes(this.findByCity.toLowerCase()));
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Cabin+Condensed&display=swap");

.element:hover {
  cursor: pointer;
  opacity: 0.8;
}

.elementsContainer {
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
}

.elementIsText {
  height: 100%;
  text-align: left;
  margin-top: 6rem;
}

.elementName {
  font-family: "Cabin Condensed", sans-serif;
  letter-spacing: 1px;
  font-size: 17px;
  font-weight: bold;
  margin-top: 0.5rem;
}
.placesTitle {
  font-weight: bold;
  font-size: 2.8rem;
  margin-top: 2rem;
}

@media (max-width: 991px) {
  .elementsContainer {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 767px) {
  .elementsContainer {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 575px) {
  .GlobalContainer {
    --size: 3rem;
    padding-left: var(--size);
    padding-right: var(--size);
  }
}

@media (max-width: 565px) {
  .elementsContainer {
    grid-template-columns: 1fr;
  }
}
</style>
