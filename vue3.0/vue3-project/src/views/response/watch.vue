<template>
  <h2>{{$options.name}}</h2>
  <div>
    <p>监听ref基础数据</p>
     {{username}}
    <input type="text" v-model="username">
  </div>

  <div>
    <p>监听reactive复杂数据</p>
    {{userInfo.options.count}}
    <input type="text" v-model="userInfo.options.count">
  </div>

  <div>
    <p>监听reactive复杂类型某一个属性</p>
    {{userInfo.age}}
    <input type="text" v-model="userInfo.age">
  </div>

</template>

<script>
import {ref, watch, reactive, watchEffect} from 'vue'
export default {
  name: "watch",
  setup(){
    const username  = ref('')
    const userInfo = reactive({username:'dream',age:18,options:{count:1}})
    //监听ref基础类型
    watch(username,(currentUsername,prevUsername)=>{
      console.log(currentUsername,prevUsername)
    },{immediate:true})

    //监听reactive复杂类型
    watch(userInfo, (currentUserInfo,prevUserInfo) => {
      console.log(currentUserInfo,prevUserInfo)
    },{immediate:true,deep:true})

    //监听reactive复杂类型某一个属性
    watch(() => userInfo.age, (currentAge,prevAge) => {
      console.log(currentAge,prevAge)
    },{immediate:true})


    //能够监听到所有的响应数据 方便开发过程中调试
    const watcher = watchEffect(() => {
      console.log("watchEffect监听开始")
      console.log(userInfo)
      console.log(username.value)
      console.log("watchEffect监听结束")
    })

    //2s后停止监听
    setTimeout(()=>{
      watcher.stop
    },2000)

    return{username,userInfo}
  }
}
</script>

<style scoped>

</style>