<template>
<d2-admin>
    <el-table :data="options.data">
      <el-table-column v-for="item in options.columns" :label="item.label" :prop="item.prop" :key="item.prop"></el-table-column>
    </el-table>
  </d2-admin>
</template>
<script>

export default {
  name:"my_table",
  props:{
  options:{
    type:Object 
  },
  data(){
    return{}
  },
  methods:{
    getData(){
      let url=""
      let params={}
      const callback=data=>{
        
      }
    }
  }
}
}
</script>
