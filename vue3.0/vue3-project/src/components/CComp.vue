<template>
 <h2>{{$options.name}} 组件</h2>
</template>

<script>
import {
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onMounted,
  onUnmounted,
  onUpdated
} from "vue";

export default {
  name: "CComp",
  setup(){
    console.log("CComp子组件setup")
    onBeforeMount(()=>{
      console.log("CComp组件 onBeforeMount")
    })
    onMounted(()=>{
      console.log("CComp组件 onMounted")
    })

    onBeforeUpdate(()=>{
      console.log("CComp组件 onBeforeUpdate")
    })
    onUpdated(()=>{
      console.log("CComp组件 onUpdated")
    })

    onActivated(()=>{
      console.log("CComp组件 onActivated")
    })
    onDeactivated(()=>{
      console.log("CComp组件 onDeactivated")
    })

    onBeforeUnmount(()=>{
      console.log("CComp组件 onBeforeUnmount")
    })
    onUnmounted(()=>{
      console.log("CComp组件 onUnmounted")
    })
  }

}
</script>

<style scoped>

</style>