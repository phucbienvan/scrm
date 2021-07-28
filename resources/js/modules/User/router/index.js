import MainApp from '../Main.vue';

const routes = [
  {
    path: '/user',
    component: MainApp,
    children: [
      // children routes go here
      // hello world
      {
        path: 'hello',
        component: () => import(/* webpackChunkName: "user/projects" */ 'modules/User/pages/Example/Hello.vue'),
        name: 'hello',
      },

      // Project
      {
        path: 'projects',
        component: () => import(/* webpackChunkName: "user/projects" */ 'modules/User/pages/Projects/index.vue'),
        name: 'projects',
      },
    ],
  },
];

export default routes;
