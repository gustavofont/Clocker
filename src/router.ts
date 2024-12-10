import { createRouter, createWebHistory, RouteLocationNormalized } from 'vue-router';
import Home from './views/HomeView.vue';
import Signin from './views/SigninView.vue';
import request from '@src/utils/request';
import notify from './notifications/notify';
import { NotificationType } from './enums/notificationEnum';

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

async function isUserLogged() {
  let isLogged = false;
  try {
    isLogged = await request.post('/validate-token').then((res: any) => {
      if(res || res.response.status === 200) return true;
      return false;
    });
  } catch (error: any) {
    notify(NotificationType.INFO,'login expired');
  }
  return isLogged;
}

router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next:(any? :any) => (any)) => {
  debugger;
  const isLogged = await isUserLogged();
  if(to.path !== '/signin' && !isLogged) next({ path: '/signin'});
  else if (to.path === '/signin' && isLogged) next({path: '/'});
  next();
});

export default router;