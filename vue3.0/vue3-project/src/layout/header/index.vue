<template>
  <div class="header">
    <h1 class="logo">Vue3.x API</h1>
    <i id="isCollapse" :class="isCollapse?'el-icon-s-unfold':'el-icon-s-fold'" @click="changeCollapse"></i>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ['isCollapse'],
  setup(props,context){
    const {emit} = context
    const changeCollapse = ()=>{
       emit('handleCollapse')
    }
    return {
      changeCollapse
    }
  }
}
</script>

<style scoped lang="less">
.header {
  font-size:20px;
  text-indent:20px;
  line-height:60px;
  display: flex;
  align-items: center;
  .logo{
    width:180px;
  }
  #isCollapse {
    display: inline-block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    cursor: pointer;
  }
}
</style>

