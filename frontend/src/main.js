import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueBasicAlert from "vue-basic-alert";

createApp(App).use(store).use(router).use(VueBasicAlert).mount("#app");
