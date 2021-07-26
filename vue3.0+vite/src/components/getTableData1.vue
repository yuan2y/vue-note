<template>
  <ul class="list">
    <li v-for="(item,index) in dataSource" :key="index" class="item">
      <p>key:{{item.key}}</p>
      <p>mockAction:{{item.mockAction}}</p>
      <p>mockContent:{{item.mockContent}}</p>
      <p>mockTitle:{{item.mockTitle}}</p>
    </li>
  </ul>

</template>

<script>
import axios from "axios";

export default {
  async setup() {
    const {data:{code,dataSource}} = await axios.get("/api/tableData1")
    if (code === 200) {
      return {
        dataSource
      }
    } else {
      return {
        dataSource: []
      }
    }
  }
}
</script>

<style scoped>
.list{
  display: flex;
  flex-wrap: wrap;
}
.item{
  list-style: none;
  flex: 1;
  min-width: 200px;
  border: 1px solid #666;
  padding: 10px;
  margin: 10px 10px 0 0;
}

</style>