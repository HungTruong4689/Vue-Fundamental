<template>
  <!-- <div v-show="user">
    <p>User name: {{ user.name }}</p>
  </div> -->
  <div v-if="state === 'loading'">Loading…</div>
  <div v-else-if="state === 'error'">An error occurred</div>
  <div v-else>
    <p>User name: {{ user.name }}</p>
  </div>
  <ul v-for="dog in dogs" v-bind:key="dog">
    <li>{{ dog }}</li>
  </ul>
  <button v-bind:disabled="buttonDisabled">Test button</button>
  <p>{{ seconds }} seconds have eslapsed since you opened the page</p>
  <input type="text" v-model="inputText" />
  <p>inputText: {{ inputText }}</p>

  <label><input type="radio" v-model="value" value="one" /> One</label>
  <label><input type="radio" v-model="value" value="two" /> Two</label>
  <label><input type="radio" v-model="value" value="three" /> Three</label>
  <p>The value is {{ value }}</p>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      state: "loading",
      user: undefined,
      dogs: ["Rex", "Rover", "Henrietta", "Alan"],
      buttonType: "submit",
      buttonDisabled: true,
      seconds: 0,
    };
  },
  created() {
    setInterval(() => {
      this.seconds++;
    }, 1000);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
