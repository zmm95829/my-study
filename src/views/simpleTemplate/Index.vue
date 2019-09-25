<template>
  <section>
    <div>布局</div>
    <ul>
      <li v-for="(item, index) in array" :key="index">
        <span>{{ item.label }}</span>
        <el-button type="text" @click="handleClickDisplay(item.value)">演示</el-button>
        <el-button type="text" @click="handleClickViewCode(item.label)">查看代码</el-button>
        <div v-show="item.label === showLabel" style="max-height: 600px; overflow-y: auto; background-color: #c6ced5; max-width:900px;">
          <xmp>{{ item.value }}</xmp>
        </div>
      </li>
    </ul>
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
      showLabel: ""
    };
  },
  methods: {
    handleClickDisplay: function(value) {
      const w = window.open("about:blank");
      w.document.write(value);
      w.document.close();
    },
    handleClickViewCode: function(label) {
      this.showLabel = this.showLabel && this.showLabel === label ? "" : label;
    }
  }
};
</script>
