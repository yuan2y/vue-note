<template>
  <h2>setup函数、getCurrentInstance</h2>
  <p>
    1、第一个参数props
    2、第二个参数context(上下文对象）attts、slots、emit
  </p>
</template>

<script>

import {getCurrentInstance} from "vue";
export default {
  name: "Setup",
  setup(props,context){
    const {ctx} = getCurrentInstance()
    //console.log(ctx)
    //与以前this获取原型上东西一样
    //ctx.$parent  父组件
    //ctx.$nextTick  组件更新完毕
    //ctx.$store  VueX
  }
}
</script>

<style scoped lang="less">
</style>