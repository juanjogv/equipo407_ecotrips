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
      mapboxgl.accessToken = "pk.eyJ1IjoianVhbmpvZ3YiLCJhIjoiY2tzdGE5bjFmMTN6dzJvcG84a2locHA0MSJ9.JuMq5YMkJnQZQmpU5U5RQA";
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        center: [-75.6015099, 6.2456602], // starting position [lng, lat]
        zoom: 15, // starting zoom
      });
      map.on("load", () => {
        console.log("me cargue");
        // TODO: Here we want to load a layer
        // TODO: Here we want to load/setup the popup
      });
      new mapboxgl.Marker().setLngLat([-75.6015099, 6.2456602]).addTo(map);
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
