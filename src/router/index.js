import Vue from 'vue';
import Router from 'vue-router';
import Home from '../assets/pages/home/Home';
import City from '../assets/pages/city/City';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: '/City',
      component: City
    }
  ]
})
