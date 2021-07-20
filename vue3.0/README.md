# Vue3.x新特性

## 1、 setup函数

> `setup()` 函数vue3的`Composition API`新特性提供了统一的入口。

**执行动机**

在 beforeCreate之后，created之情执行

**接受参数**

+ 第一个形参 props 数据

+ 第二形参context（上下文对象）

  ```js
  export default {
    name: "Setup",
    props:{
      title:{
        type:String,
        default:""
      }
    },
    setup(props,context){
      console.log(props)
      console.log(context) //attrs、slots、emit
    }
  }
  ```

  

## 2、生命周期钩子

  ```js
  /*
      创建之前 beforeCreate  => setup
      创建,一般进行数据请求 created => setup
      挂载之前,虚拟DOM创建 beforeMount => onBeforeMount
      挂载,DOM创建 mounted  => onMounted<
      更新之前,可以进行数据对比 beforeUpdate => onBeforeUpdate
      更新  updated =>  onUpdated
      被激活,加入keep-alive缓存组件才有 activated => onActivated
      失去激活,加入keep-alive缓存组件才有 deactivated =>  onDeactivated
      卸载之前,注销事件绑定 beforeUnmount =>  onBeforeUnmount
      卸载 unmounted => onUnmounted
  */
  ```

  

## 3、内置组件

### slot插槽

```vue
<template>
  <AComp name="AComp">
    <h2>我是AComp组件 匿名插槽</h2>
    <template v-slot:aaa>
      <h2>我是AComp组件 具名插槽</h2>
    </template>
    <template v-slot:bbb="scope">
      <h2 :style="{color:scope.color}">我是AComp组件 具名传参插槽 </h2>
    </template>
    <template v-slot:ccc="scope">
      <h2>我是AComp组件 具名传对象插槽 {{scope.name}} </h2>
      <p v-for="(item,index) in scope.list" :key="index">{{item}}</p>
    </template>
  </AComp>
</template>

<script>
import AComp from "../../components/AComp.vue";
export default {
  name: "slot",
  components:{AComp},
}
</script>

<style scoped lang="less">

</style>
```

AComp.vue

```vue
<template>
  <h2>我是 {{name}} 组件</h2>
  <slot/>
  <hr/>
  <slot name="aaa" />
  <hr/>
  <slot name="bbb" :color="color"/>
  <hr/>
  <slot name="ccc" v-bind="{name,list}"/>
</template>

<script>
import {ref} from "vue";

export default {
  name: "AComp",
  inheritAttrs:false,
  setup(props,context){
    console.log(props)
    const {attrs:{name}} =  context
    const color = ref('red')
    return{
      name,
      color,
      list:['aaa','bbb','ccc']
    }
  }
}
</script>

<style scoped lang="less">

</style>
```

### teleport 移动

```vue
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

<style scoped lang="less">

</style>
```

BComp.vue

```vue
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
```

## 4、响应式API

### ref 基础类型

```js
setup(){
    const username = ref('')
    const handleUsername = () =>{
        username.value = input.value;
    }
    return {
      username,
      handleUsername
    }
  }
```

### reactive 复杂类型

```js
setup(){
    const userInfo = reactive({username:'dream',age:18,options:{count:0}})
    const {username} = toRefs(userInfo)
    const age = toRef(userInfo,'age')
    return {
      userInfo,
      username,
      age
    }
```

### watch 监听

```js
setup(){
    const username  = ref('')
    const userInfo = reactive({username:'dream',age:18,options:{count:1}})
    //监听ref 基础类型
    watch(username,(currentUsername,prevUsername)=>{
      console.log(currentUsername,prevUsername)
    },{immediate:true})

    //监听reactive 复杂类型
    watch(userInfo, (currentUserInfo,prevUserInfo) => {
      console.log(currentUserInfo,prevUserInfo)
    },{immediate:true,deep:true})

    //监听reactive复杂类型某一个属性
    watch(() => userInfo.age, (currentAge,prevAge) => {
      console.log(currentAge,prevAge)
    },{immediate:true})


    //能够监听到所有的响应数据 
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
```

### computed 计算

```js
setup() {
    const age = ref(18)
    const username = ref('dream')

    //computed只可读
    const computedAge = computed(() => {
      return age.value * 2
    })

    //computed可读可写
    const computedName = computed({
      get: () => {
        return username.value +'^-^'
      },
      set: value => {
        console.log(value, "computedName 打印的")
        return username.value = value
      }
    })

    return {
      computedAge,
      computedName
    }
    
  }
```











