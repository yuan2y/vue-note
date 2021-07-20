<template>
<h2>生命周期钩子</h2>
  <div>
    <p>创建之前 beforeCreate	=> setup</p>
    <p>创建,一般进行数据请求 created	=> setup</p>
    <p>挂载之前,虚拟DOM创建 beforeMount =>	onBeforeMount</p>
    <p>挂载,DOM创建 mounted	=> onMounted</p>
    <p>更新之前,可以进行数据对比 beforeUpdate =>	onBeforeUpdate</p>
    <p>更新  updated =>	onUpdated</p>
    <p>被激活,加入keep-alive缓存组件才有 activated =>	onActivated</p>
    <p>失去激活,加入keep-alive缓存组件才有 deactivated =>	onDeactivated</p>
    <p>卸载之前,注销事件绑定 beforeUnmount =>	onBeforeUnmount</p>
    <p>卸载 unmounted =>	onUnmounted</p>
    <p>-------------------------------------------------------------------</p>
    <p>errorCaptured => onErrorCaptured</p>
    <p>renderTracked =>	onRenderTracked</p>
    <p>renderTriggered =>	onRenderTriggered</p>
  </div>
  <div>
    <p>父子组件渲染过程</p>
    <p>
      父setup => 父onBeforeMounted => 子setup => 子onBeforeMounted => 子onMounted => 父onMounted
    </p>
  </div>
  <keep-alive>
    <CComp/>
  </keep-alive>
</template>

<script>
import CComp from '../components/CComp.vue'
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
  name: "Lifecycle",
  components:{CComp},
  setup(){
    console.log("父组件 setup")
    onBeforeMount(()=>{
      console.log("父组件 onBeforeMount")
    })
    onMounted(()=>{
      console.log("父组件 onMounted")
    })

    onBeforeUpdate(()=>{
      console.log("父组件 onBeforeUpdate")
    })
    onUpdated(()=>{
      console.log("父组件 onUpdated")
    })

    onBeforeUnmount(()=>{
      console.log("父组件 onBeforeUnmount")
    })
    onUnmounted(()=>{
      console.log("父组件 onUnmounted")
    })
  }
}
</script>

<style scoped>

</style>