export const COMMIT_CITIES = 'COMMIT_CITIES';
export const COMMIT_DISTRICTS = 'COMMIT_DISTRICTS';

export default {
  [COMMIT_CITIES] (state, data) {
    state.cities = data;
  },
  [COMMIT_DISTRICTS] (state, data) {
    state.districts = data;
  },
};
