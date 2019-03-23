import Vue from 'vue';
import Router from 'vue-router';
import Home from '../assets/pages/home/Home';
import City from '../assets/pages/city/City';
import Detail from '../assets/pages/detail/Detail';

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
    },
    {
      path: '/detail/:id',
      name: '/Detail',
      component: Detail
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
