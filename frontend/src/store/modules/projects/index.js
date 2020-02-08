/* eslint no-param-reassign: ["error", { "props": false }] */
import { get } from '../../../services/api/http';

// state
export const PROJECTS = 'PROJECTS';
// mutations
export const SET_PROJECTS = 'SET_PROJECTS';
// actions
export const FETCH_PROJECTS = 'FETCH_PROJECTS';

const state = {
  [PROJECTS]: [],
};

const mutations = {
  [SET_PROJECTS]: (s, projects) => {
    s[PROJECTS] = projects;
  },
};

const actions = {
  [FETCH_PROJECTS]: ({ commit }) =>
    // TODO: Error handling
    get('projects').then(projects => commit(SET_PROJECTS, projects)),
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
