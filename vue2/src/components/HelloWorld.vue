<!--
 * @Author: hly
 * @Description: 
 * @Date: 2023-02-10 10:54:55
 * @LastEditTime: 2023-02-10 11:21:09
 * @FilePath: /vue2/src/components/HelloWorld.vue
-->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
