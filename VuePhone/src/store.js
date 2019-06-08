import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     title:'主页',
  },
  mutations: {
     changeTitle(state,payload){
       state.title = payload;
     }
  },
  actions: {
    changeTitle({commit},title){
        commit("changeTitle",title);
    }
  }
})
