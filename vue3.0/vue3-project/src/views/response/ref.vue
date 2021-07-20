<template>
<h2>{{$options.name}}</h2>
  <p>
    接受一个内部值并返回一个响应式且可变的 ref 对象。ref 对象具有指向内部值的单个 property.value
  </p>
  <div>
    <p>username:{{username}}</p>
    <input type="text" v-model="input"/>
    <button @click="handleUsername">改变数据</button>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "ref",
  setup(){
    const input = ref('')
    const username = ref('')
    const handleUsername = () =>{
        username.value = input.value;
        input.value = ""
    }
    return {
      input,
      username,
      handleUsername
    }
  }

}
</script>

<style scoped>

</style>