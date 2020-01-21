<template>
  <div>
    <zmm-button>参考测试按钮</zmm-button>
    <el-button>参考按钮</el-button>
    <zmm-button circle>测试按钮</zmm-button>
    <el-button circle>按钮哈哈</el-button>

    <zmm-button-group>
      <zmm-button>测试按钮1</zmm-button>
      <zmm-button>测试按钮2</zmm-button>
      <zmm-button>测试按钮3</zmm-button>
      <zmm-button>测试按钮4</zmm-button>
      <zmm-button>测试按钮5</zmm-button>
    </zmm-button-group>
    <el-button-group>
      <el-button>参考按钮1</el-button>
      <el-button>参考按钮2</el-button>
      <el-button>参考按钮3</el-button>
      <el-button>参考按钮4</el-button>
      <el-button>参考按钮5</el-button>
    </el-button-group>
  </div>
</template>
<script>
import ZmmButton from "./源码分析/Index";
import ZmmButtonGroup from "./源码分析/Group";
export default {
  name: "ELButton",
  components: {
    ZmmButton,
    ZmmButtonGroup
  },
  data: function() {
    return {

    };
  }
};
</script>