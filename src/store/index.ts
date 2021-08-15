import { createStore } from 'vuex'
import { IRootState } from './types'
import loginModule from './login/login'
const store = createStore<IRootState>({
  state() {
    return {
      name: 'coderwhy',
      age: 18
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login: loginModule
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export default store
