<template>
  <div>
    人员信息
    <el-table :data="tableData">
      <el-table-column prop="" label="人员名称"/>
      <el-table-column prop="" label="联系方式"/>
      <el-table-column prop="" label="家庭住址"/>
      <el-table-column prop="" label="备注"/>
    </el-table>
  </div>
</template>
<script>
import { createDB } from "./dbHelper.js";
export default {
  name: "PersonInfo",
  data: function() {
    return {
      tableData: []
    };
  },
  mounted() {
createDB("PersonInfo");
  }
};
</script>