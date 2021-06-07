<!-- App.vue -->
<template>
  <div id="app">
    <h2>欢迎来到SSR渲染页面</h2>
    <img src="./assets/logo.png" />
    <router-view />
  </div>
</template>


<script>
export default {
  mounted() {},
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>