const routes = [
  {
    path: '/register',
    component: () => import('modules/Auth/Pages/Register.vue'),
    name: 'register',
    meta: {
      auth: false,
    },
  },
];

export default routes;
