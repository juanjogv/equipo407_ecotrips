<template>
  <form>
    <div class="form-inner">
      <h2>Iniciar Sesión</h2>
      <div class="form-group">
        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" ref="user" name="email" id="emailLogin" v-model="user_email" />
      </div>
      <div class="form-group">
        <label htmlFor="password">Contraseña:</label>
        <input type="password" ref="password" name="password" id="passwordLogin" v-model="user_password" />
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
      user_email: "",
      user_password: "",
      error: "",
    };
  },
  watch: {
    user_email: function () {
      if (this.$refs.user.classList !== "") {
        this.$refs.user.classList = "";
      }
    },
    user_password: function () {
      if (this.$refs.password.classList !== "") {
        this.$refs.password.classList = "";
      }
    },
  },
  methods: {
    verification() {
      let sw = true;
      if (this.user_email === "") {
        this.$refs.user.classList = "error_no_write";
        sw = false;
      }
      if (this.user_password === "") {
        this.$refs.password.classList = "error_no_write";
        sw = false;
      }
      return sw;
    },
    submit() {
      if (this.verification()) {
        let newUser = {
          user_email: this.user_email,
          user_password: this.user_password,
        };
        axios
          .post(`${process.env.VUE_APP_BACKEND_URL}/login`, newUser)
          .then((res) => {
            if (res.data.valid) {
              localStorage.setItem("user_email", this.user_email);
              let alert = { message: "Se ha iniciado sesion en tu cuenta", alertToShow: "success" };
              this.$store.dispatch("showAlert", alert);
              router.push("/home");
            }
          })
          .catch((err) => {
            let alert = { message: err.response.data.message, alertToShow: "warning" };
            this.$store.dispatch("showAlert", alert);
          });
      } else {
        let alert = { message: "Llene todos los campos", alertToShow: "danger" };
        this.$store.dispatch("showAlert", alert);
      }
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
