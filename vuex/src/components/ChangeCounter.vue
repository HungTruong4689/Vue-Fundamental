<template>
  <button @click="inc">Add 1</button>

  <button @click="increase({ value: 10 })">Add 10</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    // addOne() {
    //   this.$store.commit('increase', { value: 10 });
    //   this.$store.commit({
    //     type: 'increase',
    //     value: 10,
    //   });
    //   this.$store.dispatch({
    //     type: 'increase',
    //     value: 10,
    //   });
    // ...mapActions(['increment', 'increase']),
    // ...mapActions({
    //   inc: 'increment',
    //   increase: 'increase',
    // }),

    //namespaced
    ...mapActions('numbers', {
      inc: 'increment',
      increase: 'increase',
    }),
  },
};
</script>
