<template>
  <!-- <button @click="addOne">Add 1</button> -->
  <button @click="increment">Add 1</button>
  <button @click="increase({ value: 11 })">Add 11</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // addOne() {
    //   this.$store.commit('increment');
    // },
    ...mapActions('numbers', ['increment', 'increase']),
  },
};
</script>
