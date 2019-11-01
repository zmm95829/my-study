<template>
  <div>
    <el-form :inline="true">
      <el-button type="primary" @click="handleAdd()">新增</el-button>
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
      <el-table-column prop="brief" label="事件名称" />
      <el-table-column prop="desc" label="事件描述" />
      <el-table-column prop="date" label="发生时间" />
      <el-table-column label="操作">
        <template slot-scope="{row}">
          <el-button type="text" @click="handleView(row)">查看</el-button>
          <el-button type="text" @click="handleEdit(row)">编辑</el-button>
          <el-button type="text" @click="handleDelete(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <my-things-detail :dialog="dialog" :is-view="isView" @handle-ok="handleOk" />
  </div>
</template>
<script>
// import uuid from "uuid/v4";
import MyThingsDetail from "./MyThingsDetail";
import { list, deleteById } from "./api/myThings.js";
export default {
  name: "Relations",
  components: {
    MyThingsDetail
  },
  data: function() {
    return {
      visible: false,
      tableData: [],
      isView: true,
      model: {
        name: "",
        brief: "",
        desc: "",
        date: ""
      },
      dialog: {
        model: {
          id: "",
          brief: "",
          desc: "",
          date: ""
        },
        visible: false
      }
    };
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
      this.isView = false;
      this.dialog.visible = true;
      Object.assign(this.dialog.model, row);
    },
    handleView: function(row) {
      this.isView = true;
      this.dialog.visible = true;
      Object.assign(this.dialog.model, row);
    },
    handleOk: function() {
      this.handleSearch();
    },
    handleAdd: function() {
      this.dialog.model = {
        id: "",
        brief: "",
        desc: "",
        date: ""
      };
      this.isView = false;
      this.dialog.visible = true;
    }
  }
};
</script>