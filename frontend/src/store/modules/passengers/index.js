/* eslint no-param-reassign: ["error", { "props": false }] */
import { get } from '../../../services/api/http';

// state
export const PASSENGERS = 'PASSENGERS';
// mutations
export const SET_PASSENGERS = 'SET_PASSENGERS';
// actions
export const FETCH_PASSENGERS = 'FETCH_PASSENGERS';

const state = {
  [PASSENGERS]: [],
};

const mutations = {
  [SET_PASSENGERS]: (s, passengers) => {
    s[PASSENGERS] = passengers;
  },
};

const actions = {
  [FETCH_PASSENGERS]: ({ commit }) =>
    get('passengers').then(passengers => commit(SET_PASSENGERS, passengers)),
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
