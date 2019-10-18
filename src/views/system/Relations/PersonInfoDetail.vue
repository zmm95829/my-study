<template>
  <div>
    <el-form :inline="true" :disabled="true">
      <el-form-item label="人员名称">
        <el-input v-model="model.name" placeholder="人员名称" clearable/>
      </el-form-item>
      <el-form-item label="联系方式">
        <el-input v-model="model.contract" placeholder="联系方式" clearable/>
      </el-form-item>
      <el-form-item label="家庭住址">
        <el-input v-model="model.addr" placeholder="家庭住址" clearable/>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="model.remarks" placeholder="备注" clearable/>
      </el-form-item>
    </el-form>
    <relations :name-id="$route.query.id"/>
  </div>
</template>
<script>
// // import uuid from "uuid/v4";
import { findById } from "./api/personInfo.js";
import Relations from "./Relations.vue";
const modelSchema = {
        id: "",
        name: "",
        addr: "",
        contract: "",
        remarks: ""
      };
export default {
  name: "PersonInfoDetail",
  components: {
    Relations
  },
  data: function() {
    return {
      tableData: [],
      model: JSON.parse(JSON.stringify(modelSchema)),
      isEdit: false
    };
  },
  mounted() {
    findById(this.$route.query.id)
    .then(v => {
      console.log("人员",v);
      this.model = v;
    });
  },
  methods: {
  }
};
</script>