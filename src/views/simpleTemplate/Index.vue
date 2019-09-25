<template>
  <section>
    <div>布局</div>
    <ul>
      <li v-for="(item, index) in array" :key="index">
        <span>{{ item.label }}</span>
        <el-button type="text" @click="handleClickDisplay(item.value)">演示</el-button>
        <el-button type="text" @click="handleClickViewCode(item.value)">查看代码</el-button>
      </li>
    </ul>
    <el-drawer title="我是标题" :visible.sync="drawer.visible" direction="rtl">
      <span>{{ drawer.value }}</span>
    </el-drawer>
  </section>
</template>
<script>
import layoutCenterScroll from "./template/layout-center-scroll";
const array = [
  {
    label: "layout-center-scroll",
    value: layoutCenterScroll
  }
];
export default {
  name: "SimpleTemplate",
  data: function() {
    return {
      array,
      drawer: {
        visible: false,
        value: ""
      }
    };
  },
  methods: {
    handleClickDisplay: function(value) {
      const w = window.open("about:blank");
      w.document.write(value);
      w.document.close();
    },
    handleClickViewCode: function(value) {
      this.drawer.value = value;
      this.drawer.visible = true;
    }
  }
};
</script>
