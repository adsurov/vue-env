import { createApp } from "vue";
import App from "./App.vue";

// import "./assets/main.css";

console.log('env files', import.meta.env) 

createApp(App).mount("#app");

