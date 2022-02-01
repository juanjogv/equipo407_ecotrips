<template>
  <div class="row auth">
    <vue-basic-alert :duration="300" :closeIn="5000" ref="alert" />
    <div class="col-sm-auto">
      <img src="../assets/img/EcoTrips_logo/TextoLogo2.png" class="img-fluid" />
    </div>
    <div class="col-sm-auto">
      <form>
        <Login v-model:user-entity="userEntity" @submit="onSubmitForm" @changeVisibility="onChangeVisibility" v-show="login" />
        <Signin v-model:user-entity="userEntity" @submit="onSubmitForm" @changeVisibility="onChangeVisibility" v-show="signin" />
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import router from "@/router/index";
import Login from "@/components/Auth/LoginForm";
import Signin from "@/components/Auth/SigninForm";
import { mapState } from "vuex";
export default {
  name: "AuthForm",
  data() {
    return {
      userEntity: {},
      login: true,
      signin: false,
    };
  },
  components: {
    Login,
    Signin,
  },
  methods: {
    onSubmitForm() {
      axios
        .post(`${process.env.VUE_APP_BACKEND_URL}/${this.login ? "login" : "signin"}`, this.userEntity)
        .then((res) => {
          if (res.data.valid) {
            localStorage.setItem("user_email", this.userEntity.user_email);
            router.push("/home");
          }
        })
        .catch((err) => {
          this.$refs.alert.showAlert("warning", err.response.data.message, "", {
            iconSize: 35,
            iconType: "solid",
            position: "top right",
          });
        });
    },
    showAlert() {},
    onChangeVisibility() {
      this.login = !this.login;
      this.signin = !this.signin;
    },
  },
  beforeCreate() {
    if (localStorage.getItem("user_email")) {
      router.push("/home");
    }
  },
  computed: mapState(["alertMessage", "alertToShow"]),
};
</script>
<style scoped>
.auth {
  height: 100vh;
  background-color: rgb(0, 190, 201);
}
</style>
