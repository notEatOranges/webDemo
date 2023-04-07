<template>
  <div class="module-selector">
    <button class="slide-btn" v-if="!isLeftEnd" @click="slideLeft">&lt;</button>

    <div class="modules-wrap" ref="modulesWrap" :style="{ width: wrapWidth + 'px' }">
      <div class="modules" :style="{ left: left + 'px' }">
        <div
          class="module" 
          v-for="(module, index) in modules" 
          :key="index"
          :class="{ active: currentModule === module }"
          @click="setCurrentModule(module)">
          {{ module }}
        </div>
      </div>
    </div>

    <button class="slide-btn" v-if="!isRightEnd" @click="slideRight">&gt;</button>
  </div>
</template>

<script>
import { 
  ref,
  computed, 
  onMounted,
  onUpdated,
  watch,
} from 'vue';

export default {
  props: {
    initialModule: String,
    modulesList: {
      type: Array,
      required: true,
    },
    maxDisplayCount: {
      type: Number,
      default: 7,
    }
  },

  setup(props) {
    console.log('props.initialModule: ==>', props.initialModule);
    const currentModule = ref(props.initialModule || '');
    const modules = ref([]);
    const left = ref(0);
    const wrapWidth = ref(0);

    const isLeftEnd = computed(() => left.value >= 0);
    const isRightEnd = computed(() => wrapWidth.value <= Math.abs(left.value) + props.maxDisplayCount * 70);

    const slideLeft = () => left.value += 70;
    const slideRight = () => left.value -= 70;

    const setCurrentModule = (module) => currentModule.value = module;

    const updateModules = () => {
      const index = props.modulesList.indexOf(currentModule.value);
      let startIndex = Math.max(index - Math.floor(props.maxDisplayCount / 2), 0);
      startIndex = Math.min(startIndex, props.modulesList.length - props.maxDisplayCount);
      const endIndex = Math.min(startIndex + props.maxDisplayCount, props.modulesList.length);
      modules.value = props.modulesList.slice(startIndex, endIndex);
      left.value = -(index - startIndex) * 70;
      wrapWidth.value = props.modulesList.length * 70 - props.maxDisplayCount * 70;
    };

    watch(currentModule, () => updateModules());
    watch(() => props.modulesList, () => updateModules());

    onMounted(() => {
      if (!currentModule.value && props.modulesList.length > 0) {
        currentModule.value = props.modulesList[0];
      }
      updateModules();
    });

    onUpdated(() => {
      updateModules()
    });

    return {
      currentModule,
      modules,
      left,
      wrapWidth,
      isLeftEnd,
      isRightEnd,
      setCurrentModule,
      slideLeft,
      slideRight,
    };
  }
}
</script>

<style scoped>
.module-selector {
  position: relative;
  display: flex;
  align-items: center;
}

.slide-btn {
  position: absolute;

  color: #999;
  border: none;
  background-color: transparent;
  font-size: 16px;
  cursor: pointer;
}

.slide-btn:hover {
  color: #409EFF;
}

.modules-wrap {
  position: relative;
  overflow-x: hidden;
  margin: 0 10px;
}

.modules {
  position: relative;
  transition: all 0.3s ease-in-out;
}

.module {
  width: 60px;
  height: 30px;
  line-height: 30px;
  border: 1px solid #ddd;
  border-radius: 15px;
  text-align: center;
  cursor: pointer;
  margin: 0 5px;
  user-select: none;
  color: #333;
}

.module.active {
  background-color: #409eff;
  border-color: #409eff;
  color: #fff;
}
</style>
