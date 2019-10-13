<template>
  <section>
    <ul>
      <li v-for="(item, index) in assembly" :key="index">
        <div>{{ item.label }}</div>
        <ul>
          <li v-for="(itemSub, indexSub) in item.children" :key="indexSub">
            <span>{{ itemSub.label }}</span>
            <el-button type="text" @click="handleClickDisplay(itemSub.value)">演示</el-button>
            <el-button type="text" @click="handleClickViewCode(itemSub.label)">查看代码</el-button>
            <div v-show="itemSub.label === showLabel" style="max-height: 600px; overflow-y: auto; background-color: #c6ced5; max-width:900px;">
              <xmp>{{ itemSub.value }}</xmp>
            </div>
          </li>
        </ul>
      </li>
    </ul>
    <ul>
      <li v-for="(item, index) in example" :key="index">
        <div>{{ item.label }}</div>
        <ul>
          <li v-for="(itemSub, indexSub) in item.children" :key="indexSub">
            <span>{{ itemSub.label }}</span>
            <ul>
              <li v-for="(itemSubSub, indexSubSub) in itemSub.children" :key="indexSubSub">
                <span>{{ itemSubSub.label }}</span>
                <el-button type="text" @click="handleClickViewCode(itemSubSub.label)">查看</el-button>
                <div v-show="itemSubSub.label === showLabel" style="max-height: 600px; overflow-y: auto; background-color: #c6ced5; max-width:900px; display: flex;">
                  <div :class="itemSubSub.label"/>
                  <xmp>{{ itemSubSub.value }}</xmp>
                </div>
                <ul v-if="itemSubSub.children && itemSubSub.children.length">
                  <li v-for="(sub, i) in itemSubSub.children" :key="i">
                    <span>{{ sub.label }}</span>
                    <el-button type="text" @click="handleClickViewCode(sub.label)">查看</el-button>
                    <div v-show="sub.label === showLabel" style="max-height: 600px; overflow-y: auto; background-color: #c6ced5; max-width:900px; display: flex;">
                      <div :class="sub.label"/>
                      <xmp>{{ sub.value }}</xmp>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>
<script>
import { assembly, example } from "./index.js";
export default {
  name: "SimpleTemplate",
  data: function() {
    return {
      assembly,
      example,
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
<style scoped>
@import "./css/simpleGraph.css";
</style>