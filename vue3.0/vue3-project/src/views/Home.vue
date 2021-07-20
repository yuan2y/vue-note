<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>

  <suspense>
    <template #default>
      <DComp/>
    </template>
    <template #fallback>
      <h2>数据加载中...</h2>
    </template>
  </suspense>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import DComp from "../components/DComp";
export default {
  name: 'Home',
  components: {
    HelloWorld,
    DComp
  },
  setup(props,context){
  }
}
</script>
