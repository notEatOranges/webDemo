<!--
 * @Author: hly
 * @Description: 
 * @Date: 2023-02-10 10:56:57
 * @LastEditTime: 2023-02-10 10:57:01
 * @FilePath: /vue2/src/components/item.vue
-->
<!--
 * @Author: hly
 * @Description: 
 * @Date: 2023-02-10 09:16:37
 * @LastEditTime: 2023-02-10 10:11:55
 * @FilePath: /vue2-demo/src/components/item.vue
-->
<template>
  <span class="app-more-item">
    <slot />
  </span>
</template>

<script>
export default {
  name: "TableActionItem",
};
</script>

<style lang="scss">
.app-more-item {
  .el-dropdown-menu__item & {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
