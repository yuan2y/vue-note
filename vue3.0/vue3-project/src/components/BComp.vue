<template>
   <div class="wrapper" v-show="disabled" @click="handleDisabled">
   </div>
</template>

<script>
import {ref,toRef} from 'vue'
export default {
  name: "BComp",
  setup(props,context){
    const {attrs:{handleDisabled}} =context
    const disabled = toRef(context.attrs,'disabled')
    return {
      disabled,
      handleDisabled
    }
  }
}
</script>

<style scoped lang="less">
.wrapper {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 20;
  opacity: 0.5 !important;
  background: rgba(0,0,0,.8);
  cursor: pointer
}
</style>