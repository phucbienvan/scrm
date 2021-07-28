import {
  fetchProjects,
  fetchUserInfo
} from '../services/user.ajax';

import {
  UPDATE_USER,
  COMMIT_PROJECTS,
} from './mutations';

export default {

  // Example

  async doFetchUserInfo({ commit })
  {
    try{
        const userInfo = await fetchUserInfo();
        commit(UPDATE_USER, userInfo);
    }catch(e)
    {

    }
  },

  // Project

  async doFetchProjects ({ commit }) {
    try {
      const projects = await fetchProjects();
      commit(COMMIT_PROJECTS, projects.data);
    } catch (e) {
      //
    }
  },


};
