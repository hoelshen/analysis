import Vuex from 'vuex'
import defaultState from './state'
import defalutMutations from './mutations'
import defaultGetters from './getter'
import defaultAction from './action'
const store = () => {
  return new Vuex.Store({
    state: defaultState,
    mutations: defalutMutations,
    getters:  defaultGetters,
    actions: defaultAction
  })
}

export default store