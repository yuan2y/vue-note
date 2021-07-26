<template>
  <h>{{message}}-{{data?.nickname??"默认数据"}} </h>
</template>

<script>
import axios from "axios";

export default {
  name: "getTableData3",
  inheritAttrs: false,
  async setup(props, context) {
    const {attrs: {params}} = context
    //console.log({...params})
    const {data:{code,message,data}} = await  axios.post("/api/tableData3",{...params})
    if (code===200){
      return{
        message,
        data
      }
    }
  }
}
</script>

<style scoped>

</style>