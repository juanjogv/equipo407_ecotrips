<template>
  <div class="form-inner">
    <vue-basic-alert :duration="300" :closeIn="5000" ref="alert" />
    <h2>Registrarse</h2>
    <div class="form-group">
      <label htmlFor="name">Nombre:</label>
      <input
        ref="name"
        type="text"
        name="first-name"
        id="first-name"
        v-model="signinUserEntity.user_first_name"
        @input="updateUserEntity"
      />
    </div>
    <div class="form-group">
      <label htmlFor="name">Apellido:</label>
      <input
        ref="lastname"
        type="text"
        name="last-name"
        id="last-name"
        v-model="signinUserEntity.user_last_name"
        @input="updateUserEntity"
      />
    </div>
    <div class="form-group">
      <label htmlFor="name">Documento de Identidad:</label>
      <input ref="id" type="text" name="idUser" id="idUser" v-model="signinUserEntity.user_id" @input="updateUserEntity" />
    </div>
    <div class="form-group">
      <label htmlFor="email">Correo electrónico:</label>
      <input ref="email" type="email" name="email" id="emailSignin" v-model="signinUserEntity.user_email" @input="updateUserEntity" />
    </div>
    <div class="form-group">
      <label htmlFor="password">Contraseña:</label>
      <input
        type="password"
        ref="password"
        name="password"
        id="passwordSignin"
        v-model="signinUserEntity.user_password"
        @input="updateUserEntity"
      />
    </div>
    <div class="row">
      <div class="col botonIzq">
        <input type="submit" value="Registrarse" @click.prevent="submitUserEntity" />
      </div>
      <div class="col botonDer">
        <input type="button" value="Iniciar Sesión" @click="changeVisibility" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SigninForm",
  data() {
    return {
      signinUserEntity: {
        user_first_name: "",
        user_last_name: "",
        user_id: "",
        user_email: "",
        user_password: "",
      },
    };
  },
  props: {
    method: { type: Function },
  },
  emits: ["update:userEntity", "submit", "changeVisibility"],
  components: {},
  methods: {
    updateUserEntity() {
      this.$emit("update:userEntity", this.signinUserEntity);
    },
    submitUserEntity() {
      if (this.verification()) this.$emit("submit");
    },
    changeVisibility() {
      this.$emit("changeVisibility");
    },
    verification() {
      let { user_first_name, user_last_name, user_id, user_email, user_password } = this.signinUserEntity;

      if (user_first_name == "" || user_last_name == "" || user_id == "" || user_email == "" || user_password == "") {
        this.$refs.alert.showAlert(
          "warning",
          "Llene todo el formulario para poder seguir con el proceso de registro.",
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
