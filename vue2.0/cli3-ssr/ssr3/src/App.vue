<template>
  <div>
    <h2>欢迎来到SSR渲染页面</h2>
    <router-link to="/home">home</router-link>
    <router-link to="/animal">animal</router-link>
    <router-link to="/people">people</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
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
