<template>
  <div class="layout">
    <div class="header">
      <Header :isCollapse="isCollapse" @handleCollapse="handleCollapse"/>
    </div>
    <div class="main">
      <el-aside :width="isCollapse?'64px':'200px'">
        <Aside :isCollapse="isCollapse" :routes="routes"/>
      </el-aside>
      <div class="content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./header";
import Aside from "./aside";
import router from "../router";
import {ref} from 'vue'

export default {
  name: "Layout",
  data() {
    return {
      isCollapse: false,
      routes: []
    };
  },
  components: {Header, Aside},
  setup() {
    const isCollapse = ref(false)
    const routes = ref([])
    routes.value = router.options.routes[0].children
    const handleCollapse = () => {
      isCollapse.value = !isCollapse.value
    }
    return {
      isCollapse,
      handleCollapse,
      routes
    }
  }
}
</script>

<style scoped lang="less">
.layout {
  width: 100vw;
  height: 100vh;

  .header {
    background-color: #B3C0D1;
    color: #333;
    height: 60px;
  }

  .main {
    height: calc(100vh - 60px);
    display: flex;

    .el-aside {
      background-color: #545c64;
      overflow-x: hidden;
      overflow-y: auto;
    }

    .content {
      flex: 1;
      background-color: #E9EEF3;
      padding: 10px
    }
  }
}

</style>