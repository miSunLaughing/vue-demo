const ADD = 'ADD';
const REDUCE = 'REDUCE';
const SETDEF = 'SETDEF';

export default {
    // 处理add指令   ADD 为action add的指令名称
    [ADD](state, step) {
        state.num += step;
    },
    [REDUCE](state, step){
        state.num -= step;
    },
    [SETDEF](state, step){
        state.num = step;
    }
}