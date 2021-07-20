<template>
    <el-menu :default-active="active"
             class="el-menu-vertical-demo"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b"
             :router="true"
             :collapse="isCollapse">
      <MenuTree :routes="routes"/>
    </el-menu>
</template>

<script>
import MenuTree from "./MenuTree";
import {ref,toRefs, watch} from "vue";
import {useRoute} from "vue-router";

export default {
  name: "Aside",
  components: {MenuTree},
  //props: ['routes', 'isCollapse'], no-props
  setup(props,context){
    //const {attrs:{routes,isCollapse}} = context
    const {routes,isCollapse} = toRefs(context.attrs)
    const active  = ref('/home')
    const route = useRoute()
    watch(()=>route.path,(current,prev)=>{
      //console.log(prev,current)
      active.value = current
    },{immediate:true})
    return {
      routes,
      isCollapse,
      active
    }
  }

}
</script>

<style scoped lang="less">
.el-menu{
  width: 100%
}
</style>