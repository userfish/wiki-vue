import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from "axios";


Vue.config.productionTip = false
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';


new Vue({
  vuetify,
  axios,
  render: h => h(App)
}).$mount('#app')
