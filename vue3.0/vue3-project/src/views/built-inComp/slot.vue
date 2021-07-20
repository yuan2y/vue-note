<template>
<h2>{{$options.name}}</h2>
  <AComp name="AComp">
    <h2>我是AComp组件的匿名插槽</h2>
    <template v-slot:aaa>
      <h2>我是AComp 组件具名插槽</h2>
    </template>
    <template v-slot:bbb="scope">
      <h2 :style="{color:scope.color}">我是AComp 组件具名传参插槽 </h2>
    </template>
    <template v-slot:ccc="scope">
      <h2>我是AComp 组件具名传参插槽 {{scope.name}} </h2>
      <p v-for="(item,index) in scope.list" :key="index">{{item}}</p>
    </template>
  </AComp>
</template>

<script>
import AComp from "../../components/AComp.vue";
export default {
  name: "slot",
  components:{AComp},
}
</script>

<style scoped>

</style>