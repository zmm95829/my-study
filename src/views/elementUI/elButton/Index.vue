<template>
  <div>
    <zmm-button>测试按钮</zmm-button>
    <el-button :loading="true">按钮</el-button>
  </div>
</template>
<script>
import ZmmButton from "./源码分析/Index";
export default {
  name: "ELButton",
  components: {
    ZmmButton
  },
  data: function() {
    return {

    };
  }
};
</script>