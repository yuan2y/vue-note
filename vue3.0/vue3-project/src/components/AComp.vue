<template>
  <h2>我是 {{name}} 组件</h2>
  <slot/>
  <hr/>
  <slot name="aaa" />
  <hr/>
  <slot name="bbb" :color="color"/>
  <hr/>
  <slot name="ccc" v-bind="{name,list}"/>
</template>

<script>
import {ref} from "vue";

export default {
  name: "AComp",
  //props:['name'], no-props
  inheritAttrs:false,
  setup(props,context){
    console.log(props)
    const {attrs:{name}} =  context
    const color = ref('red')
    return{
      name,
      color,
      list:['aaa','bbb','ccc']
    }
  }
}
</script>

<style scoped lang="less">

</style>