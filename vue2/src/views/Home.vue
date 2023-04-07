<!--
 * @Author: hly
 * @Description: 
 * @Date: 2023-02-10 10:54:55
 * @LastEditTime: 2023-03-31 14:14:01
 * @FilePath: /vue2/src/views/Home.vue
-->
<template>
  <div class="home">
    <HelloWorld msg="↓↓ 按钮折叠组件爱 ↓↓" />
    <el-button @click="handelIf">{{
      !handelIf ? "显示按钮" : "隐藏按钮"
    }}</el-button>
    <hr />
    <div style="width: 280px; margin: auto">
      <ButtonWrap :cIndex="1" :showNum="3" :time="+new Date()">
        <el-button v-if="isShow">默认按钮</el-button>
        <el-button type="primary" v-if="isShow">主要按钮</el-button>
        <el-button type="success">成功钮</el-button>
        <el-button type="info">信息按钮啊</el-button>
        <el-button type="warning" v-if="isShow">警告</el-button>
        <el-button type="danger">危险按</el-button>
      </ButtonWrap>
      <!-- <tableAction>
        <tableActionItem>删除</tableActionItem>
        <tableActionItem v-if="isShow">导出</tableActionItem>
        <tableActionItem v-if="isShow">新增</tableActionItem>
        <tableActionItem>查看</tableActionItem>
        <tableActionItem>删除</tableActionItem>
        <tableActionItem v-if="isShow">导出</tableActionItem>
        <tableActionItem v-if="isShow">新增</tableActionItem>
        <tableActionItem>查看</tableActionItem>
      </tableAction> -->
    </div>
    <hr />
    <HelloWorld msg="↓↓ 自定义v-model ↓↓" />
    <MyVmodel v-model="title"></MyVmodel>
    <h3>输入的实时内容：{{ title }}</h3>
    <hr>
    <h3>ButtonGroup示例</h3>
    <div style="width: 280px; margin: auto">
      <button-group :cIndex="1" :time="+new Date()">
      <el-button>按钮1</el-button>
      <el-button>按钮2</el-button>
      <el-button>按钮3</el-button>
      <el-button>按钮4</el-button>
      <el-button>按钮5</el-button>
    </button-group>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import ButtonWrap from "@/components/ButtonWrap";
import MyVmodel from "@/components/MyVmodel";
import ButtonGroup from '@/components/ButtonWrapByWidth copy.vue';
// import tableAction from "@/components/tableAction";
// import tableActionItem from "@/components/item";

export default {
  name: "Home",
  components: {
    HelloWorld,
    ButtonWrap,
    MyVmodel,
    ButtonGroup
    // tableAction,
    // tableActionItem,
  },
  data() {
    return {
      isShow: true,
      title: "",
    };
  },
  methods: {
    handelIf() {
      this.isShow = !this.isShow;
    },
  },
};
</script>
