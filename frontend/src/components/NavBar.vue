<template>
  <nav ref="nav" class="navbar navbar-dark navbar-expand-lg border-bottom">
    <div class="container">
      <router-link to="/home" class="navbar-brand mb-0 h1">
        <img src="../assets/img/EcoTrips_logo/EcoTrips.png" class="img-fluid" width="45" alt="Ecotrips logo" />
        <img src="../assets/img/EcoTrips_logo/TextoNegro.png" class="img-fluid" width="100" alt="Ecotrips logo" />
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" style="color: black">&#9776;</span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
        <ul class="navbar-nav">
          <li class="nav-item d-flex" v-if="email == null">
            <router-link to="/auth" class="nav-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-login"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                <path d="M20 12h-13l3 -3m0 6l-3 -3" />
              </svg>
              Login
            </router-link>
          </li>
          <li class="nav-item d-flex btn" v-else @click="logout" style="font-size: 1.5rem !important">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-logout"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
              <path d="M7 12h14l-3 -3m0 6l3 -3" />
            </svg>
            Logout
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      email: localStorage.getItem("user_email"),
    };
  },
  methods: {
    logout() {
      localStorage.clear("user_email");
      this.email = null;
      alert("Se cerro sesión correctamente");
    },
  },
};
</script>

<style scoped>
nav {
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 1;
}

.nav-link {
  color: black !important;
}

form input,
button,
a {
  font-size: 1.5rem !important;
}
</style>
