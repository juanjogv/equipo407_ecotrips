<template>
  <div id="map" />
</template>

<script>
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      mapboxgl.accessToken =
        "pk.eyJ1IjoianVhbmpvZ3YiLCJhIjoiY2tzdGE5bjFmMTN6dzJvcG84a2locHA0MSJ9.JuMq5YMkJnQZQmpU5U5RQA";
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        center: [-74.624597, 4.672011], // starting position [lng, lat]
        zoom: 4.5, // starting zoom
      });
      map.on("load", () => {
        // TODO: Here we want to load a layer
        // TODO: Here we want to load/setup the popup
      });
    });
    return {};
  },
};
</script>

<style>
#map {
  height: 25vh;
}
</style>
