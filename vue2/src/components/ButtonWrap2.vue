<!--
 * @Author: hly
 * @Description: 根据数量计算显示隐藏 优化版
 * 待解决? : 动态计算,需要监听宽度变化
 * @Date: 2023-02-09 12:12:08
 * @LastEditTime: 2023-03-31 11:23:32
 * @FilePath: /vue2/src/components/ButtonWarp2.vue
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
  name: "ButtonWarp",
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
      const children2 = this.$refs[`_bf2+${this.cIndex}_button`].children;
      console.log("children: ==>", children);
      console.log("children2: ==>", children2);
      this.$nextTick(() => {
        this.isFold = children.length > 3;
        if (this.isFold) {
          for (let i = this.showNum, len = children.length; i < len; i++) {
            children[i].style.display = "none";
          }
          for (let i = 0, len = children2.length; i < len; i++) {
            children2[i].style.display = "none";
            if (i >= this.showNum) {
              children2[i].style.display = "block";
            }
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
    display: flex;
    flex-direction: column;
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
