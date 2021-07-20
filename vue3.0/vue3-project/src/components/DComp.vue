<template>
  <p v-for="(item,index) in data" :key="index">{{item}}</p>
</template>

<script>
import apis from "../apis";

export default {
  name: "DComp",
  async setup(){
    const data =   await apis.Post2DynamicChainMapNew({'chainId': 'ly005'})
    return {data}
  }
}
</script>

<style scoped>

</style>