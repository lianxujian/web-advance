import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

// 挂载插件
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 1000000,
    isLogin: false // 登录状态
  },
  mutations: {
    // 修改数据
    increase(state) {
      state.count += 1;
    },
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    }
  },
  getters: {
    // 对state中的数据进行加工处理
    money: state => {
      return state.count + "元";
    }
  },
  actions: {
    // 异步操作时使用
    increaseAsync({ state, commit }, payload) {
      setTimeout(() => {
        commit("increase");
      }, 1000);
    },
    submitLogin({commit},payload){
      // return axios.post('/api/login').then(resp=>{
      //   resp.data.result
      // })
      return new Promise(resolve => {
        setTimeout(() => {
          commit('login');
          resolve(true);
        }, 2000);
      })
      
    }
  }
});
