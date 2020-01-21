<template>
  <button
    :disabled="buttonDisabled || loading"
    :class="['zmm-button',
             type ? 'zmm-button--' + type : '',
             {
               'is-loading': loading,
               'is-disabled': buttonDisabled,
               'is-plain': plain,
               'is-circle': circle,
               'is-loading': loading,
    }]"
  >
    <i class="el-icon-loading" v-if="loading"></i>
    <span>
      <slot />
    </span>
  </button>
</template>
<script>
export default {
  name: "ZmmButton",
  props: {
    // primary / success / warning / danger / info / text
    type: {
      type: String,
      default: "default"
    },
    // medium / small / mini
    size: String,
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean,
    icon: {
      type: String,
      default: ""
    },
    nativeType: {
      type: String,
      default: "button"
    }
  },
  data: function() {
    return {

    };
  },
  computed: {
    buttonDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    }
  }
};
</script>
<style scoped>
/* @import "@/views/elementUI/css/button.css"; */

.zmm-button {
  padding: 10px 18px;
  display: inline-block;
  /* 去掉原本的轮廓 */
  outline: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  background: #fff;
  cursor: pointer;
  white-space: nowrap;
  font-size: 14px;
  /* 当前的字体尺寸相乘来设置行间距 */
  line-height: 1;
}
.zmm-button:focus,
.zmm-button:hover {
  color: #409eff;
  background-color: #ecf5ff;
  border-color: #c6e2ff;
}
.zmm-button:active {
  border: 1px solid #409eff;
  /* border-color:#c6e2ff; */
}
/* loading */
.zmm-button.is-loading {
  /* 元素不再是鼠标事件的目标, 鼠标不再监听当前层而去监听下面的层中的元素*/
  pointer-events: none;
}
/* type */
.zmm-button.zmm-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
.zmm-button.zmm-button--primary:focus,
.zmm-button.zmm-button--primary:hover {
  color: #fff;
  background-color: #66b1ff;
  border-color: #66b1ff;
}
.zmm-button.zmm-button--primary:active {
  color: #fff;
  background-color: #3a8ee6;
  border-color: #409eff;
}

.zmm-button.zmm-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
}
.zmm-button.zmm-button--success:focus,
.zmm-button.zmm-button--success:hover {
  color: #fff;
  background-color: #85ce61;
  border-color: #85ce61;
}
.zmm-button.zmm-button--success:active {
  color: #fff;
  background-color: #5daf34;
  border-color: #5daf34;
}

.zmm-button.zmm-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
}
.zmm-button.zmm-button--warning:focus,
.zmm-button.zmm-button--warning:hover {
  color: #fff;
  background-color: #ebb563;
  border-color: #ebb563;
}
.zmm-button.zmm-button--warning:active {
  color: #fff;
  background-color: #cf9236;
  border-color: #cf9236;
}
.zmm-button.zmm-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
}
.zmm-button.zmm-button--danger:focus,
.zmm-button.zmm-button--danger:hover {
  color: #fff;
  background-color: #f78989;
  border-color: #f78989;
}
.zmm-button.zmm-button--danger:active {
  color: #fff;
  background-color: #dd6161;
  border-color: #dd6161;
}
.zmm-button.zmm-button--info {
  color: #fff;
  background-color: #a6a9ad;
  border-color: #a6a9ad;
}
.zmm-button.zmm-button--info:focus,
.zmm-button.zmm-button--info:hover {
  color: #fff;
  background-color: #a6a9ad;
  border-color: #a6a9ad;
}
.zmm-button.zmm-button--info:active {
  color: #fff;
  background-color: #82848a;
  border-color: #82848a;
}
.zmm-button.zmm-button--text {
  color: #409eff;
  background: 0 0;
  padding-left: 0;
  padding-right: 0;
  border-color: transparent;
}
.zmm-button.zmm-button--text:focus,
.zmm-button.zmm-button--text:hover {
  color: #66b1ff;
  background-color: transparent;
}
.zmm-button.zmm-button--text:active {
  color: #3a8ee6;
  background-color: transparent;
}
.zmm-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}
</style>