<template>
  <div class="row auth">
    <div class="col-sm-auto">
      <img src="../assets/img/EcoTrips_logo/TextoLogo2.png" class="img-fluid" />
    </div>
    <div class="col-sm-auto">
      <Login v-show="login" :method="changeVisibility" />
      <Signin v-show="signin" :method="changeVisibility" />
    </div>
  </div>
</template>
<script>
import Login from "@/components/Auth/LoginForm";
import Signin from "@/components/Auth/SigninForm";
import router from "@/router/index";
export default {
  beforeCreate() {
    if (localStorage.getItem("user_email")) {
      router.push("/home");
    }
  },
  components: {
    Login,
    Signin,
  },
  data() {
    return {
      login: true,
      signin: false,
    };
  },
  methods: {
    changeVisibility() {
      this.login = !this.login;
      this.signin = !this.signin;
    },
  },
};
</script>
<style scoped>
.auth {
  height: 100vh;
  background-color: rgb(0, 190, 201);
}
</style>
