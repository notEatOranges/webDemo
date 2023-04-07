<!--
 * @Author: hly
 * @Description: 
 * @Date: 2023-02-10 10:57:02
 * @LastEditTime: 2023-02-10 10:57:06
 * @FilePath: /vue2/src/components/MyVmodel.vue
-->
<!--
 * @Author: hly
 * @Description: 在自定义的vue组件中使用v-model
 * @Date: 2023-02-09 18:16:17
 * @LastEditTime: 2023-02-09 18:29:56
 * @FilePath: /vue2-demo/src/components/MyVmodel.vue
-->
<template>
  <!-- 自定义组件中使用v-mode指令 -->
  <input type="search" @input="changeInput" data-myValue="" />
</template>

<script>
export default {
  name: "CustomModel",
  // 当我们使用model的默认值的时候value作prop，input作event时，可以省略不写model。
  model: {
    // prop: "myValue", // 默认是value
    event: "myInput", // 默认是input
  },
  props: {
    // 接收string和number类型的值，
    // 注意不能是写成字符串["String","Number"],因为此时它们是构造器，是全局变量
    myValue: [String, Number],
  },
  methods: {
    changeInput($event) {
      // 向上派发myInput事件，这样model监听myInput才有意义：当输入字符时触发input事件，
      // 进而派发触发自定义的myInput事件，然后model监听myInput，就实现了数据绑定
      this.$emit("myInput", $event.target.value);
    },
  },
};
</script>
