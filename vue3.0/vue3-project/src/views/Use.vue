<template>
  <h2>userStore、userRoute、userRouter</h2>
  <div>
    <p>useStore使用</p>
    <input type="text" v-model="input">
    <p v-for="(item,index) in getUserInfo" :key="index">{{item}}</p>
    <el-button type="primary" @click="changeUsername">同步改变数据</el-button>
    <el-button type="primary" @click="asyncUserName">异步改变数据</el-button>
  </div>
  <div>
    <p>useRoute使用</p>
    <p>path:{{path}}</p>
  </div>
  <div>
    <p>useRouter使用</p>
    <p>{{currentRoute.path}}</p>
    <el-button type="primary" @click="goHome">去首页</el-button>
  </div>
</template>

<script>



import {ref} from "vue";
import {useStore} from "vuex";
import {ElMessage} from "element-plus";
import {useRoute, useRouter} from "vue-router";
export default {
  name: "Use",
  setup(){
    const {
      state: {userInfo: {username}},
      getters: {getUserInfo},
      commit,
      dispatch
    } = useStore()

    const input = ref('')
    const changeUsername = async ()=>{
      if(!input.value) {
        ElMessage.error("请输入值")
        return
      }
      await commit('updateUserInfo',{username:input.value})
      input.value = ""
    }

    const asyncUserName = () =>{
      dispatch('asyncUserInfo',{username:'8888888'})
    }

    const {path} = useRoute()

    const {currentRoute,push,replace} = useRouter()

    const goHome = ()=>{
      push("/")
    }
    return {
      input,
      getUserInfo,
      changeUsername,
      asyncUserName,
      path,
      currentRoute:currentRoute.value,
      goHome
    }
  }
}
</script>

<style scoped>

</style>