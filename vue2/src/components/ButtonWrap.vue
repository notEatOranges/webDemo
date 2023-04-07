<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<!--
 * @Author: hly
 * @Description: 
 * @Date: 2022-07-07 15:16:00
 * @LastEditTime: 2023-03-31 15:12:52
 * @FilePath: /vue2/src/components/ButtonWrap.vue
-->
<template>
  <div id="TableButton" class="button-page">
    <el-link
      v-for="(btn, index) in buttonRevealData"
      :key="`btn_${index}`"
      class="table-button-item"
      @click.native="emitEvent(btn)"
    >
      {{ btn.label }}
    </el-link>

    <el-popover
      v-if="buttonData.length > btnNum"
      class="table-button-item"
      placement="bottom"
      trigger="hover"
    >
      <div class="table-button-content">
        <el-link
          v-for="(btn2, index) in buttonFoldData"
          :key="`btn_item_${index}`"
          class="table-button-link"
          @click.native="emitEvent(btn2)"
        >{{ btn2.label }}</el-link>
      </div>

      <el-link slot="reference">
        <i class="el-icon-more ellipsis" />
      </el-link>
    </el-popover>
  </div>
</template>

<script>
import mixin_local from '@/mixins/button'
import { mapState } from 'vuex'
import DEV_CONFIG from '@/config'
export default {
  name: 'TableButton',
  mixins: [mixin_local],
  props: {
    tableButtonList: {
      require: true,
      type: Array,
      default: () => []
    },
    scope: {
      require: true,
      type: Object,
      default: () => ({ row: {} })
    },
    width: {
      require: false,
      type: Number,
      default: () => 80
    },
    btnNum: {
      equire: false,
      type: Number,
      default: () => 2
    }
  },
  data () {
    return {
      buttonList: [],
      WhiteList: ['VIEW', 'DETAIL']
    }
  },
  computed: {
    ...mapState(['buttonAuth']),
    DEV_CONFIG: () => DEV_CONFIG,
    // 所有的按钮
    buttonData () {
      let btnList = []
      if (DEV_CONFIG.IS_CHECK_AUTHORITY) {
        btnList = this.tableButtonList.filter(buttonItem =>
          this.checkVif(this.scope, buttonItem) && this.checkAuth(this.scope, buttonItem)
        )
      } else {
        btnList = this.tableButtonList
      }
      console.log('看看所有按钮: ', btnList)
      return btnList
    },
    // 折叠的按钮
    buttonFoldData () {
      if (this.buttonData.length > this.btnNum) {
        const btns = this.buttonData.slice(this.btnNum)
        return btns
      }
      return []
    },
    // 前两个按钮
    buttonRevealData () {
      if (this.buttonData.length > this.btnNum) {
        const btns = this.buttonData.slice(0, this.btnNum)
        return btns
      }
      return this.buttonData
    }
  },

  methods: {
    /**
     * @function 往外抛出事件
     * @param {Object} buttonItem 按钮参数
     */
    emitEvent (buttonItem) {
      this.$emit(buttonItem.eventName)
    },
    /**
     * @function 执行v_if 里的判断
     * @param {Object} scope 表格行数据
     * @param {Object} buttonItem 按钮参数
     */
    checkVif (scope, buttonItem) {
      if (this.isNull(buttonItem.v_if)) {
        buttonItem.v_if = 'true'
        return true
      }
      // eslint-disable-next-line no-new-func
      return new Function('scope', 'return ' + buttonItem.v_if)(
        scope,
        buttonItem
      )
    },
    /**
     * @function 检查账户权限 CODE 账户权限 canEdit 当前用户是否可以编辑
     * @param {Object} scope 表格行数据
     * @param {Object} buttonItem 按钮参数
     */
    checkAuth (scope, buttonItem) {
      console.log('this.buttonAuth: ==>', this.buttonAuth)
      // 没有编辑权限 只显示查看按钮 (优先校验白名单) 
      // 可能有的页面没有将 查看按钮放入权限控制 所以空的也放行
      if (
        this.WhiteList.includes(buttonItem.code) ||
        this.isNull(buttonItem.code)
      ) {
        return true
      }
      // 1.判断是否有账号权限
      if (
        this.buttonAuth.includes(buttonItem.code)
      ) {
        return true
      }
      // 2. 判断是否有编辑权限
      // if (this.checkCanEdit(scope)) {
      //   // 有编辑权限 正常校验权限 (第一步已经过滤了账号权限 有编辑权限所有按钮都放行)
      //   return true
      // }
      // 其他的均不展示
      return false
    },
    // 是否有编辑权限
    /**
     * @function 是否有编辑权限 canEdit
     * @param {Object} scope 表格行数据
     */
    checkCanEdit (scope) {
      // canEdit 为空或不存在默认认为是拥有编辑权限
      if (scope.row.canEdit === false) {
        return false
      }
      return true
    },
    /**
     * @function 是否是空 isNull
     * @param {any} scope 表格行数据
     */
    isNull (code) {
      // canEdit 为空或不存在默认认为是拥有编辑权限
      if (code === null || code === undefined || code === '') {
        return true
      }
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
.table-button-content {
  display: flex;
  align-items: center;
  flex-direction: column;
  .table-button-link {
    padding: 3px 6px;
  }
}
.ellipsis {
  font-size: 16px;
  font-weight: 300;
}
/deep/.el-link--inner {
  color: $--color-primary;
}
</style>
