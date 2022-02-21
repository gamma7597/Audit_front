import Axios from 'axios'

const url = 'https://localhost:8081/'

const state = () => ({
  tdt_rules: {},
  tdt_longueur: 0
})

const actions = {
  get_tdt_rules: ({ commit }, payload) => {
    Axios.get(url + 'api/tdt_rules/' + payload)
    .then(response => {
      commit('GET_TDT_RULES', response)
    })
  },
  add_tdt_rules: ({ commit }, payload) => {
    Axios.post(url + 'api/tdt_rules/' + payload.company, payload.data)
    .then(response => {
      commit('ADD_TDT_RULES', response.data)
    })
  },
  edit_tdt_rules: ({ commit }, payload) => {
    console.log(payload)
    Axios.put(url + 'api/tdt_rules/' + payload.company, payload.data)
    .then( () => {
      Axios.get(url + 'api/tdt_rules/' + payload.company)
      .then(response => {
        commit('GET_TDT_RULES_2', response.data)
      })
    })
  }
}

const mutations = {
  ADD_TDT_RULES(state, rules) {
    state.tdt_rules = rules
  },
  GET_TDT_RULES(state, rules) {
    state.tdt_longueur = rules.data.length,
    state.tdt_rules = rules.data[0]
  },
  GET_TDT_RULES_2(state, rules) {
    state.tdt_longueur = rules.length,
    state.tdt_rules = rules[0]
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
