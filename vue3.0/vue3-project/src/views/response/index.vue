<template>
  <h2>响应式API</h2>
  <p class="cont">ref、toRef、toRefs、isRef、reactive、readonly、isReactive</p>
  <p class="cont">watch与computed</p>
  <router-view/>
</template>

<script>
export default {
  setup(){
  }
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