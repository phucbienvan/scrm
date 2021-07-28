import bearer from '@websanova/vue-auth/dist/drivers/auth/bearer';
import axios from '@websanova/vue-auth/dist/drivers/http/axios.1.x';
import router from '@websanova/vue-auth/dist/drivers/router/vue-router.2.x';

const config = {
  auth: bearer,
  http: axios,
  router,
  tokenDefaultName: 'auth-token',
  tokenStore: ['cookie'],
  notFoundRedirect: {
    path: '/user',
  },
  registerData: {
    url: '/api/v1/register',
    method: 'POST',
    redirect: '/',
  },
  loginData: {
    url: '/api/v1/login',
    method: 'POST',
    redirect: '/user',
    fetchUser: true,
  },
  logoutData: {
    url: '/api/v1/logout',
    method: 'POST',
    redirect: '/login',
    makeRequest: true,
  },
  fetchData: {
    url: '/api/v1/user',
    method: 'POST',
    enabled: true,
  },
  refreshData: { enabled: false },
  parseUserData (data) {
    return data || {};
  },
};

export default config;
