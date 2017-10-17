
// 增加action
export default {
    add({ commit }, n) {
        commit('ADD',n);
    },
    reduce({ commit }, n) {
        commit('REDUCE',n);
    },
    setDefault({ commit }, n) {
    	commit('SETDEF', n);
    }
}