<template>
  <form>
    <div class="form-inner">
      <h2>Registrarse</h2>
      <div class="form-group">
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          name="first-name"
          id="first-name"
          v-model="user.user_first_name"
        />
      </div>
      <div class="form-group">
        <label htmlFor="name">Apellido:</label>
        <input
          type="text"
          name="last-name"
          id="last-name"
          v-model="user.user_last_name"
        />
      </div>
      <div class="form-group">
        <label htmlFor="name">Documento de Identidad:</label>
        <input type="text" name="idUser" id="idUser" v-model="user.user_id" />
      </div>
      <div class="form-group">
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          name="email"
          id="emailSignin"
          v-model="user.user_email"
        />
      </div>
      <div class="form-group">
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          name="password"
          id="passwordSignin"
          v-model="user.user_password"
        />
      </div>
      <div class="row">
        <div class="col botonIzq">
          <input type="submit" value="Registrarse" @click.prevent="submit" />
        </div>
        <div class="col botonDer">
          <input type="button" value="Iniciar Sesión" @click="changeVisibility" />
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
      user: {
        user_first_name: "",
        user_last_name: "",
        user_id: "",
        user_email: "",
        user_password: "",
      },
    };
  },
  methods: {
    submit() {
      axios
        .post(`${process.env.VUE_APP_BACKEND_URL}/signin`, this.user)
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
