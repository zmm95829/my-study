<template>
  <div>
    <my-dialog v-model="dialog.visible" @handle-ok="handleOk">
      <el-form :inline="true">
        <el-form-item label="人员名称">
          <el-select v-model="dialog.model.nameId" clearable>
            <el-option
              v-for="(item, index) in dict.nameOptions"
              :key="index"
              :label="item.name"
              :value="item.id"
              @change="handleChangeName"/>
          </el-select>
        </el-form-item>
        <el-form-item label="事件名称">
          <el-input v-model="dialog.model.brief" placeholder="事件名称" clearable/>
        </el-form-item>
        <el-form-item label="发生时间" class="ctbms-form__el-form-item">
          <el-date-picker
            v-model="dialog.model.date"
            style="width:100%"
            type="date"
            clearable
            value-format="yyyy-MM-dd"
          />
        </el-form-item>
        <el-form-item label="事件描述">
          <el-input
            v-model="dialog.model.desc"
            :autosize="{rows: 3}"
            type="textarea"
            placeholder="事件描述"
            clearable/>
        </el-form-item>
        <el-form-item label="关联我的事件">
          <el-select v-model="dialog.model.myThingId" :disabled="true">
            <el-option
              v-for="(item, index) in dict.myThingOptions"
              :key="index"
              :label="item.brief"
              :value="item.id"
              clearable/>
          </el-select>
        </el-form-item>
      </el-form>
    </my-dialog>
  </div>
</template>
<script>
import uuid from "uuid/v4";
import MyDialog from "@/components/MyDialog.vue";
import { save } from "./api/relations.js";
import { list as myThingsList } from "./api/myThings.js";
import { list as personInfoList } from "./api/personInfo.js";

export default {
  name: "RelationsDetail",
  props: {
    dialog: {
      type: Object,
      required: true
    }
  },
  components: {
    MyDialog
  },
  data: function() {
    return {
      dict: {
        myThingOptions: [],
        nameOptions: []
      }
    };
  },
  mounted() {
    Promise.resolve()
      .then(() => this.getDict());
  },
  methods: {
    /**
     * 获取下拉选项
     */
    getDict: function() {
      return Promise.all([
        myThingsList().then(v => {
          this.dict.myThingOptions = v;
        }),
        personInfoList().then(v => {
          this.dict.nameOptions = v;
        })
      ]);
    },
    /**
     * 保存数据
     */
    handleOk: function() {
      if (!this.dialog.model.id) {
        this.dialog.model.id = uuid();
        save(this.dialog.model).then(() => {
          this.dialog.visible = false;
          this.$emit("handle-ok");
        });
      } else {
        save(this.dialog.model, true).then(() => {
          this.dialog.visible = false;
          this.$emit("handle-ok");
        });
      }
    },
    /**
     * 给名称赋值
     */
    handleChangeName: function(id) {
      this.dialog.model.name = this.dict.nameOptions.find(v => v.id === id).name;
    }
  }
};
</script>