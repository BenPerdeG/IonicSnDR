import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Inicio from '../views/Inicio.vue';
import Login from '../views/Login.vue';
import QandA from '../views/Q&A.vue';
import MyGames from '../views/My_games.vue';
import Search from '../views/Search.vue';
import Profile from '../views/Profile.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/games',
    name: 'Games',
    component: MyGames
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/q&a',
    name: 'Q&A',
    component: QandA
  },
  {
    path: '/inicio',
    name: 'Home',
    component: Inicio
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
