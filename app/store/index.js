import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './action';

// 在vue中使用vuex
Vue.use(Vuex);

// 初始化状态值
const state = {
    num : 0
};

export default new Vuex.Store({
    state,
    actions,
    mutations
});