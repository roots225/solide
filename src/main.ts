import { createApp } from "vue";
import "./styles/main.scss";
import App from "./App.vue";
import useRouter from "@/router";

const app = createApp(App);
useRouter(app);
app.mount("#app");
