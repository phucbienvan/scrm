import { fetchCities, fetchDistricts, fetchDistrictByIdCity } from '../services/common.ajax';
import { COMMIT_CITIES, COMMIT_DISTRICTS } from './mutations';

export default {
  async doFetchCities ({ commit }) {
    try {
      const cities = await fetchCities();
      commit(
        COMMIT_CITIES,
        cities.data.map((item) => ({ label: item.name, value: item.id })),
      );
    } catch (e) {
      //
    }
  },

  async doFetchDistricts ({ commit }) {
    try {
      const districts = await fetchDistricts();
      commit(
        COMMIT_DISTRICTS,
        districts.data.map((item) => ({ label: item.name, value: item.id })),
      );
    } catch (e) {
      //
    }
  },

  async doFetchDistrictByIdCity ({ commit }, id) {
    try {
      const districts = await fetchDistrictByIdCity(id);
      commit(
        COMMIT_DISTRICTS,
        districts.data.map((item) => ({ label: item.name, value: item.id })),
      );
    } catch (e) {
      //
    }
  },
};
