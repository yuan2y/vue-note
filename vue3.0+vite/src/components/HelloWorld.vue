<template>
  <div>
    <h2> {{ msg }}</h2>
     <el-button type="primary">测试</el-button>
    <suspense>
      <template #default>
        <div>
          <GetTableData1/>
          <el-input type="text" value=""></el-input>
          <GetTableData2/>
          <getTableData3 :params="params"/>
        </div>
      </template>
      <template #fallback>
        <div>
          数据加载中...
        </div>
      </template>
    </suspense>


  </div>
</template>

<script>
import axios from "axios";
import {reactive,toRefs,isReactive, onMounted} from 'vue'
import GetTableData1 from './getTableData1.vue'
import GetTableData2 from "./getTableData2.vue";
import GetTableData3 from "./getTableData3.vue";
export default {
  name: "HelloWorld",
  components:{GetTableData3, GetTableData1, GetTableData2},
  setup(props,context){  
    const {attrs:{msg}} = context
    const params = reactive({page:1})
    return {
      msg,
      params
    } 
  },
};
</script>
