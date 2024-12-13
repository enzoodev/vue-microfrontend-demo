import { createPinia } from "pinia";
import { createApp } from "vue";
// window.useStore
import App from "./App.vue";
import { router } from "./router";
import "./stores/counter";

const app = createApp(App);
app.use(createPinia()).use(router);
app.mount("#app");
