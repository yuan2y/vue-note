<template>
  <h2>{{ $options.name }}</h2>
  <div>
    <p>computed只可读</p>
    {{ computedAge }}
    <input type="text" v-model="computedAge">
  </div>

  <div>
    <p>computed可读可写</p>
    {{ computedName }}
    <input type="text" v-model="computedName">
  </div>
</template>

<script>
import {computed, ref} from 'vue'

export default {
  name: "computed",
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
}
</script>

<style scoped>

</style>