<!--
 * @Description: 
 * @Date: 2023-04-04 17:03:56
 * @LastEditors: huangly
 * @LastEditTime: 2023-04-04 17:24:22
 * @FilePath: /vite-project/src/views/testTitle/index.vue
-->
<template>
  <div>
    2222
    <module-selector :initial-module="initialModule" :modules-list="modulesList"></module-selector>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ModuleSelector from '@/views/testTitle/ModuleSelector.vue';

const initialModule = ref('模块一');
const modulesList = ref(['模块一', '模块二', '模块三', '模块四', '模块五', '模块六', '模块七']);
</script>

