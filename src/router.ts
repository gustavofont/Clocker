import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/HomeView.vue';
import Signin from './views/SigninView.vue';
import Signup from './views/SignupView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => Home,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/signin',
    name: 'login',
    component: () => Signin,
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => Signup,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;