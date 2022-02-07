import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css"

import router from "./router/index";
import GStore from "./store/index";

createApp(App).provide("state", GStore).use(router).mount('#app')
