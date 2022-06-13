import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from "axios";
import VueAxios from "vue-axios";
App.use(ElementUI);
App.use(VueAxios,axios)
App.config.productionTip = false


createApp(App).use(store).use(router).mount('#app')
