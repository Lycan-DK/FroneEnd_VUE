// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import axios from 'axios'
import 'vuetify/dist/vuetify.min.css'

window.Bus=new Vue;
window.axios=axios

window.token= localStorage.getItem('token');
window.user= localStorage.getItem('user');

axios.defaults.baseURL = 'http://127.0.0.1:5000/';
axios.defaults.headers.common['Authorization'] = "Basic RGlrc2hhbnQ6MTIzNDA= ";
axios.defaults.headers.post['Content-Type'] = 'application/json';

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
