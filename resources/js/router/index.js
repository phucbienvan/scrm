import Vue from 'vue';
import VueRouter from 'vue-router';
import sCRM from 'sCRM.vue';
import UserRoutes from '../modules/User/router';
import AuthRoutes from '../modules/Auth/routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.MIX_PUBLISH_APP_URL,
  routes: [
    {
      path: '/',
      component: sCRM,
      meta: {
        auth: true,
      },
      children: [
        ...UserRoutes,
        ...AuthRoutes,
      ],
    },
  ],
});

export default router;
