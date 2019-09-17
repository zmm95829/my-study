<template>
  <section>
    <el-button @click="handleSimpleClick">简单例子-截图百度页面</el-button>
  </section>
</template>
<script>
export default {
  name: "Pupeteer",
  data: function() {
    return {};
  },
  methods: {
    /**
     * 简单例子：截图百度
     */
    handleSimpleClick: function() {
      alert("aaa");
    }
  }
};
</script>
