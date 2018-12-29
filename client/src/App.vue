<template>
  <div id="s-app">
    <img class="s-app__logo" alt="UFC" src="./assets/logo.png">
    <Fighters/>
  </div>
</template>

<script>
import Fighters from './components/Fighters.vue';

export default {
  name: 'app',
  components: {
    Fighters,
  },
};
</script>

<style lang="scss">
body {
    background: #2c3e50;
}

#s-app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.s-app__logo {
  width: 300px;
}
</style>
