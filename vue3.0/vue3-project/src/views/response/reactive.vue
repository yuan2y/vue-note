<template>
<h2>{{$options.name}}</h2>
  <p>
    响应式转换是“深层”的——它影响所有嵌套 property。
  </p>
  <div>
    <p>直接使用reactive</p>
    <p>
      username--{{userInfo.username}}
      <input type="text" v-model="userInfo.username">
    </p>
  </div>

  <div>
    <p>使用toRefs把reactive依次转ref</p>
    <p>
      username--{{username}}
      <input type="text" v-model="username">
    </p>
  </div>


  <div>
    <p>使用toRef把reactive的age转ref</p>
    <p>
      age--{{age}}
      <input type="text" v-model="age">
    </p>
  </div>

</template>

<script>
import {reactive, toRefs,toRef} from 'vue'
export default {
  name: "reactive",
  setup(){
    const userInfo = reactive({username:'dream',age:18})

    const {username} = toRefs(userInfo)

    const age = toRef(userInfo,'age')
    return {
      userInfo,
      username,
      age
    }
  }
}
</script>

<style scoped>

</style>