/* eslint no-param-reassign: ["error", { "props": false }] */
import { get } from '../../../services/api/http';

// state
export const CARS = 'CARS';
// mutations
export const SET_CARS = 'SET_CARS';
// actions
export const FETCH_CARS = 'FETCH_CARS';

const state = {
  [CARS]: [],
};

const mutations = {
  [SET_CARS]: (s, cars) => {
    s[CARS] = cars;
  },
};

const actions = {
  [FETCH_CARS]: ({ commit }) =>
    get('cars').then(cars => commit(SET_CARS, cars)),
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
