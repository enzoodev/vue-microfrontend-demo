import { createPinia } from "pinia";
import { state } from "shared";
import { createApp } from "vue";
// window.useStore
import App from "./App.vue";
import { router } from "./router";
import "./stores/counter";

state.message = "Hello from host!";

const app = createApp(App);
app.use(createPinia()).use(router);
app.mount("#app");
