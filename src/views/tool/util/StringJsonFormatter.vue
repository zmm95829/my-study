<template>
  <section>
    <div>
      <div style="width: 48%; float: left;">
        <el-input
          v-model="model"
          type="textarea"
          :autosize="{minRows: 3}"
          placeholder="请输入json字符串"
        />
        <el-switch
          v-model="doubleQuote"
          active-color="#13ce66"
          :active-value="true"
          :inactive-value="false"
          active-text="带双引号"
          inactive-text="不带双引号"
        />
        <el-button type="primary" size="mini" @click="handleOk">确定</el-button>
        <el-input
          v-model="getModel"
          type="textarea"
          :autosize="{minRows: 3}"
          placeholder="生成的格式化json字符串"
        />
      </div>
      <div style="width: 48%; float: left; height: 500px; overflow-y: auto;">
        <label>参考代码</label>
        <xmp>{{ code }}</xmp>
      </div>
    </div>
  </section>
</template>
<script>
import code from "./../code/stringJsonFormatter.js";
import { jsonFormat } from "./../helper/stringJsonFormatter";
export default {
  name: "StringJsonFormatter",
  data: function() {
    return {
      code,
      model: "",
      getModel: "",
      doubleQuote: true
    };
  },
  methods: {
    handleOk: function() {
      this.getModel = jsonFormat(this.model, this.doubleQuote);
    }
  }
};
</script>