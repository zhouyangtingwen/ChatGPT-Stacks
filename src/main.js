import { createApp } from "vue";
import i18n from "./language/i18n"
import naive from 'naive-ui'
import "./style.css";
import App from "./App.vue";

createApp(App).use(naive).use(i18n).mount("#app");
