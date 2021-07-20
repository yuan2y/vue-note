<template>
  <h2>{{$options.name}}</h2>
  <button @click="handleDisabled">点我呀</button>
  <teleport to="body">
    <BComp :disabled="isDisabled" :handleDisabled="handleDisabled"/>
  </teleport>
</template>

<script>
import BComp from "../../components/BComp";
import {ref} from 'vue'
export default {
  name: "teleport",
  components:{BComp},
  setup(){
    const isDisabled = ref(false)
    const handleDisabled = () => {
      isDisabled.value = !isDisabled.value
    }
    return{
      isDisabled,
      handleDisabled
    }
  }
}
</script>

<style scoped>

</style>