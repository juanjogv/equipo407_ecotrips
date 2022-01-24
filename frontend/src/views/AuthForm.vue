<template>
  <div class="row auth">
    <DangerAlert v-if="alertToShow == 'danger'">{{ alertMessage }}</DangerAlert>
    <WarningAlert v-if="alertToShow == 'warning'">{{ alertMessage }}</WarningAlert>
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
import DangerAlert from "@/components/Alerts/DangerAlert";
import WarningAlert from "@/components/Alerts/WarningAlert";
import router from "@/router/index";
import { mapState } from "vuex";
export default {
  name: "AuthForm",
  beforeCreate() {
    if (localStorage.getItem("user_email")) {
      router.push("/home");
    }
  },
  components: {
    Login,
    Signin,
    DangerAlert,
    WarningAlert,
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
  computed: mapState(["alertMessage", "alertToShow"]),
};
</script>
<style scoped>
.auth {
  height: 100vh;
  background-color: rgb(0, 190, 201);
}
</style>
