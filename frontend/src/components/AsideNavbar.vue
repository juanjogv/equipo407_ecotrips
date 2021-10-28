<template>
  <div id="sidenavParent">
    <div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav()"
        >&times;</a
      >
      <router-link to="/" class="nav-link"> About </router-link>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </div>
    <button type="button" class="btn btn-outline-dark" @click="openNav()">
      &#9776;
    </button>
  </div>
</template>
<script>
export default {
  name: "AsideNavbar",
  components: {},
  methods: {
    openNav() {
      document.getElementById("mySidenav").style.width = "250px";
      this.$emit("method");
    },

    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      this.$emit("method");
    },
  },
};
</script>
<style scoped>

body {
  font-family: "Lato", sans-serif;
  transition: background-color 0.5s;
}

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

button {
  margin-top: 1vw;
  margin-left: 1vw;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>
