<!--
 * @Author: hly
 * @Description: 根据宽度计算显示隐藏 
 * 待解决: 动态计算,需要监听宽度变化
 * @Date: 2023-02-09 12:12:08
 * @LastEditTime: 2023-02-09 14:32:00
 * @FilePath: /vue2-demo/src/components/ButtonWarpByWidth.vue
-->
<template>
  <div class="bf-box" :ref="`_bf+${cIndex}`">
    <div :ref="`_bf+${cIndex}_button`">
      <slot></slot>
    </div>
    <el-popover
      popper-class="btn-pop"
      placement="bottom"
      width="auto"
      trigger="click"
    >
      <div class="popover-button" :ref="`_bf2+${cIndex}_button`">
        <slot></slot>
      </div>

      <i slot="reference" class="el-icon-more fold-icon" v-show="isFold"></i>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    cIndex: {
      type: Number,
      default: 0,
    },
    time: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      width: "",
      isFold: false,
    };
  },
  watch: {
    // 监听time，重新计算box宽度
    time() {
      this.domInit();
    },
  },
  mounted() {
    this.domInit();
  },
  methods: {
    domInit() {
      const children = this.$refs[`_bf+${this.cIndex}_button`].children;
      this.$nextTick(() => {
        const offsetWidth = this.$refs[`_bf+${this.cIndex}`].offsetWidth;
        const scrollWidth = this.$refs[`_bf+${this.cIndex}`].scrollWidth;
        this.isFold = offsetWidth < scrollWidth;
        console.log("offsetWidth 可视宽: ==>", offsetWidth);
        console.log("scrollWidth 总宽: ==>", scrollWidth);
        if (this.isFold) {
          let wSum = 0,
            bIndex = 0;
          for (let i = 0, len = children.length; i < len; i++) {
            wSum += children[i].offsetWidth;
            i !== 0 ? (wSum += 10) : "";
            if (wSum < offsetWidth - 14) {
              bIndex = i;
              children[i].style.display = "inline-block";
            } else {
              children[i].style.display = "none";
            }
          }

          const children2 = this.$refs[`_bf2+${this.cIndex}_button`].children;
          console.log("children2: ==>", children2);
          for (let k = 0, len = children2.length; k < len; k++) {
            let d = children2[k];
            k >= bIndex + 1
              ? (d.style.display = "block")
              : (d.style.display = "none");
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
  display: flex;
  align-items: center;
  .fold-icon {
    cursor: pointer;
    // position: absolute;
    // right: 10px;
    // top: calc(50% - 5px);
    margin-left: 10px;
    color: #1890ff;
  }
}
.btn-pop {
  min-width: 20px;
  // span,
  // div {
  //   margin-right: 5px;
  // }
  /deep/ .el-button--text {
    // margin-left: 6px;
  }
  .popover-button {
    /deep/ .el-button + .el-button {
      margin-left: 0;
      margin-bottom: 10px;
    }
    & /deep/.el-button:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
