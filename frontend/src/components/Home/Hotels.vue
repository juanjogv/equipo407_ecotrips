<template>
  <div class="hotelsContainer" v-if="filtrarProducto != ''">
    <div>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        @click="clickArrow(1)"
        width="30" height="30" 
        fill="currentColor" 
        class="bi bi-arrow-left mx-5" 
        viewBox="0 0 16 16">
        <path 
          fill-rule="evenodd" 
          :d="'M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 '
          + '0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 '
          + '4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z'"/>
      </svg>
    </div>
    <div class="my-5">
      <div class="mb-5">
        <h1 class="placesTitle">Alojamientos</h1>
      </div>
      <div class="elementsContainer justify-content-end align-items-center">
        <div class="element">
          <img
              :src="hotels ? filtrarProducto[elements[0]].home_photo : imageLoader"
              alt=""
              class="img-fluid"
              style="border-radius: 7px;"
              v-on:click="storeProduct(hotel)"
            />
          <p class="elementName">{{ hotels ? filtrarProducto[elements[1]].name : "Loading..." }}</p>
        </div>
        <div class="element">
          <img
              :src="hotels ? filtrarProducto[elements[1]].home_photo : imageLoader"
              alt=""
              class="img-fluid"
              style="border-radius: 7px;"
              v-on:click="storeProduct(hotel)"
            />
          <p class="elementName">{{ hotels ? filtrarProducto[elements[2]].name : "Loading..." }}</p>
        </div>
        <div class="element">
          <img
              :src="hotels ? filtrarProducto[elements[2]].home_photo : imageLoader"
              alt=""
              class="img-fluid"
              style="border-radius: 7px;"
              v-on:click="storeProduct(hotel)"
            />
          <p class="elementName">{{ hotels ? filtrarProducto[elements[3]].name : "Loading..." }}</p>
        </div>
        <div class="element">
          <img
              :src="hotels ? filtrarProducto[elements[3]].home_photo : imageLoader"
              alt=""
              class="img-fluid"
              style="border-radius: 7px;"
              v-on:click="storeProduct(hotel)"
            />
          <p class="elementName">{{ hotels ? filtrarProducto[elements[3]].name : "Loading..." }}</p>
        </div>

        <!-- <div v-for="(hotel, index) in hotels ? filtrarProducto.slice(start, final) : 4" :key="index" class="element">
          <img
            :src="hotels ? hotel.home_photo : imageLoader"
            alt=""
            class="img-fluid"
            style="border-radius: 7px;"
            v-on:click="storeProduct(hotel)"
          />
          <p class="elementName">{{ hotels ? hotel.name : "Loading..." }}</p>
        </div> -->
      </div>
    </div>
    <div>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        @click="clickArrow(2)"
        width="30" height="30" 
        fill="currentColor" 
        class="bi bi-arrow-right mx-5" 
        viewBox="0 0 16 16">
        <path 
          fill-rule="evenodd" 
          :d='"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 " 
          + ".708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 "
          + "0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"'/>
      </svg>
    </div>
  </div>
</template>

<script>
import router from "@/router/index";
import { mapState } from "vuex";
export default {
  name: "Hotels",
  props: ["hotels", "findByCity"],
  data() {
    return {
      elements : [0, 1, 2, 3],
    };
  },
  mounted() {},
  methods: {
    storeProduct(product) {
      this.$store.commit("addProductToShow", product);
      this.$store.commit("setProductType", "hotel");
      router.push("/product");
    },
    calcPositionOfArray(option, value1){
      if(option === 1){
        if((value1 - 4) < 0){
          return (this.filtrarProducto.length + ((value1 - 4)));
        }
        return value1 - 4;
      } else {
        if((value1 + 4) >= this.filtrarProducto.length){
          console.log(this.filtrarProducto.length - ((value1 + 4)))
          return Math.abs(this.filtrarProducto.length - ((value1 + 4)));
        }
        return value1 + 4;
      }
    },
    clickArrow(option){
      if(option === 1){
        //this.elements[0] = this.elements[0] - this.elements[0];
        this.elements[0] = this.calcPositionOfArray(option, this.elements[0]);
        this.elements[1] = this.calcPositionOfArray(option, this.elements[1]);
        this.elements[2] = this.calcPositionOfArray(option, this.elements[2]);
        this.elements[3] = this.calcPositionOfArray(option, this.elements[3]);
      } else {
        this.elements[0] = this.calcPositionOfArray(option, this.elements[0]);
        this.elements[1] = this.calcPositionOfArray(option, this.elements[1]);
        this.elements[2] = this.calcPositionOfArray(option, this.elements[2]);
        this.elements[3] = this.calcPositionOfArray(option, this.elements[3]);
      }
    }
  },
  computed: {
    ...mapState(["imageLoader"]),
    filtrarProducto() {
      if (this.findByCity === "") return this.hotels;
      return this.hotels.filter((hotel) => hotel.city.toLowerCase().includes(this.findByCity.toLowerCase()));
    },
  },
};
</script>

<style scoped>
.hotelsContainer {
  align-items: center;
  background: #4ec077;
  display:flex;
  justify-content: center;
}

.placesTitle {
  font-weight: bold;
  font-size: 2.8rem;
  margin-top:0;
  margin-bottom:0;
}

.elementName {
  margin-top:0;
  margin-bottom:0;
}

.bi-arrow-right:hover, .bi-arrow-left:hover {
  color:white;
  cursor: pointer;
  transition: 500ms;
}

.element:hover {
  color: white;
  opacity: 0.6;
  transition: 800ms;
}
</style>
