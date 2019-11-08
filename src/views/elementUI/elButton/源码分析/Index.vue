<template>
  <button
    :disabled="buttonDisabled || loading"
    :class="['zmm-button',
     type ? 'zmm-button--' + type : '',
     {
      'is-loading': loading,
      'is-disabled': buttonDisabled,
      'is-plain': plain,
      'is-loading': loading,
      'is-loading': loading,
      }]"
    >
    <i class="el-icon-loading" v-if="loading"></i>
    <slot/>
  </button>
</template>
<script>
export default {
  name: "ZmmButton",
  props: {
    // primary / success / warning / danger / info / text
    type: {
      type: String,
      default: 'default'
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
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    }
  },
  data: function() {
    return {

    }
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
  border: 1px solid #DCDFE6;
  background: #FFF;
  cursor: pointer;
}
.zmm-button:focus, .zmm-button:hover {
  color: #409eff;
  background-color: #ecf5ff;
  border-color:#c6e2ff;
}
.zmm-button:active {
  border: 1px solid #409eff;
  border-color:#c6e2ff;
}
/* loading */
.zmm-button.is-loading {
  /* 元素不再是鼠标事件的目标, 鼠标不再监听当前层而去监听下面的层中的元素*/
  pointer-events: none; 
}
/* type */
.zmm-button.zmm-button--primary{
  color: #FFF;
  background-color: #409EFF;
  border-color: #409EFF;
}
.zmm-button.zmm-button--primary:focus, .zmm-button.zmm-button--primary:hover{
  color: #FFF;
  background-color: #66b1ff;
  border-color: #66b1ff;
}
.zmm-button.zmm-button--primary:active {
  color: #FFF;
  background-color: #3a8ee6;
  border-color: #409EFF;
}

.zmm-button.zmm-button--success{
  color: #FFF;
  background-color: #67C23A;
  border-color: #67C23A;
}
.zmm-button.zmm-button--success:focus, .zmm-button.zmm-button--success:hover{
  color: #FFF;
  background-color: #85ce61;;
  border-color: #85ce61;;
}
.zmm-button.zmm-button--success:active {
  color: #FFF;
  background-color: #5daf34;
  border-color: #5daf34;
}

.zmm-button.zmm-button--warning{
  color: #FFF;
  background-color: #E6A23C;
  border-color: #E6A23C;
}
.zmm-button.zmm-button--warning:focus, .zmm-button.zmm-button--warning:hover{
  color: #FFF;
  background-color: #ebb563;;
  border-color: #ebb563;;
}
.zmm-button.zmm-button--warning:active {
  color: #FFF;
  background-color: #cf9236;
  border-color: #cf9236;
}
.zmm-button.zmm-button--danger{
  color: #FFF;
  background-color: #F56C6C;
  border-color: #F56C6C;
}
.zmm-button.zmm-button--danger:focus, .zmm-button.zmm-button--danger:hover{
  color: #FFF;
  background-color: #f78989;;
  border-color: #f78989;;
}
.zmm-button.zmm-button--danger:active {
  color: #FFF;
  background-color: #dd6161;
  border-color: #dd6161;
}
.zmm-button.zmm-button--info{
  color: #FFF;
  background-color: #a6a9ad;
  border-color: #a6a9ad;
}
.zmm-button.zmm-button--info:focus, .zmm-button.zmm-button--info:hover{
  color: #FFF;
  background-color: #a6a9ad;;
  border-color: #a6a9ad;;
}
.zmm-button.zmm-button--info:active {
  color: #FFF;
  background-color: #82848a;
  border-color: #82848a;
}
.zmm-button.zmm-button--text{
  color: #409EFF;
  background: 0 0;
  padding-left: 0;
  padding-right: 0;
  border-color: transparent;
}
.zmm-button.zmm-button--text:focus, .zmm-button.zmm-button--text:hover{
  color: #66b1ff;
  background-color:transparent
}
.zmm-button.zmm-button--text:active {
  color: #3a8ee6;
  background-color:transparent
}
</style>