import CounterMutations from './mutations';
import CounterActions from './actions';
import CounterGetters from './getters';
export default {
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },
  mutations: CounterMutations,
  actions: CounterActions,
  getters: CounterGetters,
};
