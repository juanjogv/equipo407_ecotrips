<template>
  <div class="row auth">
    <div class="d-flex justify-content-center align-items-center" v-if="showAuthErrRegister" style="position: absolute">
      <div class="model-err-register">
        <div class="body-model-err-register">
          <h4 class="text-center">!Porfavor digita los datos faltantes¡</h4>
        </div>
      </div>
    </div>
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
import { mapState } from "vuex";
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
  computed: mapState(["showAuthErrRegister"]),
};
</script>
<style scoped>
.auth {
  height: 100vh;
  background-color: rgb(0, 190, 201);
}
</style>
