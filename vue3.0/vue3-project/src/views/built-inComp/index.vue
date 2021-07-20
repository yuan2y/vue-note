<template>
 <h2>内置组件</h2>
  <p class="cont">slot、teleport、keep-alive</p>
  <router-view/>
</template>

<script>
export default {
}
</script>

<style scoped lang="less">
h2{
  font-size:20px;
}
.cont{
  border: 1px solid #fff;
  padding: 10px;
}
</style>