<template>
  <form>
    <div class="form-inner">
      <h2>Iniciar Sesión</h2>
      <div class="form-group">
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          name="email"
          id="emailLogin"
          v-model="user.user_email"
        />
      </div>
      <div class="form-group">
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          name="password"
          id="passwordLogin"
          v-model="user.user_password"
        />
      </div>
      <div class="row">
        <div class="col botonIzq">
          <input type="submit" value="Iniciar Sesión" @click.prevent="submit" />
        </div>
        <div class="col botonDer">
          <input type="button" value="Registrarse" @click="changeVisibility" />
        </div>
      </div>
    </div>
  </form>
</template>
<script>
import axios from "axios";
import router from "@/router/index";
export default {
  props: {
    method: { type: Function },
  },
  data() {
    return {
      user: { user_email: "", user_password: "" },
    };
  },
  methods: {
    submit() {
      axios
        .post(`${process.env.VUE_APP_BACKEND_URL}/login`, this.user)
        .then((res) => {
          if (res.data.valid) {
            localStorage.setItem("user_email", this.user.user_email);
            router.push("/home");
          } else {
            alert(res.data.msg);
          }
        });
    },
    changeVisibility() {
      this.method();
    },
  },
};
</script>

<style scoped>
@import "../Styles/AuthForms.css";
</style>
