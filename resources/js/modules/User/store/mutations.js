
export const COMMIT_PROJECTS = 'COMMIT_PROJECTS';
export const UPDATE_USER = 'UPDATE_USER';

export default {
  // example
  [UPDATE_USER](state, data)
  {
    state.userinfo = data;
  },

  // project
  [COMMIT_PROJECTS] (state, data) {
    state.projects = data;
  },

};
