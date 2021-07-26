<template>
  <h2>{{ data?.nickname ?? "我是假数据" }}</h2>
</template>

<script>
import axios from "axios";

export default {
  async setup() {
    const {data: {ret, data}} = await axios.get("/api/tableData2")
    if (ret === 0) {
      return {data}
    }
  }
}
</script>

<style scoped>

</style>