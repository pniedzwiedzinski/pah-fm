/* eslint no-param-reassign: ["error", { "props": false }] */
import { get } from '../../../services/api/http';

// state
export const DRIVES = 'DRIVES';
export const UNSYNCHRONISED_DRIVES = 'UNSYNCHRONISED_DRIVES';
// mutations
export const SET_DRIVES = 'SET_DRIVES';
export const ADD_TO_DRIVES = 'ADD_TO_DRIVES';
// actions
export const FETCH_DRIVES = 'FETCH_DRIVES';

const state = {
  [DRIVES]: [],
  [UNSYNCHRONISED_DRIVES]: [],
};

const mutations = {
  [SET_DRIVES]: (s, drives) => {
    s[DRIVES] = drives;
  },
  [ADD_TO_DRIVES]: (s, drive) => {
    s[DRIVES].push(drive);
  },
};

const actions = {
  [FETCH_DRIVES]: ({ commit }) =>
    // TODO: Error handling
    get('drives').then(drives => commit(SET_DRIVES, drives)),
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
