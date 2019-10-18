<template>
  <div>
    <el-form :inline="true">
      <el-button v-if="!nameId" type="primary" @click="handleAdd()">新增</el-button>
      <el-form-item label="人员名称">
        <el-input v-model="model.name" placeholder="人员名称" clearable/>
      </el-form-item>
      <el-form-item label="事件名称">
        <el-input v-model="model.brief" placeholder="事件名称" clearable/>
      </el-form-item>
      <el-form-item label="发生时间" class="ctbms-form__el-form-item">
        <el-date-picker
          v-model="model.date"
          style="width:100%"
          type="daterange"
          clearable
          value-format="yyyy-MM-dd"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        />
      </el-form-item>
      <el-form-item label="事件描述">
        <el-input v-model="model.desc" placeholder="事件描述" clearable/>
      </el-form-item>
      <el-button type="primary" @click="handleSearch">查询</el-button>
    </el-form>
    <el-table :data="tableData">
      <el-table-column prop="name" label="人员名称" />
      <el-table-column prop="brief" label="事件名称" />
      <el-table-column prop="desc" label="事件描述" />
      <el-table-column prop="date" label="发生时间" />
      <el-table-column label="操作">
        <template slot-scope="{row}">
          <el-button type="text" @click="handleEdit(row)">编辑</el-button>
          <el-button type="text" @click="handleDelete(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <relations-detail :dialog="dialog" @handle-ok="handleOk" />
  </div>
</template>
<script>
// import uuid from "uuid/v4";
import RelationsDetail from "./RelationsDetail";
import {  list, deleteById } from "./api/relations.js";
export default {
  name: "Relations",
  props: {
    myThingId: {
      type: String,
      default: undefined
    },
    nameId: {
      type: String,
      default: ""
    }
  },
  components: {
    RelationsDetail
  },
  data: function() {
    return {
      visible: false,
      tableData: [],
      model: {
        name: "",
        brief: "",
        desc: "",
        date: "",
        myThingId: this.myThingId,
        nameId: this.nameId
      },
      dialog: {
        model: {
          id: "",
          name: "",
          nameId: "",
          brief: "",
          desc: "",
          date: "",
          myThingId: ""
        },
        visible: false
      },
      isEdit: false,
    };
  },
  watch: {
    myThingId: function(val) {
      this.model.myThingId = val;
      this.handleSearch();
    },
    nameId: function(val) {
      this.model.nameId = val;
      this.handleSearch();
    }
  },
  mounted() {
    this.handleSearch();
  },
  methods: {
    handleSearch: function() {
      list(this.model).then(v => {
        this.tableData = v;
      });
    },
    handleDelete: function(row) {
      this.$confirm("此操作将永久删除该数据, 是否继续?", "提示", {
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
      this.dialog.visible = true;
      Object.assign(this.dialog.model, row);
    },
    handleOk: function() {
      this.handleSearch();
    },
    handleAdd: function() {
      this.dialog.model = {
         id: "",
          name: "",
          brief: "",
          desc: "",
          date: "",
          myThingId: this.myThingId || ""
      };
      this.dialog.visible = true;
    }
  }
};
</script>