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
      // async function testa() {
      //   return "testa";
      // }
      // function testb() {
      //   return Promise.resolve("testb");
      // }
      // function testc() {
      //   const a = await testa();
      //   const b = await testb();
      //   console.log(a + b);
      //   return a + b;
      // }
      // console.log(testc());
    }
  }
};
</script>
