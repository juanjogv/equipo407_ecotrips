<template>
  <div class="form-inner">
    <vue-basic-alert :duration="300" :closeIn="5000" ref="alert" />
    <h2>Iniciar Sesión</h2>
    <div class="form-group">
      <label htmlFor="email">Correo electrónico:</label>
      <input type="email" ref="user" name="email" id="emailLogin" v-model="loginUserEntity.user_email" @input="updateUserEntity" />
    </div>
    <div class="form-group">
      <label htmlFor="password">Contraseña:</label>
      <input
        type="password"
        ref="password"
        name="password"
        id="passwordLogin"
        v-model="loginUserEntity.user_password"
        @input="updateUserEntity"
      />
    </div>
    <div class="row">
      <div class="col botonIzq">
        <input type="submit" value="Iniciar Sesión" @click.prevent="submitUserEntity" />
      </div>
      <div class="col botonDer">
        <input type="button" value="Registrarse" @click="changeVisibility" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoginForm",
  data() {
    return { loginUserEntity: { user_email: "", user_password: "" } };
  },
  props: { userEntity: { type: Object } },
  emits: ["update:userEntity", "submit", "changeVisibility"],
  components: {},
  methods: {
    updateUserEntity() {
      this.$emit("update:userEntity", this.loginUserEntity);
    },
    submitUserEntity() {
      if (this.verification()) this.$emit("submit");
    },
    changeVisibility() {
      this.$emit("changeVisibility");
    },
    verification() {
      let { user_email, user_password } = this.loginUserEntity;
      if (user_email == "" || user_password == "") {
        this.$refs.alert.showAlert(
          "warning",
          "Llene todo el formulario para poder seguir con el proceso de autenticacion.",
          "Formulario incompleto",
          {
            iconSize: 35,
            iconType: "solid",
            position: "top right",
          }
        );
        return false;
      }
      return true;
    },
  },
};
</script>

<style scoped>
@import "../Styles/AuthForms.css";
</style>
