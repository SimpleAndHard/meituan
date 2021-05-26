import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectPosition:''
  },
  mutations: {
    setPosition(state,val){
        state.selectPosition=val
    }
  },
  actions: {
    setPosition({commit},val)
    {
      commit('setPosition',val);
    }
  },
  modules: {
  }
})
