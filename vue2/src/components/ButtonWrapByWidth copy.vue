<!--
 * @Author: hly
 * @Description: 根据宽度计算显示隐藏  优化版
 * 待解决: 动态计算,需要监听宽度变化
 * @Date: 2023-02-09 12:12:08
 * @LastEditTime: 2023-03-31 11:39:10
 * @FilePath: /vue2/src/components/ButtonWarpByWidth copy.vue
-->
<template>
  <div class="bf-box" :ref="`_bf${cIndex}`">
    <div ref="buttonWrapper">
      <slot></slot>
    </div>
    <el-popover
      popper-class="btn-pop"
      placement="left"
      width="auto"
      trigger="hover">
      <div class="popover-button" :ref="`_bf${cIndex}_button`">
        <slot></slot>
      </div>
      <i slot="reference" class="el-icon-more fold-icon" v-show="isFold"></i>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    cIndex: {
      type: Number,
      default: 0,
    },
    time: {
      type: Number,
      default: null,
    },
    showNum: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {
      width: '',
      isFold: false,
      buttonWidths: [], // 存储子元素宽度
    };
  },
  computed: {
    buttonWrapper() {
      return this.$refs[`_bf${this.cIndex}_button`];
    },
    box() {
      return this.$refs[`_bf${this.cIndex}`];
    },
  },
  watch: {
    time(val) {
      this.domInit(val);
    },
  },
  mounted() {
    this.domInit();
  },
  methods: {
    domInit(newWidth) {
      console.log('this.buttonWrapper: ==>', this.buttonWrapper);
      console.log('this.box: ==>', this.box);
      if (!this.buttonWrapper || !this.box) {
        // 如果元素未挂载，直接退出
        return;
      }
      this.$nextTick(() => {
        console.log('newWidth: ==>', newWidth);
        if (!this.isFold && !newWidth) {
          // 实际宽度未超过容器宽度，不需要折叠
          return;
        }
        const offsetWidth = newWidth || this.box.offsetWidth;
        const scrollWidth = this.box.scrollWidth;
        this.isFold = offsetWidth < scrollWidth;
        if (this.isFold) {
          if (!this.buttonWidths.length) {
            // 存储子元素宽度
            const children = this.buttonWrapper.children;
            this.buttonWidths = Array.prototype.map.call(children, (child) => child.offsetWidth);
          }
          let wSum = 0,
            bIndex = -1;
          // 计算需要折叠的子元素位置
          for (let i = 0, len = this.buttonWidths.length; i < len; i++) {
            wSum += this.buttonWidths[i];
            if (i !== 0) {
              wSum += 10;
            }
            if (wSum < offsetWidth - 14) {
              bIndex = i;
            }
          }
          // 隐藏不需要折叠的子元素
          const children = this.buttonWrapper.children;
          for (let k = 0, len = children.length; k < len; k++) {
            if (k >= bIndex + 1) {
              children[k].style.display = 'none';
            } else {
              children[k].style.display = 'inline-block';
            }
          }
        } else {
          // 实际宽度未超过容器宽度，不需要折叠
          const children = this.buttonWrapper.children;
          for (let k = 0, len = children.length; k < len; k++) {
            children[k].style.display = 'inline-block';
          }
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
.bf-box {
  box-sizing: border-box;
  overflow: hidden;
  white-space: nowrap;
  min-width: 50px;
  .fold-icon {
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: calc(50% - 5px);
    color: #1890ff;
  }
}

.btn-pop {
  min-width: 20px;
  span,
  div {
    margin-right: 5px;
  }
  /deep/ .el-button--text {
    margin-left: 6px;
  }
}
</style>

