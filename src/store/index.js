import Vue from 'vue';
import vuex from 'vuex';
Vue.use(vuex);
//import {BootsrapVue} from 'bootsrap-vue';
//Vue.use(BootsrapVue);
//import 'bootsrap/dist/css/bootsrap.css'
//import 'bootsrap-vue/dist/bootsrap-vue.css'

const state = {
    username: 'admin',
    password: 'admin',
    isLogin: false,
    loginMessage: false,
};
const getters = {
    getIsLogin: (state)=> {
        return state.isLogin;
    },
    getloginMessage: (state)=> {
        return state.loginMessage;
    },
};
const actions = {
	updateIsLogin: ({commit}, [ username, password]) => {
		commit('setIsLogin', [username, password]);
	},
    logout: ({commit}) => {
        commit ('logout');
    }
};
const mutations = {
    setIsLogin:(state,[username, password])=> {
        if(state.username == username && state.password == password){
            state.isLogin = true;
            state.loginMessage = false;
        }
        else{
            state.isLogin= false;
            state.loginMessage =true;
        }     
    },
    logout: (state) => {
        state.isLogin = false;
    }
};

const store = new vuex.Store({
    state,
    getters,
    actions,
    mutations
});
export default store;
