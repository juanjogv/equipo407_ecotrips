<template>
  <div class="pt-4 pb-5" v-if="filtrarProducto != ''">
    <div class="">
      <h1 class="placesTitle">Lugares turisticos</h1>
    </div>
    <div class="row justify-content-start align-items-center">
      <div class="col-sm-3 text-end" v-if="findByCity == ''">
        <h3>Creemos que te podrian interesar estos lugares</h3>
      </div>
      <div
        v-for="(place, index) in places ? filtrarProducto.slice(0, 6) : 6"
        :key="index"
        class="col-sm-3"
      >
        <img
          :src="places ? place.home_photo : imageLoader"
          alt=""
          class="img-fluid"
          v-on:click="storeProduct(place)"
        />
        <p>
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
      if (this.findByCity === "") return this.places;
      return this.places.filter((place) =>
        place.city.toLowerCase().includes(this.findByCity.toLowerCase())
      );
    },
  },
};
</script>

<style>

.placesTitle {
  font-weight: bold;
  letter-spacing: .5px;
  margin-top:2rem;
}

</style>
