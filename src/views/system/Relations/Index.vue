<template>
  <div>
    <el-button @click="handleDeleteDB">删除数据库</el-button>
    <el-menu router default-active="activeIndex" mode="horizontal">
      <el-menu-item index="/system/relations/index">人情来往</el-menu-item>
      <el-menu-item index="/system/relations/personInfo">人员信息</el-menu-item>
      <!-- <el-submenu index="2">
        <template slot="title">基础信息</template>
        <el-menu-item index="/system/relations/personInfo">人员信息</el-menu-item>
        <el-menu-item index="2-2">字典信息</el-menu-item>
      </el-submenu> -->
      <el-menu-item index="/system/relations/myThings">我的</el-menu-item>
    </el-menu>
    <router-view/>
  </div>
</template>
<script>
import { openDB, deleteDB } from "./api/dbHelper.js";
export default {
  name: "Relations",
  data: function() {
    return {

    };
  },
  methods: {
    handleDeleteDB: function() {
      deleteDB("Relations");
    }
  },
  created() {
    openDB("Relations");
  }
};
</script>