import Vue from 'vue';

export const standardGet = async (path, params = {}, headers = {}) => {
  const { data } = await Vue.axios.get(path, { params, headers });
  return data;
};

export const standardPost = async (path, params = {}, configs = {}) => {
  const { data } = await Vue.axios.post(path, params, configs);
  return data;
};

// use post to send form-data, since our form may have image file.
// https://github.com/laravel/framework/issues/13457
export const standardPut = async (path, params = null, configs = {}) => {
  const pp = params;
  if (pp !== null) { pp.append('_method', 'PUT'); }
  const { data } = await Vue.axios.post(path, pp, configs);
  return data;
};

export const standardDelete = async (path, params = {}, configs = {}) => {
  const { data } = await Vue.axios.delete(path, params, configs);
  return data;
};
