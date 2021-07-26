<template>
  <h2>{{ $options.name }}</h2>
  <div>
    <el-input type="text" v-model="input" size="mini"></el-input>
    <p v-for="item in getUserInfo" :key="item">{{item}}</p>
    <el-button size="mini" type="primary" @click="changeUsername">同步改变</el-button>
    <el-button size="mini" type="success" @click="asyncChangeUsername">异步改变</el-button>
  </div>

</template>

<script>
import {useStore} from "vuex";
import {ref} from 'vue'
export default {
  name: "About",
  setup() {
    //console.log(useRoute())
    console.log(useStore())
    const {state: {userInfo: {username}},
      getters: {getUserInfo},
      commit, dispatch,} = useStore()

    const input = ref("")

    const changeUsername = ()=>{
      commit("updateUserInfo",{username:input.value})
      input.value = ''
    }
    const asyncChangeUsername = () =>{
      dispatch('asyncUserInfo',{username:"888888",age:"100"})
    }

    return{
      username,
      getUserInfo,
      input,
      changeUsername,
      asyncChangeUsername
    }
  }
}
</script>

<style scoped>

</style>