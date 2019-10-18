<template>
  <div>
    <el-form :inline="true">
      <el-button v-if="!isEdit" type="primary" @click="handleChangeEdit()">新增</el-button>
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
      <el-button v-if="isEdit" type="primary" @click="handleSave">保存</el-button>
      <el-button v-if="isEdit" type="primary" @click="handleChangeEdit()">取消</el-button>
      <el-button v-else type="primary" @click="handleSearch">查询</el-button>
    </el-form>
    人员信息
    <el-table :data="tableData">
      <el-table-column prop="name" label="人员名称"/>
      <el-table-column prop="contract" label="联系方式"/>
      <el-table-column prop="addr" label="家庭住址"/>
      <el-table-column prop="remarks" label="备注"/>
      <el-table-column label="操作">
        <template slot-scope="{row}">
          <el-button type="text" @click="handleView(row)">查看</el-button>
          <el-button type="text" @click="handleEdit(row)">编辑</el-button>
          <el-button type="text" @click="handleDelete(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import uuid from "uuid/v4";
import { save, list, deleteById } from "./api/personInfo.js";
const modelSchema = {
        id: "",
        name: "",
        addr: "",
        contract: "",
        remarks: ""
      };
export default {
  name: "PersonInfo",
  data: function() {
    return {
      tableData: [],
      model: JSON.parse(JSON.stringify(modelSchema)),
      isEdit: false
    };
  },
  mounted() {
    save({
      id: uuid(),
      name: "aaa1",
      addr: "aaa2",
      contract: "aaa3",
      remarks: "aaa4"
    }).then(() =>
    save({
      id: uuid(),
      name: "bbb1",
      addr: "bbb2",
      contract: "bbb3",
      remarks: "bbb4"
    })).then(() => this.handleSearch());
  },
  methods: {
    handleSave: function() {
      if (!this.model.name || !this.model.addr) {
        this.$message({
          type: "warning",
          message: "请将人员名称和家庭住址填写完整",
          showClose: true
        });
        return;
      }
      if (!this.model.id) {
        this.model.id = uuid();
        save(this.model).then(()  => {
        this.handleChangeEdit();
          this.handleSearch();
        });
      } else {
      save(this.model, true).then(() => {
        this.model = JSON.parse(JSON.stringify(modelSchema));
        this.handleChangeEdit();
        this.handleSearch();
      });
      }
    },
    handleSearch: function() {
      list(this.model).then(v => {
        this.tableData = v;
      });
    },
    handleChangeEdit: function(isEdit) {
      this.isEdit = isEdit || !this.isEdit;
      if (!isEdit && this.model.id) {
        this.model = JSON.parse(JSON.stringify(modelSchema));
      }
    },
    handleDelete: function(row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          
      deleteById(row.id).then(() => {
        this.$message({
          type: "success",
            message: "删除成功!"
          });
        this.handleSearch();
      });
        }).catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });          
        });
    },
    handleEdit: function(row) {
      console.log("编辑", row);
      Object.assign(this.model, row);
      this.handleChangeEdit(true);
    },
    handleView: function(row) {
      this.$router.push({
        name: "PersonInfoDetail",
        query: {
          id: row.id
        }
      });
    }
  }
};
</script>