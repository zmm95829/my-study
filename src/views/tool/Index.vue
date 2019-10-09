<template>
  <section>
    <div>工具</div>
    <el-collapse v-model="activeNames">
      <el-collapse-item title="根据excel批量生成代码" name="1">
        <generate-batch-code />
      </el-collapse-item>
    </el-collapse>
  </section>
</template>
<script>
import GenerateBatchCode from "./util/GenerateBatchCode";
export default {
  name: "Tool",
  components: {
    GenerateBatchCode
  },
  data: function() {
    return {
      activeNames: ""
    };
  }
};
</script>
