import { get } from '../../../services/api/http';

//state
export const PASSENGERS = 'PASSENGERS';
// mutations
export const SET_PASSENGERS = 'SET_PASSENGERS';
// actions
export const FETCH_PASSENGERS = 'FETCH_PASSENGERS';

const state = {
  [PASSENGERS]: [],
};

const mutations = {
  [SET_PASSENGERS]: (state, passengers) => (state[PASSENGERS] = passengers),
};

const actions = {
  [FETCH_PASSENGERS]: ({ commit }) =>
    get('passengers').then((data) => commit(SET_PASSENGERS, data)),
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
