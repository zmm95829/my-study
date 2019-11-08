<template>
  <div>
    <zmm-button>参考测试按钮</zmm-button>
    <el-button>参考按钮</el-button>
    <zmm-button plain>测试按钮</zmm-button>
    <el-button plain>按钮</el-button>
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