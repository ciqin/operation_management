// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource'
import User from './components/user/user'
import Login from './components/login/login'
import Hospital from './components/doctor/doctor'
import Revise from './components/revise/revise'
import Enroll from './components/enroll/enroll'

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  linkActiveClass:'active',
  base: __dirname,
  routes: [
    { path: '/', name: 'login', component: Login },
    { path: '/user', name: 'user', component: User },
    { path: '/hospital', name: 'hospital', component: Hospital },
    { path: '/revise', name: 'revise', component: Revise },
    { path: '/enroll', name: 'enroll', component: Enroll }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
