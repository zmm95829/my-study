<template>
  <button 
    class="zmm-button"
    >

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
  }
};
</script>
<style scoped>
/* @import "@/views/elementUI/css/button.css"; */
.zmm-button {
  padding: 10px 18px;
  display: inline-block;
  outline: none;
  border-radius: 4px;
  border: 1px solid #DCDFE6;
  background: #FFF;
}
.zmm-button:focus, .zmm-button:hover {
  color: #409eff;
  background-color: #ecf5ff; 
}
.zmm-button:active {
  border: 1px solid #409eff
}
.zmm-button.is-loading {
  /* 元素不再是鼠标事件的目标, 鼠标不再监听当前层而去监听下面的层中的元素*/
  pointer-events: none; 
}
</style>