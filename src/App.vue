<template>
  <div class="main-container">
    <TheNavigation />
    <main>
      <router-view></router-view>
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheNavigation from './components/TheNavigation.vue';
import TheFooter from './components/TheFooter.vue';


export default {
  name: 'App',
  components: {
    // HelloWorld,
    TheNavigation,
    TheFooter,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main-container {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>
