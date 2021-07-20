<template>
  <template v-for="item in routes" :key="item.name">
    <el-submenu :index="item.path" v-if="item.children&&item.children.length">
      <template #title>
        <i :class="item.meta.icon" v-if="item.meta.icon"></i>
        <span>{{ item.meta.title }}</span>
      </template>
      <MenuTree :routes="item.children"/>
    </el-submenu>
    <el-menu-item :index="item.path" v-else>
      <i :class="item.meta.icon" v-if="item.meta.icon"></i>
      <template #title>{{ item.meta.title }}</template>
    </el-menu-item>
  </template>
</template>

<script>
export default {
  name: "MenuTree",
  props: ['routes'],
  setup() {
  }
}
</script>

<style scoped lang="less">

</style>