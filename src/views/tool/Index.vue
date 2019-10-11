<template>
  <section>
    <div>工具</div>
    <el-collapse v-model="activeNames">
      <el-collapse-item title="根据excel批量生成代码" name="1">
        <generate-batch-code />
      </el-collapse-item>
      <el-collapse-item title="JSON字符串转换成格式化的字符串" name="2">
        <string-json-formatter />
      </el-collapse-item>
    </el-collapse>
  </section>
</template>
<script>
import GenerateBatchCode from "./util/GenerateBatchCode";
import StringJsonFormatter from "./util/StringJsonFormatter";
export default {
  name: "Tool",
  components: {
    GenerateBatchCode,
    StringJsonFormatter
  },
  data: function() {
    return {
      activeNames: ""
    };
  }
};
</script>
