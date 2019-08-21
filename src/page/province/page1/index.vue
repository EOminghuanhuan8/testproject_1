

<template>
    <d2-container>
      <el-button type="primary" @click="s">点击</el-button>
        <el-cascader :options="addData.bssNameGroup" v-model="addData.bssName" @change="change"></el-cascader>
    </d2-container>
</template>
<script>
export default {
  data() {
    return {
      bssName: [],
      addData: {
        bssNameGroup: [
          {
            description: "跳转到页面去选择发起流程的类型",
            id: "0502",
            state: "3",
            text: "项目申报",
            __parentId: "05",
            children: [
              {
                description: "跳转到页面去选择发起流程的类型",
                id: "050201",
                state: "3",
                text: "是周项目",
                __parentId: "05",
                children: [
                  {
                    description: "跳转到页面去选择发起流程的类型",
                    id: "05020101",
                    state: "3",
                    text: "渠道",
                    __parentId: "05"
                  }
                ]
              },
              {
                description: "跳转到页面去选择发起流程的类型",
                id: "0502020102",
                state: "3",
                text: "省公司项目",
                __parentId: "05",
                children: [
                  {
                    description: "跳转到页面去选择发起流程的类型",
                    id: "05020201",
                    state: "3",
                    text: "省统一结算sp类",
                    __parentId: "05"
                  }
                ]
              }
            ]
          }
        ]
      }
    };
  },
  methods: {
    s() {
      let ary = [];
      ary = this.deal(this.addData.bssNameGroup);
      this.addData.bssNameGroup = ary;
    },
    change(){
      alert(this.addData.bssName)
    },
    deal(ary) {
      let objAry = [];
      ary.forEach(item => {
        let flag;
        let set=new Set(Object.keys(item))
        flag = set.has("children")
        if (flag && item.children.length > 0) {
          item.children = this.deal(item.children);
          item.label = item.text;
          item.value = item.id;
          item.state = item.state;
          item._parentId = item._parentId;
        } else {
          item.label = item.text;
          item.value = item.id;
          item.state = item.state;
          item._parentId = item._parentId;
        }
        objAry.push(item);
      });
      return objAry;
    }
  }
};
</script>

